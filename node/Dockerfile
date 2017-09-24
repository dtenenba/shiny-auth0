FROM ubuntu:16.04

RUN apt-get update -y && apt-get install -y nodejs npm

RUN  ln -s `which nodejs` /usr/bin/node

ADD . /node

WORKDIR /node

RUN npm install

#CMD bin/www

CMD node baz.js
