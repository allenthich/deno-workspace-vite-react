import { createFactory } from 'hono/factory';
import { zValidator } from '../pets.validator';
import { UpdatePetContext } from '../pets.context';
import { updatePetBody,
updatePetResponse } from '../pets.zod';

const factory = createFactory();


export const updatePetHandlers = factory.createHandlers(
zValidator('json', updatePetBody),
zValidator('response', updatePetResponse),
async (c: UpdatePetContext) => {

  },
);
