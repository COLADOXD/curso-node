const path = require("node:path");

// Barra separadora de tarreas segun S0
console.log(path.sep);
// unir rutas con path join "\"

const filePath = path.join("content", "subFolder", "test.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const fileName = path.basename(filePath, ".txt");
console.log(fileName);

const extend = path.extname(filePath);
console.log(extend);
