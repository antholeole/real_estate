import { greetings } from './routes/greetings';
import { t } from './context';

export const appRouter = t.router({
  greetings,
});

// export type definition of API
export type AppRouter = typeof appRouter;