const proxy = require('http-proxy-middleware');
const express = require('express');

let app = express();

app.use(express.static('./'))

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if(req.method=="OPTIONS") {
      res.send(200);/*让options请求快速返回*/
    } else{
      next();
    }
});

// 服务器代理
//如果请求以/sinaapi开头，则进入代理模式
// http://localhost:4008/sinaapi/api/config/list 转成 https://m.weibo.cn/sinaapi/api/config/list
app.use('/dbapi', proxy({
    "target": "https://m.9ji.com/web/api",
    "changeOrigin": true,
    "pathRewrite": {
        "^/dbapi" : "/"
    }
}));
// app.use('/home', proxy({
//     "target": "https://m.9ji.com/web/api/user/userInfo/v1",
//     "changeOrigin": true,
//     "pathRewrite": {
//         "^/home" : "/"
//     }
// }));
// app.use('/home1', proxy({
//     "target": "https://m.9ji.com/web/api/floors/v1?label=0&page=1&random=0",
//     "changeOrigin": true,
//     "pathRewrite": {
//         "^/home1" : "/"
//     }
// }));
// app.use('/home2', proxy({
//     "target": "https://m.9ji.com/web/api/floors/specialEnjoy/v1",
//     "changeOrigin": true,
//     "pathRewrite": {
//         "^/home2" : "/"
//     }
// }));
// app.get('/', (req,res)=>{
//     res.send(666);
// });
app.listen(2809, function(){
    console.log('Server running on http://localhost:2809');
});