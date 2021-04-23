import express from "express";
import * as db from "../../dbHandler/filedbHandler";
const router = express.Router();

router.get("/", async (req, res) => {
  res.send(await db.getResume());
  console.log("it is working");
});

router.post("/upload", async (req, res) => {
  try {
    const resume_file = req.files.file;
    const uploadFile = "upload/" + resume_file.name;
    await db.addFile({ resume_file: resume_file.name });
    res.send("File uploaded");

    //console.log(resume_file);
    /*resume_file.mv(uploadFile, function (err) {
      if (err) return res.status(500).send(err);
      res.send("File uploaded");
      return db.addFile(resume_file.name);
    });*/
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal Server error" });
  }
});

export default router;
