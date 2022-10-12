const fs = require("fs");
const stream = fs.createWriteStream("./big_file.txt");

for (let i = 0; i < 100000; i++) {
  stream.write(`这是第${i}行内容。正在不停的写数据\n`);
}

stream.end();
console.log("done");
