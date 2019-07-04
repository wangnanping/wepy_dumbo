<img width="300"  src="https://github.com/wangnanping/wepy_dumbo/blob/master/exhibition/IMG_2859.PNG"></img>
<img width="300"  src="https://github.com/wangnanping/wepy_dumbo/blob/master/exhibition/IMG_2860.PNG"></img>
<img width="300"  src="https://github.com/wangnanping/wepy_dumbo/blob/master/exhibition/IMG_2861.PNG"></img>
<img width="300"  src="https://github.com/wangnanping/wepy_dumbo/blob/master/exhibition/IMG_2862.PNG"></img>
 
 1.用vscode等打开<br>

 2.npm install(cnpm install)<br>

 3.npm run dev(跑起来,监听)<br>

 4.用微信开发者工具打开项目目录dist<br>

 5.npm run build 打包之后 方可上传<br>
 （打包报错 使用cnpm i wepy-plugin-uglifyjs wepy-plugin-imagemin -D）

 #### 部分错误提示 解决
 1.（Unexpected end of JSON input;at pages/moment_detail/moment_detail page lifeCycleMethod onLoad function SyntaxError: Unexpected end of JSON input ）<br>
 解决方式:在JSON.stringify()之后将变量使用encodeURIComponent函数处理，encodeURIComponent() 函数可把字符串作为 URI 组件进行编码。在目标页面接收时用decodeURIComponent转回字符串。<br>

 2.'$pages' of undefined<br>
 解决方式：微信开发者工具中 -》工具-》 详情 ES6转ES5打勾去掉

 3.Cannot read property 'Promise' of undefined<br>
 解决方式：同2
