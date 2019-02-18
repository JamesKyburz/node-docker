FROM jameskyburz/node:10.15.0-alpine-devtools as builder
FROM node:10.15.1-alpine

LABEL maintainer="James Kyburz james.kyburz@gmail.com"

WORKDIR /usr/src/app

ONBUILD ENV NPM_CONFIG_LOGLEVEL warn
ONBUILD ARG NODE_ENV=development
ONBUILD COPY package.json package-lock*.json npm-shrinkwrap*.json /usr/src/app/
ONBUILD RUN npm i

WORKDIR /usr/src/app

ONBUILD COPY --from=builder /usr/src/app/node_modules /usr/src/app/node_modules
ONBUILD COPY . /usr/src/app
ONBUILD CMD npm start
