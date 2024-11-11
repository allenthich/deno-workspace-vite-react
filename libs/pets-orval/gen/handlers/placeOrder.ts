import { createFactory } from 'hono/factory';
import { zValidator } from '../pets.validator';
import { PlaceOrderContext } from '../pets.context';
import { placeOrderBody,
placeOrderResponse } from '../pets.zod';

const factory = createFactory();


export const placeOrderHandlers = factory.createHandlers(
zValidator('json', placeOrderBody),
zValidator('response', placeOrderResponse),
async (c: PlaceOrderContext) => {

  },
);
