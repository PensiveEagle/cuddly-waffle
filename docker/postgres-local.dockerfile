FROM postgres:alpine

WORKDIR /database

COPY ./database .

COPY ./database/scripts/init.sh /docker-entrypoint-initdb.d