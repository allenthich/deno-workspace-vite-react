import { createFactory } from 'hono/factory';
import { zValidator } from '../pets.validator';
import { DeletePetContext } from '../pets.context';
import { deletePetParams } from '../pets.zod';

const factory = createFactory();


export const deletePetHandlers = factory.createHandlers(
zValidator('param', deletePetParams),
async (c: DeletePetContext) => {

  },
);
