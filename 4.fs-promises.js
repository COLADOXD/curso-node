const fs = require("node:fs/promises");

console.log("Leyendo el primer archivo");
fs.readFile("./zzz.txt", "utf-8").then((text) => {
  console.log("First text: ", text);
});

console.log("Cosas mientras lee el archivo");

console.log("Leyendo el Segundo archivo");
fs.readFile("./jarjar.txt", "utf-8").then((text) => {
  console.log("First text: ", text);
});
