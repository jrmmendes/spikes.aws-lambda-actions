import type {ValidatedEventAPIGatewayProxyEvent} from '@libs/api-gateway';
import {applyMiddlewares} from '@libs/middlewares';

import schema from './schema';
import {ResponseBuilder} from "@libs/response";

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  return new ResponseBuilder()
    .status(200)
    .json({
      message: 'Hello my friend!',
      requestBody: event.body,
    })
    .build();
}

export const main = applyMiddlewares(hello);
