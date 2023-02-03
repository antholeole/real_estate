import { t } from '../context';
import { z } from 'zod';

export const greetings = t.procedure.input(z.object({
    name: z.string()
})).query(({ input }) => {
    return `hello, ${input.name}!`
});