const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });

  res.end(`
    <h1>DevOps Production Project 🚀</h1>
    <p>Application is running successfully.</p>
    <p>Environment: ${process.env.NODE_ENV || "development"}</p>
    <p>Server time: ${new Date().toISOString()}</p>
  `);
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Server running on port ${PORT}`);
});
