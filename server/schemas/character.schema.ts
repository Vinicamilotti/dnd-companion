import z, { TypeOf } from "zod";
export const createUserSchema = z.object({
  username: z.string(),
  charName: z.string(),
  classes: z.array(z.string()),
  lvl: z.array(z.number()),
  hitDice: z.number(),
  totalHitPoints: z.number(),
});
export type CreateUser = z.TypeOf<typeof createUserSchema>;

const charOutputSchema = z.object({
  id: z.string(),
  username: z.string(),
  charName: z.string(),
  classes: z.array(z.string()),
  lvl: z.array(z.number()),
  hitDice: z.number(),
  totalHitPoints: z.number(),
  proficiences: z.array(z.string()),
  str: z.number(),
  dex: z.number(),
  cons: z.number(),
  wis: z.number(),
  inte: z.number(),
  cha: z.number(),
});

export type Char = z.TypeOf<typeof charOutputSchema>;
