FROM node:alpine

WORKDIR /front-end

# test change

COPY ./front-end .

RUN npm install

RUN npm run build

CMD [ "npm", "run", "start" ]