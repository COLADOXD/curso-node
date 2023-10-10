const fs = require("node:fs");

console.log("Leyendo el primer archivo");
fs.readFile("./zzz.txt", "utf-8", (err, text) => {
  console.log(text);
});

console.log("Leyendo el Segundo archivo");
fs.readFile("./jarjar.txt", "utf-8", (err, text) => {
  console.log(text);
});
