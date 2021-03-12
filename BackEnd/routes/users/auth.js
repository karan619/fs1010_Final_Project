import express from "express";
import * as jwtGenerator from "jsonwebtoken";
const router = express.Router();

router.post("/", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username == "test" && password == "password") {
    const token = jwtGenerator.sign({ username }, process.env.JWT_SECRET, {
      expiresIn: "50m",
    });
    return res.send({ token });
  }
  return res.status(401).send({ error: "incorrect username/password" });
});

export default router;
