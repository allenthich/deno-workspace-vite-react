import { createFactory } from 'hono/factory';
import { zValidator } from '../pets.validator';
import { UploadFileContext } from '../pets.context';
import { uploadFileParams,
uploadFileQueryParams,
uploadFileBody,
uploadFileResponse } from '../pets.zod';

const factory = createFactory();


export const uploadFileHandlers = factory.createHandlers(
zValidator('param', uploadFileParams),
zValidator('query', uploadFileQueryParams),
zValidator('json', uploadFileBody),
zValidator('response', uploadFileResponse),
async (c: UploadFileContext) => {

  },
);
