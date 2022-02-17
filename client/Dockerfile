FROM node:alpine

RUN mkdir -p /usr/src/app

ENV PORT 3000

WORKDIR /usr/src/app

COPY ./package.json /.
COPY ./yarn.lock /.

RUN yarn install
COPY . /usr/src/app/

EXPOSE 49153

CMD [ "yarn", "dev" ]
