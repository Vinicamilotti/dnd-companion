"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diceRoller = void 0;
const diceRoller = (ndice, dicetype, plus) => {
    let rolls = [];
    let sum = plus;
    while (ndice > 0) {
        const roll = Math.floor(Math.random() * dicetype + 1);
        rolls.push(roll);
        sum += roll;
        ndice--;
    }
    return { rolls, sum };
};
exports.diceRoller = diceRoller;
