import { parse } from "node:url";

export default function userRoute(req, res) {
  res.setHeader("Content-Type", "application/json");
  const parsedUrl = parse(req.url, true);

  if (parsedUrl.query.name && parsedUrl.query.name.toLowerCase() === "aidan") {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: "You are the chosen one!" }));
    return;
  }

  if (parsedUrl.query.name) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        message: `hey ${parsedUrl.query.name}, you passed the test`,
      }),
    );
    return;
  }

  res.statusCode = 400;
  res.end(JSON.stringify({ message: "wrong input..." }));
}
