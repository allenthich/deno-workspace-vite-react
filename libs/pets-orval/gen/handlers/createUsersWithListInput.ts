import { createFactory } from 'hono/factory';
import { zValidator } from '../pets.validator';
import { CreateUsersWithListInputContext } from '../pets.context';
import { createUsersWithListInputBody,
createUsersWithListInputResponse } from '../pets.zod';

const factory = createFactory();


export const createUsersWithListInputHandlers = factory.createHandlers(
zValidator('json', createUsersWithListInputBody),
zValidator('response', createUsersWithListInputResponse),
async (c: CreateUsersWithListInputContext) => {

  },
);
