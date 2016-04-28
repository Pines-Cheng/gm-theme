/**
 * Created by spider on 16/4/28.
 */

/**
 * @describle 该脚本的作用是,删除指定html文件中的如下的部分,手动删太麻烦了.
 *<div class="zero-clipboard"><span class="btn-clipboard">复制</span></div>
 <div class="highlight">balabala等等等</div>
 */

var path = require('path');
var fs = require('fs');
var cheerio = require('cheerio');
var when = require('when');
var _ = require('underscore');
var touch = require('touch');

var filePath = "../docs/components.html";
var destPath = "../docs/components.html";

console.log(path.join(__dirname, filePath));
console.log(path.join(__dirname, destPath));

//读取文件//获取那两个节点,删除
when(fs.readFileSync(path.join(__dirname, filePath))).then(function (data) {
    var $ = cheerio.load(data);
    $("div.zero-clipboard").remove();
    $("div.highlight").remove();
    return $.html();
}).then(function (data) {
    if (!fs.existsSync(path.join(__dirname, destPath))) {
        touch.sync(path.join(__dirname, destPath));
    }
    fs.writeFileSync(path.join(__dirname, destPath),data);
}).catch(function (err) {
    console.log(err);
    throw err;
});

//删除某些dom