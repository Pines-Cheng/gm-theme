###准备
请确定已经安装nodejs及npm,且电脑上有ruby环境,gem命令能够正常使用.

请先运行命令:`npm install`安装依赖.

安装jekyll静态站点生成器:
```
gem install jekyll
```
###关于gem源被墙的问题:
- 下载安装Jekyll `坑：国内的镜像不能用，淘宝的镜像也不行了。`
```
$ gem sources -a http://ruby.taobao.org/
Error fetching http://ruby.taobao.org/:
        bad response Not Found 404 (http://ruby.taobao.org/specs.4.8.gz)

```
####解决方法：[Ruby China 的 RubyGems 镜像上线](https://ruby-china.org/topics/29250)

```

gem sources -a https://gems.ruby-china.org/

```

####添加成功后：
```


$  gem sources -l

*** CURRENT SOURCES ***

https://gems.ruby-china.org/

```

###使用
在工程目录运行`gulp watch`监控less文件改动,自动编译.
运行`gulp less`只进行一次编译
进入`gh-pages`目录,运行`npm run dev`,即可打开`127.0.0.1:4000`查看效果,且文件发生变动自动刷新.


### 发布
将docs下的文档发布到gh-pages分支:
- Step 1 :运行`npm run build`构建站点,生成的站点放在`./_site`目录下
- Step 2 :运行`npm run deploy`即可将`./_site`下的静态网站自动发布到gh-pages分支.
