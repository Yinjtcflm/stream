const fs = require("fs");
const http = require("http");

const server = http.createServer();
server.on("request", (request, response) => {
  const stream = fs.createReadStream("./big_file.txt");
  //   stream.on("data", (chunk) => {
  //     console.log("读取了一次数据");
  //     console.log(chunk.toString());
  //   });
  //   stream.on("end", () => {
  //     console.log("全部读完了");
  //   });
  stream.pipe(response);
  stream.pause();
  setTimeout(() => {
    stream.resume();
  }, 3000);
});
server.listen(8888);
console.log("我执行了");
