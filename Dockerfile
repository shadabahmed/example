FROM node:10.14.2-jessie
MAINTAINER Nobody

ENV BGCOLOR=green

WORKDIR /usr/src/canaryapp

COPY package.json /usr/src/canaryapp
COPY package-lock.json /usr/src/canaryapp
RUN npm install
COPY . /usr/src/canaryapp

CMD ["/usr/src/canaryapp/bin/www"]

EXPOSE 3000
