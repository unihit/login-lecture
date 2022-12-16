// // http는 내장 모듈
// // express를 사용하지 않고 동일한 사이트를 띄워보는데 불편한 점이 많다.
// const http = require("http");
// const app = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//   // console.log(req.url);
//   if (req.url === "/") {
//     res.end("여기는 루트 입니다.");
//   } else if (req.url === "/login") {
//     res.end("여기는 로그인 화면 입니다.");
//   }
// });

// app.listen(3001, () => {
//   console.log("http로 가동된 서버입니다.");
// });
"use strict";

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("view engine", "ejs");
app.set("views", "./src/views");

// use -> 미들웨어를 등록해주는 메서드
app.use(express.static(`${__dirname}/src/public`));
app.use("/", home);

module.exports = app;
