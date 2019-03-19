FROM node:10.15.3-alpine

LABEL maintainer="James Kyburz james.kyburz@gmail.com"

RUN \
  apk add git g++ gcc libgcc libstdc++ linux-headers make python && \
  npm install npm@latest -g && \
  npm install node-gyp -g
