// 入口文件
const app = require("./server");
const port = 5035;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
