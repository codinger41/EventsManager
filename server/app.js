import express from "express";
import bodyParser from "body-parser";
import apiRouter from "./routes/api";

dotenv.config();

const app = express();

// secret for json web token
app.set("secret_key", process.env.SECRET_KEY);

// for parsing request body content
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// more recipe api routes
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to EventsManager" });
});
app.all("*", (req, res) => {
  res.status(404).send("404: Not Found");
});

// server initialization
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running. listening on port:  ${port}`);
});

export default app;
