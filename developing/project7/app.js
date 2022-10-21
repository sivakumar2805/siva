const express = require("express");
const app = express();
app.use(express.json());

const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });

const PORT = process.env.PORT;

const route = require("./router");
app.use("/api/v1", route);

app.listen(PORT, () => {
  console.log(
    `**************Server Started On Port ${process.env.PORT}**************`
  );
});
