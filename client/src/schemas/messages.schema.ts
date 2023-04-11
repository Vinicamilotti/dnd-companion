import z from "zod";
const messageResponseSchma = z.object({
  username: z.string(),
  messageData: z.object({
    type: z.enum(["normal", "roll", "card"]),
    rollNumbers: z.optional(z.array(z.number())),
    rollSum: z.optional(z.number()),
    msg: z.optional(z.string()),
  }),
});

export type MessageOutput = z.TypeOf<typeof messageResponseSchma>;
