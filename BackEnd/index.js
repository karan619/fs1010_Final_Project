import express from "express";
import cors from "cors";
import contactForm from "./routes/contact_form/entries";
import userAuth from "./routes/users/auth";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

/*
app.get("/", (req, res) => {
  res.send("Hello World!");
});*/

app.use("/contact_form/entries", contactForm);
app.use("/auth", userAuth);

app.use(function (error, req, res, next) {
  if (res.headersSent) {
    return next(error);
  }

  console.error(error.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
