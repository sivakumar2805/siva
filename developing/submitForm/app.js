const express = require("express");
const app = express();
app.use(express.json());
const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });

const cors = require("cors");
app.use(cors());
const PORT = process.env.PORT;

const route = require("./router");
app.use("/api/v1", route);
console.log(PORT);
app.listen(PORT, () => {
  console.log(
    `server started on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});
