// .js -> por defecto utiliza CommonJS
// .mjs -> por utilizar ES Modules
// .cjs -> por utilizar CommonJS

import { sum, sub, mult } from "./sum.mjs";

console.log(sum(1, 2), sub(1, 2), mult(1, 2));
