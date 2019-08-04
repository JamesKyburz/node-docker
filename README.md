# node-docker

## How to use this image

### Create a `Dockerfile`

Using `ONBUILD`

```dockerfile
FROM jameskyburz/node:10.16.1-alpine
EXPOSE 5000
```

Using devtools (faster because of less cache invalidation)

```dockerfile
FROM jameskyburz/node:10.16.1-alpine-devtools as devtools

WORKDIR /usr/src/app

COPY package.json package-lock*.json npm-shrinkwrap*.json /usr/src/app/
RUN npm i

FROM node:10.16.1-alpine

WORKDIR /usr/src/app

COPY . /usr/src/app
COPY --from=devtools /usr/src/app/node_modules /usr/src/app/node_modules

USER node

ENTRYPOINT ["node", "src/index"]
CMD []
```

### Tell npm how to run your project in `package.json`
```javascript
"scripts": {
  "start": "node index"
}
```

### Create a `docker-compose.yml` file

```yaml
version: '3'
services:
  web:
    build:
      context: ./src/yourapp
    restart: always
```

### Build
```sh
ᐅ docker-compose build
```

## Run the container

```sh
ᐅ docker-compose up
```

## Debugging with docker-compose

Checkout [debug.sh](https://github.com/JamesKyburz/docker-node-debug)
