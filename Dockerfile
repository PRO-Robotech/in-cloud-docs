FROM node:23-alpine

WORKDIR /app

COPY ./documentation/package.json ./

RUN npm install

ENV DOC_INCLUDE_CURRENT_VERSION=false

COPY ./documentation/ ./

RUN npm run build

CMD npm run serve -- --host 0.0.0.0