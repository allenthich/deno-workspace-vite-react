import { createFactory } from 'hono/factory';
import { zValidator } from '../pets.validator';
import { AddPetContext } from '../pets.context';
import { addPetBody,
addPetResponse } from '../pets.zod';

const factory = createFactory();


export const addPetHandlers = factory.createHandlers(
zValidator('json', addPetBody),
zValidator('response', addPetResponse),
async (c: AddPetContext) => {

  },
);
