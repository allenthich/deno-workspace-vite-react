import { createFactory } from 'hono/factory';
import { zValidator } from '../pets.validator';
import { LogoutUserContext } from '../pets.context';
import {  } from '../pets.zod';

const factory = createFactory();


export const logoutUserHandlers = factory.createHandlers(
async (c: LogoutUserContext) => {

  },
);
