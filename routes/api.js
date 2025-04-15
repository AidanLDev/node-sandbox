import { getPostBody } from "../helpers.js";

export default async function indexRoute(req, res) {
  res.setHeader("Content-Type", "application/json");
  const method = req.method;

  if (method === "GET") {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: "Welcome to the API route" }));
  }

  if (method === "POST") {
    res.statusCode = 200;
    const body = await getPostBody(req);
    console.log("body: ", body);
    res.end(JSON.stringify({ message: "POST request received", body }));
  }
}
