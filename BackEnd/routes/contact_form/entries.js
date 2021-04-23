import express from "express";
import { contactVald } from "../../lib/middlewear/contactVald";
import jwtVerfiy from "../../lib/middlewear/jwtVerify";
import * as db from "../../dbHandler/contactdbHandler";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

//for deleting the entry from contact_entry table
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await db.delUsers(id);
    return res.send(`the user ${id} has been deleted`);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal Server error" });
  }
});

//update
router.put("/", async (req, res) => {
  try {
    const { id, phoneNumber, email } = req.body;
    await db.updUsers([phoneNumber, email, id]);
    return res.send(`the user has been updated `);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal Server error" });
  }
});

//creating new contact form entry
router.post("/", contactVald, async (req, res) => {
  try {
    const newEntry = {
      id: uuidv4(),
      ...req.body,
    };
    await db.addUsers(newEntry);
    return res.send(newEntry);
  } catch (error) {
    return res.status(500).json({ error: "internal Server error" });
  }
});

router.use(jwtVerfiy);
router.get("/", async (req, res) => {
  res.send(await db.getUsers());
  console.log("it is working");
});

export default router;
