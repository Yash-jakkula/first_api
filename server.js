const express = require("express");
const router = require("./routes/route");
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api/route", router);
