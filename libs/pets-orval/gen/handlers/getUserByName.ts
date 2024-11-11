import { createFactory } from 'hono/factory';
import { zValidator } from '../pets.validator';
import { GetUserByNameContext } from '../pets.context';
import { getUserByNameParams,
getUserByNameResponse } from '../pets.zod';

const factory = createFactory();


export const getUserByNameHandlers = factory.createHandlers(
zValidator('param', getUserByNameParams),
zValidator('response', getUserByNameResponse),
async (c: GetUserByNameContext) => {

  },
);
