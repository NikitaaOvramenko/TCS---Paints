require('dotenv').config();

const express = require("express");
const sequelize = require("./db");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const path = require("path");
const router = require("./routes");

const app = express();
const PORT = process.env.PORT || 8080;

app.use('/media', express.static(path.resolve(__dirname, 'media')));
app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use('/api', router);

app.get("/", (req, res) => {
  res.send("Express on Railway!");
});

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(` Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error(" DB error:", error);
  }
};

start();

module.exports = app;
