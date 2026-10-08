FROM postgres:alpine

WORKDIR /database

COPY . .

COPY ./scripts/init.sh /docker-entrypoint-initdb.d