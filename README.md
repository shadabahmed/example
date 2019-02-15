# canary

## About

This application puts up a simple website using NodeJS & Express.

The background color changes based on an environment variable:

```shell
BGCOLOR=blue
BGCOLOR=green
BGCOLOR=[unset, or anything else] # Makes the background coral
```

This variable is read each time the page is loaded, so it can be changed without restarting the server. Please remember not to follow this pattern for a real production application, as it can lead to security issues.

## Usage

To run locally:

```shell
BGCOLOR=blue bin/www
curl localhost:3000
```

To run using Docker:

```shell
docker build -t canary .
docker run -d -p 3000:3000 -e BGCOLOR=blue canary
```

## Tests

Unit tests can be run using either of the following two commands:

```shell
npm test
# or #
./node_modules/mocha/bin/mocha
```

## Health Checks

A health check can be reached at the path `/health`. It will output a JSON message with a given status code, depending on the environment variable `HEALTHY`:

For the service to appear healthy, leave the environment variable unset, or set it to any value other than `false`:

```
HEALTHY=[unset, or anything else]

< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 35
< ETag: W/"23-uQbt7O5sH6wCP1nXebLaRG6IW0I"
< Date: Fri, 15 Feb 2019 17:45:57 GMT
< Connection: keep-alive
< 
* Connection #0 to host localhost left intact
{"status":"OK","message":"Healthy"}
```

Set the environment variable to `false` to make the service appear unhealthy:

```
HEALTHY=false

< HTTP/1.1 500 Internal Server Error
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 44
< ETag: W/"2c-ZoDT1lW6rXfncQstrBV/2BgGlr8"
< Date: Fri, 15 Feb 2019 17:45:08 GMT
< Connection: keep-alive
< 
* Connection #0 to host localhost left intact
{"status":"ERROR","message":"Generic Error"}
```
