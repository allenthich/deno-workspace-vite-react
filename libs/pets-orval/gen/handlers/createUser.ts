import { createFactory } from 'hono/factory';
import { zValidator } from '../pets.validator';
import { CreateUserContext } from '../pets.context';
import { createUserBody } from '../pets.zod';

const factory = createFactory();


export const createUserHandlers = factory.createHandlers(
zValidator('json', createUserBody),
async (c: CreateUserContext) => {

  },
);
