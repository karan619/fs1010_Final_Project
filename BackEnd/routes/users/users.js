import express from "express";
import { userVald } from "../../lib/middlewear/userVald";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";
import * as dbAdmin from "../../dbHandler/admindbHandler";

const router = express.Router();

router.post("/", userVald, async (req, res) => {
  try {
    const newUser = {
      id: uuidv4(),
      name: req.body.name,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
      email: req.body.email,
    };
    const hash = await bcrypt.hash(newUser.password, 10);
    newUser.password = hash;
    newUser.confirmPassword = hash;

    await dbAdmin.addAdmin(newUser);
    return res.send("Admin account has been created");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal Server error" });
  }
});

export default router;
