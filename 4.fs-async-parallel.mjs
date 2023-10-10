import { readFile } from "node:fs/promises";

Promise.all([
  readFile("./zzz.txt", "utf-8"),
  readFile("./jarjar.txt", "utf-8"),
]).then(([text, secondText]) => {
  console.log("First: ", text);
  console.log("second text: ", secondText);
});
