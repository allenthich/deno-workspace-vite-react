import { createFactory } from 'hono/factory';
import { zValidator } from '../pets.validator';
import { GetPetByIdContext } from '../pets.context';
import { getPetByIdParams,
getPetByIdResponse } from '../pets.zod';

const factory = createFactory();


export const getPetByIdHandlers = factory.createHandlers(
zValidator('param', getPetByIdParams),
zValidator('response', getPetByIdResponse),
async (c: GetPetByIdContext) => {

  },
);
