import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import contactForm from "./routes/contact_form/entries";
import projects from "./routes/projects/projects";
import newUser from "./routes/users/users";
import userAuth from "./routes/users/auth";
import uploadFile from "./routes/file_upload/upload";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors());
app.use(fileUpload());

/*
app.get("/", (req, res) => {
  res.send("Hello World!");
});*/

app.use("/contact_form/entries", contactForm);
app.use("/projects", projects);
app.use("/users", newUser);
app.use("/auth", userAuth);
app.use("/file-upload", uploadFile);

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
