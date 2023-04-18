"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const cors_1 = __importDefault(require("cors"));
const commandHandler_1 = require("./Handlers/commandHandler");
const character_route_1 = __importStar(require("./routes/character.route"));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "*",
    },
});
app.use(cors_1.default);
io.on("connection", (socket) => {
    console.log("a user connected");
    socket.on("chat message", (username, msg) => {
        const response = {
            username: username,
            messageData: { type: "normal", msg: msg },
        };
        console.log(msg);
        io.emit("new message", response);
    });
    socket.on("command", (username, commandType, commandParams) => {
        console.log(username, commandType, commandParams);
        const response = (0, commandHandler_1.commandHandler)({
            username,
            commandType,
            commandParams,
        });
        io.emit("new message", response);
    });
    socket.on("create", (data) => __awaiter(void 0, void 0, void 0, function* () {
        const create = yield (0, character_route_1.default)(data);
        socket.emit("created", create);
    }));
    socket.on("getUser", (id) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield (0, character_route_1.getChar)(id);
        if (user) {
            socket.emit("reciveUser", user, "ok");
        }
        else {
            socket.emit("reciveUser", null, "error");
        }
    }));
});
server.listen(3000, () => {
    console.log("listening on *:3000");
});
