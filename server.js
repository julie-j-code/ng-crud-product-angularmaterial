const express = require('express');
const jsonserver = require('json-server');

const app = express();


app.use("/api", jsonserver.router('db.json'));
app.use("/static", express.static(path.resolve(__dirname, 'dist/ng-crud-jsonserver-materialui')));

app.get("/*", (req, res) => {
  res.sendFile(__dirname, "dist/ng-crud-jsonserver-materialui/index.html")
  })

app.listen(process.env.PORT || 8080, () => console.log("Server running..."));
