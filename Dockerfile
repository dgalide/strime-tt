FROM node:14-alpine AS BUILD_IMAGE

WORKDIR /app

RUN apk update && apk add curl bash

COPY ./package.json ./

COPY . .

RUN npm install

FROM node:14-alpine

WORKDIR /app

COPY --from=BUILD_IMAGE /app /app

EXPOSE 4000

CMD [ "npm", "srv:prod" ]
