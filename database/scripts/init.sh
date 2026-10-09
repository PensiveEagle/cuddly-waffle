psql -d $POSTGRES_DB -U $POSTGRES_USER -f ./scripts/sql/create_tables.sql

psql -d $POSTGRES_DB -U $POSTGRES_USER -f ./scripts/sql/insert_data.sql