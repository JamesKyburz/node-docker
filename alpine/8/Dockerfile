FROM node:8.9.4-alpine

LABEL maintainer="James Kyburz james.kyburz@gmail.com"

ONBUILD ARG NODE_ENV=development
ONBUILD ENV NPM_CONFIG_LOGLEVEL warn

ONBUILD WORKDIR /usr/src/app
ONBUILD COPY package.json package-lock*.json npm-shrinkwrap*.json /usr/src/app/
ONBUILD RUN apk --no-cache add --virtual native-deps \
  git g++ gcc libgcc libstdc++ linux-headers make python && \
  npm install node-gyp -g &&\
  npm install &&\
  npm cache clean --force &&\
  apk del native-deps
ONBUILD RUN apk --no-cache add tzdata
ONBUILD COPY . /usr/src/app
ONBUILD CMD npm start
