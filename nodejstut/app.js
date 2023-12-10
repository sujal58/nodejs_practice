//const utility = require("./utility");
// const { add } = require("./utility");

// let x = add(1, 2);

// console.log(x);

const http = require("http");
const port = 500;
const fs = require("fs");
const server = http.createServer((req, res) => {
  // res.writeHead(200, { "Content-Type": "text/html" });
  // const htmlfile = fs.readFileSync("./html_form/index.html", "utf-8");
  // res.write(`${htmlfile}`);
  const url = req.url;
  if (url === "/") {
    res.write("Home");
  }

  if (url === "/contact") {
    res.write("Contact");
  }

  res.end();
});

server.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`http://localhost:${port}`);
});
