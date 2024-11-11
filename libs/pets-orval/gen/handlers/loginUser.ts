import { createFactory } from 'hono/factory';
import { zValidator } from '../pets.validator';
import { LoginUserContext } from '../pets.context';
import { loginUserQueryParams,
loginUserResponse } from '../pets.zod';

const factory = createFactory();


export const loginUserHandlers = factory.createHandlers(
zValidator('query', loginUserQueryParams),
zValidator('response', loginUserResponse),
async (c: LoginUserContext) => {

  },
);
