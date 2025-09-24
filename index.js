const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mail = require("./routes/mail");

const PORT = process.env.PORT || 4000;

// cookie-parser
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

// app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000", // frontend origin
    credentials: true, // allow cookies/session
  })
);

app.use("/api/v1/", mail);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
