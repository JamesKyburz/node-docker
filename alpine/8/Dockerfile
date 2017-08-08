FROM node:8.2.1-alpine

MAINTAINER James Kyburz "james.kyburz@gmail.com"

ENV NPM_CONFIG_LOGLEVEL warn

ONBUILD WORKDIR /usr/src/app
ONBUILD COPY package.json package-lock*.json npm-shrinkwrap*.json /usr/src/app/
ONBUILD RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers make python && \
  npm install node-gyp -g &&\
  npm install &&\
  npm cache clean --force &&\
  apk del native-deps
ONBUILD COPY . /usr/src/app
ONBUILD CMD npm start
