"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = __importDefault(require("zod"));
const messageResponseSchma = zod_1.default.object({
    username: zod_1.default.string(),
    messageData: zod_1.default.object({
        type: zod_1.default.enum(["normal", "roll", "card"]),
        rollNumbers: zod_1.default.optional(zod_1.default.array(zod_1.default.number())),
        rollSum: zod_1.default.optional(zod_1.default.number()),
        msg: zod_1.default.optional(zod_1.default.string()),
    }),
});
