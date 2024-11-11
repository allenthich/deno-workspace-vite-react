import { createFactory } from 'hono/factory';
import { zValidator } from '../pets.validator';
import { GetOrderByIdContext } from '../pets.context';
import { getOrderByIdParams,
getOrderByIdResponse } from '../pets.zod';

const factory = createFactory();


export const getOrderByIdHandlers = factory.createHandlers(
zValidator('param', getOrderByIdParams),
zValidator('response', getOrderByIdResponse),
async (c: GetOrderByIdContext) => {
  console.log(c.params.orderId);
  },
);
