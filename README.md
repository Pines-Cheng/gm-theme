###准备
请确定已经安装nodejs及npm,且电脑上有ruby环境,gem命令能够正常使用.

请先运行命令:`npm install`安装依赖.

安装jekyll静态站点生成器:
```
gem install jekyll
```

###使用
在工程目录运行`gulp watch`监控less文件改动,自动编译.
运行`gulp less`只进行一次编译
进入`gh-pages`目录,运行`jekyll serve`,即可打开`127.0.0.1:4000`查看效果,且文件发生变动自动刷新.


### 发布
将docs下的文档发布到gh-pages分支:
- Step 1 :进入`gh-pages`目录,运行`jekyll build`命令编译.
- Step 2 :在工程目录运行`npm run deploy`即可将`./gh-pages/_site`下的静态网站自动发布到gh-pages分支.
- Step 3 :push Master分支上的代码.
