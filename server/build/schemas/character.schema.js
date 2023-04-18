"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.createUserSchema = zod_1.default.object({
    username: zod_1.default.string(),
    charName: zod_1.default.string(),
    classes: zod_1.default.array(zod_1.default.string()),
    lvl: zod_1.default.array(zod_1.default.number()),
    hitDice: zod_1.default.number(),
    totalHitPoints: zod_1.default.number(),
});
const charOutputSchema = zod_1.default.object({
    id: zod_1.default.string(),
    username: zod_1.default.string(),
    charName: zod_1.default.string(),
    classes: zod_1.default.array(zod_1.default.string()),
    lvl: zod_1.default.array(zod_1.default.number()),
    hitDice: zod_1.default.number(),
    totalHitPoints: zod_1.default.number(),
    proficiences: zod_1.default.array(zod_1.default.string()),
    str: zod_1.default.number(),
    dex: zod_1.default.number(),
    cons: zod_1.default.number(),
    wis: zod_1.default.number(),
    inte: zod_1.default.number(),
    cha: zod_1.default.number(),
});
