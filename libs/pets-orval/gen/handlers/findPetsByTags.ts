import { createFactory } from 'hono/factory';
import { zValidator } from '../pets.validator';
import { FindPetsByTagsContext } from '../pets.context';
import { findPetsByTagsQueryParams,
findPetsByTagsResponse } from '../pets.zod';

const factory = createFactory();


export const findPetsByTagsHandlers = factory.createHandlers(
zValidator('query', findPetsByTagsQueryParams),
zValidator('response', findPetsByTagsResponse),
async (c: FindPetsByTagsContext) => {

  },
);
