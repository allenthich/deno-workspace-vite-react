import { createFactory } from 'hono/factory';
import { zValidator } from '../pets.validator';
import { DeleteOrderContext } from '../pets.context';
import { deleteOrderParams } from '../pets.zod';

const factory = createFactory();


export const deleteOrderHandlers = factory.createHandlers(
zValidator('param', deleteOrderParams),
async (c: DeleteOrderContext) => {

  },
);
