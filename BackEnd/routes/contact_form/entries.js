import express from "express";
import { contactVald } from "../../lib/middlewear/contactVald";
import jwtVerfiy from "../../lib/middlewear/jwtVerify";
import * as db from "../../util/dataHandler";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

//creating new contact form entry

router.post("/", contactVald, async (req, res) => {
  try {
    const newEntry = {
      id: uuidv4(),
      ...req.body,
    };
    console.log(newEntry, req.body);
    await db.add(newEntry);
    return res.send(newEntry);
  } catch (error) {
    return res.status(500).json({ error: "internal Server error" });
  }
});

router.use(jwtVerfiy);
router.get("/", async (req, res) => {
  res.send(await db.getAll());
  console.log("it is working");
});

export default router;
