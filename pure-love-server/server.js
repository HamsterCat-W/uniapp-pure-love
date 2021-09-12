// app 配置
const express = require("express");
const bodyParser = require("body-parser");
var morgan = require("morgan");

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// 日志
app.use(morgan("combined"));

// 跨域配置
app.all("*", (req, res, next) => {
  // console.log(req);
  // 响应报头指示的请求的响应是否可以暴露于该页面
  res.setHeader("Access-Control-Allow-Credentials", "true");
  // 运行跨域的地址
  // res.setHeader("Access-Control-Allow-Origin", req.get("Origin"));
  res.setHeader("Access-Control-Allow-Origin", "*");
  // 允许跨域的方法
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST,GET,PUT,OPTIONS,DELETE,PATCH"
  );

  res.header("Access-Control-Allow-Headers", "*");
  res.header("Content-Type", "application/json;charset=utf-8");

  next();
});

app.get("/", (req, res) => {
  console.log("hello");
  res.send("hello world");
});

app.use((req, res, next) => {
  //   console.log(res.status);
  //   配置404页面
  res.send("404 not found");
  next();
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  next(err);
});

app.use(function (err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: "Something failed!" });
  } else {
    res.status(500).render("error", { error: err });
  }
});
module.exports = app;
