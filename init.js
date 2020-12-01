import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

const handelListening = () => console.log(`✅ Listening on http://localhost:${PORT}`);

app.get("/", (req, res) => {
  res.send("asdasd");
});
app.listen(PORT, handelListening);
