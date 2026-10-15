FROM postgres

WORKDIR /database

COPY ./database .

COPY ./database/scripts/seed.sh /docker-entrypoint-initdb.d