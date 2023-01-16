import { createTRPCRouter, publicProcedure } from "../trpc";

export const stickRouter = createTRPCRouter({
  sticks: publicProcedure.query(async ({ ctx }) => {
    const sticks = await ctx.prisma.stick.findMany();
    return sticks;
  }),
});
