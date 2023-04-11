export const diceRoller = (ndice: number, dicetype: number, plus: number) => {
  let rolls: Array<number> = [];
  let sum: number = plus;
  while (ndice > 0) {
    const roll = Math.floor(Math.random() * dicetype + 1);
    rolls.push(roll);
    sum += roll;
    ndice--;
  }
  return { rolls, sum };
};
