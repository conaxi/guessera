FROM node:14-alpine

WORKDIR /usr/src/app

COPY rollup.config.js ./
COPY package*.json ./

RUN npm install

COPY ./src ./src
COPY ./public ./public

RUN npm run-script build

EXPOSE 8080

CMD [ "npm", "start" ]
