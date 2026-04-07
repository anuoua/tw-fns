const fs = require("fs");
const path = require("path");

const distDir = path.resolve(__dirname, "../dist");

function flatten(dir) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      flatten(fullPath); // 递归处理子目录
      fs.rmdirSync(fullPath); // 移动完后删除空目录
    } else {
      const targetPath = path.join(distDir, file);
      if (fullPath !== targetPath) {
        fs.renameSync(fullPath, targetPath);
      }
    }
  });
}

flatten(distDir);
console.log("平铺完成！");
