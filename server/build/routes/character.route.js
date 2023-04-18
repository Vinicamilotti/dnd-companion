"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChar = void 0;
const prisma_1 = require("../utils/prisma");
const charRouter = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, charName, classes, hitDice, totalHitPoints, lvl } = data;
    const newChar = {
        username,
        charName,
        classes,
        hitDice,
        lvl,
        totalHitPoints,
    };
    const createChar = yield prisma_1.prisma.character.create({
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
});
exports.default = charRouter;
const getChar = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const char = yield prisma_1.prisma.character.findUnique({ where: { id: id } });
    let response = null;
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
});
exports.getChar = getChar;
