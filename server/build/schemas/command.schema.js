"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandInputSchema = exports.allCommands = void 0;
const zod_1 = __importDefault(require("zod"));
exports.allCommands = zod_1.default.enum(["!roll", "!card"]);
exports.commandInputSchema = zod_1.default.object({
    username: zod_1.default.string(),
    commandType: zod_1.default.custom(),
    commandParams: zod_1.default.string(),
});
