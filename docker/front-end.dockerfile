FROM node:latest

WORKDIR /front-end

COPY ./front-end .

RUN npm install

RUN npm run build

CMD [ "npm", "run", "start" ]