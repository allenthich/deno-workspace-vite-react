import { createFactory } from 'hono/factory';
import { zValidator } from '../pets.validator';
import { PlaceOrderPatchContext } from '../pets.context';
import { placeOrderPatchBody,
placeOrderPatchResponse } from '../pets.zod';

const factory = createFactory();


export const placeOrderPatchHandlers = factory.createHandlers(
zValidator('json', placeOrderPatchBody),
zValidator('response', placeOrderPatchResponse),
async (c: PlaceOrderPatchContext) => {

  },
);
