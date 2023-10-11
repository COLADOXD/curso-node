const http = require("node:http");
const { findAvailablePort } = require("./10.free-port.js");

const desiredPORT = process.env.PORT ?? 3000;

const server = http.createServer((req, res) => {
  console.log("request received");
  res.end("Hi World!");
});

findAvailablePort(desiredPORT).then((port) => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`);
  });
});
