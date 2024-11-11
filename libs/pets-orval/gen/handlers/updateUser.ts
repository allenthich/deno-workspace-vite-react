import { createFactory } from 'hono/factory';
import { zValidator } from '../pets.validator';
import { UpdateUserContext } from '../pets.context';
import { updateUserParams,
updateUserBody } from '../pets.zod';

const factory = createFactory();


export const updateUserHandlers = factory.createHandlers(
zValidator('param', updateUserParams),
zValidator('json', updateUserBody),
async (c: UpdateUserContext) => {

  },
);
