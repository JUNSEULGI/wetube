import express from "express";

const app = express();

const handleHome = (req, res) => {
  console.log("someone is coming to home");
  return res.send("<h1>this is home</h1>");
};
app.get("/", handleHome);

const PORT = 4000;
app.listen(PORT, handleListening);

const handleListening = () => console.log("Server is listening on port 4000.");
