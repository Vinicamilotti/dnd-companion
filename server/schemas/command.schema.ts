import z from "zod";
export const allCommands = z.enum(["!roll", "!card"]);
export type AllCommands = z.TypeOf<typeof allCommands>;
export const commandInputSchema = z.object({
  username: z.string(),
  commandType: z.custom<AllCommands>(),
  commandParams: z.string(),
});
export type CommandInput = z.TypeOf<typeof commandInputSchema>;
