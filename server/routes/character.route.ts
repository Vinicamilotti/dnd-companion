import express, { Request, Response, Router } from "express";
import { prisma } from "../utils/prisma";
import { CreateUser } from "../schemas/character.schema";
const charRouter = async (data: CreateUser): Promise<string> => {
  const { username, charName, classes, hitDice, totalHitPoints, lvl } = data;
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
  console.log("created", createChar.id);
  return createChar.id;
};
export default charRouter;
