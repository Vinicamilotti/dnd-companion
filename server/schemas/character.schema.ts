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
  code: z.enum(["error", "ok"]),
  id: z.optional(z.string()),
  username: z.optional(z.string()),
  charName: z.optional(z.string()),
  classes: z.optional(z.array(z.string())),
  lvl: z.optional(z.array(z.number())),
  hitDice: z.optional(z.number()),
  totalHitPoints: z.optional(z.number()),
  str: z.optional(z.number()),
  dex: z.optional(z.number()),
  cons: z.optional(z.number()),
  wis: z.optional(z.number()),
  inte: z.optional(z.number()),
  cha: z.optional(z.number()),
});

export type Char = z.TypeOf<typeof charOutputSchema>;
