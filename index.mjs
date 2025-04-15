import { createServer } from "node:http";
import { parse } from "node:url";
import indexRoute from "./routes/index.js";
import apiRoute from "./routes/api.js";
import userRoute from "./routes/user.js";

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((req, res) => {
  const parsedUrl = parse(req.url, true);
  const { pathname } = parsedUrl;


  res.setHeader("Content-Type", "application/json")
  res.statusCode = 200;
  if (pathname === "/") {
    indexRoute(req, res);
  } else if (pathname === "/api") {
    apiRoute(req, res);
  } else if (pathname === "/user") {
    userRoute(req, res);
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: "route not found..." }))
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running on http://${hostname}:${port}/`);
});
