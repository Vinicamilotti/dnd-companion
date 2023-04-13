import z from "zod";
export const createUserSchema = z.object({
  username: z.string(),
  charName: z.string(),
  classes: z.array(z.string()),
  lvl: z.array(z.number()),
  hitDice: z.number(),
  totalHitPoints: z.number(),
});
export type CreateUser = z.TypeOf<typeof createUserSchema>;
