import { createFactory } from 'hono/factory';
import { zValidator } from '../pets.validator';
import { GetInventoryContext } from '../pets.context';
import { getInventoryResponse } from '../pets.zod';

const factory = createFactory();


export const getInventoryHandlers = factory.createHandlers(
zValidator('response', getInventoryResponse),
async (c: GetInventoryContext) => {

  },
);
