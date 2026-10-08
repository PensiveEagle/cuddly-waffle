FROM node:latest

WORKDIR /front-end

COPY . .

RUN npm install

RUN npm run build

CMD [ "npm", "run", "start" ]