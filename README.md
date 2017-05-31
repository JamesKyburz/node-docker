## Usage

# How to use this image

## npm

### Create a `Dockerfile` in your Node.js app project

```dockerfile
FROM jameskyburz/node:8.0.0-alpine
```

### Tell npm how to run your project in `package.json`
```javascript
"scripts": {
  "start": "node index"
}
```

## Running

You can then build and run the Docker image:

```sh
ᐅ docker build -t my-nodejs-app .
ᐅ docker run -it --rm --name my-running-app my-nodejs-app
```

## Debugging with docker-compose

Checkout [debug.sh](https://github.com/JamesKyburz/docker-node-debug)
