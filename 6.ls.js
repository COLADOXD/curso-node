const fs = require("node:fs");

fs.readdir("./mjs", (err, files) => {
  if (err) {
    return console.error(err);
  }
  files.forEach((file) => {
    console.log(file);
  });
});
