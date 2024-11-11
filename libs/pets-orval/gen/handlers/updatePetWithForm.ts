import { createFactory } from 'hono/factory';
import { zValidator } from '../pets.validator';
import { UpdatePetWithFormContext } from '../pets.context';
import { updatePetWithFormParams,
updatePetWithFormQueryParams } from '../pets.zod';

const factory = createFactory();


export const updatePetWithFormHandlers = factory.createHandlers(
zValidator('param', updatePetWithFormParams),
zValidator('query', updatePetWithFormQueryParams),
async (c: UpdatePetWithFormContext) => {

  },
);
