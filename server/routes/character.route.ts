import express, { Request, Response, Router } from "express";
import { prisma } from "../utils/prisma";
import { CreateUser } from "../schemas/character.schema,";
const charRouter: Router = express.Router();
charRouter.post("/create", async (req: Request, res: Response) => {
  const { username, charName, classes, hitDice, totalHitPoints } = req.body;
  const lvl: Array<number> = [1];
  const newChar: CreateUser = {
    username,
    charName,
    classes,
    hitDice,
    lvl,
    totalHitPoints,
  };
  const createChar = await prisma.character.create({
    data: {
      username: newChar.username,
      charName: newChar.charName,
      classes: JSON.stringify(newChar.classes),
      classLvL: JSON.stringify(lvl),
      hitDice,
      totalHitPoints,
    },
  });
  res.json(createChar.id);
});
export default charRouter;
