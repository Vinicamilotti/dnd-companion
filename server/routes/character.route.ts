import express, { json, Request, Response, Router } from "express";
import { prisma } from "../utils/prisma";
import { Char, CreateUser } from "../schemas/character.schema";
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
export const getChar = async (id: string): Promise<Char | null> => {
  const char = await prisma.character.findUnique({ where: { id: id } });
  let response: Char | null = null;
  if (char) {
    response = {
      username: char.username,
      charName: char.charName,
      proficiences: JSON.parse(char.proficiences),
      classes: JSON.parse(char.classes),
      lvl: JSON.parse(char.classLvL),
      hitDice: char.hitDice,
      totalHitPoints: char.hitDice,
      str: char.str,
      cons: char.cons,
      dex: char.dex,
      wis: char.wis,
      inte: char.inte,
      cha: char.cha,
      id: char.id,
    };
  }
  return response;
};
