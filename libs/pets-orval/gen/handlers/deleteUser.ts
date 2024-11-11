import { createFactory } from 'hono/factory';
import { zValidator } from '../pets.validator';
import { DeleteUserContext } from '../pets.context';
import { deleteUserParams } from '../pets.zod';

const factory = createFactory();


export const deleteUserHandlers = factory.createHandlers(
zValidator('param', deleteUserParams),
async (c: DeleteUserContext) => {

  },
);
