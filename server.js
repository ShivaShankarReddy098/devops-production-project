const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });
if (req.url === "/health") {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(
    JSON.stringify({
      status: "ok",
      uptime: process.uptime(),
    })
  );

  return;
}
  res.end(`
    <h1>DevOps Production Project(CI & CD Automation) 🚀</h1>
    <p>Application is running successfully.</p>
    <p>Environment: ${process.env.NODE_ENV || "development"}</p>
    <p>Server time: ${new Date().toISOString()}</p>
  `);
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Server running on port ${PORT}`);
});
