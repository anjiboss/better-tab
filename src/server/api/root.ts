import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import { stickRouter } from "./routers/stick";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  sticks: stickRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
