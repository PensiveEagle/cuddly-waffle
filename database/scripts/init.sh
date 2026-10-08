psql -U $POSTGRES_USER -f ./scripts/sql/create_tables.sql

psql -U $POSTGRES_USER -f ./scripts/sql/insert_data.sql