import middy from "@middy/core";
import middyJsonBodyParser from "@middy/http-json-body-parser";

const loggerMiddlware = () => ({
  after: async () => {
    console.log('YAY');
  }
})

export const applyMiddlewares = (handler) => {
  return middy(handler)
    .use(loggerMiddlware())
    .use(middyJsonBodyParser())
}
