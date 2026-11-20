FROM node:alpine

WORKDIR /front-end

COPY ./front-end/package.json ./front-end/package-lock.json ./

RUN npm install

RUN npm cache clean --force

COPY ./front-end .

RUN npm run build

CMD [ "npm", "run", "start" ]