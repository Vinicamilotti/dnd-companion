"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandHandler = void 0;
const roll_1 = require("../commands/roll");
const commandHandler = (command) => {
    let output = {
        username: command.username,
        messageData: { type: "normal", msg: "error" },
    };
    const { username, commandType, commandParams } = command;
    if (commandType === "!roll") {
        const fullRoll = commandParams.split("d");
        const ndice = fullRoll[0] ? parseInt(fullRoll[0]) : false;
        const probplus = fullRoll[1].split("+");
        var diceType = parseInt(probplus[0]);
        var plus = probplus[1] ? parseInt(probplus[1]) : 0;
        if (ndice) {
            const roll = (0, roll_1.diceRoller)(ndice, diceType, plus);
            output = {
                username,
                messageData: {
                    type: "roll",
                    rollNumbers: roll.rolls,
                    rollSum: roll.sum,
                },
            };
        }
        else {
            output = {
                username,
                messageData: {
                    type: "normal",
                    msg: "Erro! Utilize a sintaxe !roll xdy+z OU xdy+-z",
                },
            };
        }
    }
    return output;
};
exports.commandHandler = commandHandler;
