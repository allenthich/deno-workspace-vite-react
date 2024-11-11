import { createFactory } from 'hono/factory';
import { zValidator } from '../pets.validator';
import { FindPetsByStatusContext } from '../pets.context';
import { findPetsByStatusQueryParams,
findPetsByStatusResponse } from '../pets.zod';

const factory = createFactory();


export const findPetsByStatusHandlers = factory.createHandlers(
zValidator('query', findPetsByStatusQueryParams),
zValidator('response', findPetsByStatusResponse),
async (c: FindPetsByStatusContext) => {

  },
);
