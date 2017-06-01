# node-docker

## How to use this image

### Create a `Dockerfile`

```dockerfile
FROM jameskyburz/node:8.0.0-alpine
EXPOSE 5000
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
