import { readFile } from "node:fs/promises";

console.log("Leyendo el primer archivo");
const text = await readFile("./zzz.txt", "utf-8");
console.log("First: ", text);

console.log("Cosas mientras lee el archivo");

console.log("Leyendo el Segundo archivo");
const secondText = await readFile("./jarjar.txt", "utf-8");
console.log("second text: ", secondText);
