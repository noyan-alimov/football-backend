FROM node:14.13.0-alpine3.10

WORKDIR /app

COPY . /app/

RUN yarn install

CMD [ "yarn", "compile-and-run" ]