const express = require("express");
const app = express();

app.use(express.json());

const cors = require("cors");
app.use(cors());

const connectDB = require("./config/db");
connectDB();

app.get("/", (req, res) => res.json({message: "Heyyyy"}))

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App listening on port ${port}`));
