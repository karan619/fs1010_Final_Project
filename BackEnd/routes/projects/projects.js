import express from "express";
import * as db from "../../dbHandler/projectHandler";
const router = express.Router();

//creating new contact form entry
router.post("/create-project", async (req, res) => {
  try {
    const newEntry = {
      ...req.body,
    };
    await db.addProject(newEntry);
    return res.send(newEntry);
  } catch (error) {
    return res.status(500).json({ error: "internal Server error" });
  }
});

//update
router.put("/update-project", async (req, res) => {
  try {
    const { project_id, image, title, link } = req.body;
    await db.updProject([image, title, link, project_id]);
    return res.send(`the user has been updated `);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal Server error" });
  }
});

//for deleting the entry from contact_entry table
router.delete("/:id", async (req, res) => {
  try {
    const project_id = req.params.id;
    await db.delProject(project_id);
    return res.send(`the user ${project_id} has been deleted`);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal Server error" });
  }
});

router.get("/", async (req, res) => {
  res.send(await db.getProject());
  console.log("it is working");
});

//to get the project by id
router.get("/:id", async (req, res) => {
  try {
    const project_id = req.params.id;
    //await db.getPatientChart(HealthCard);
    return res.send(await db.getprojectById(project_id));
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal Server error" });
  }
});

export default router;
