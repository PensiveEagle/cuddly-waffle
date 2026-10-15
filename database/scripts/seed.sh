echo "Database: " $POSTGRES_DB
echo "Username: " $POSTGRES_USER
psql -d $POSTGRES_DB -U $POSTGRES_USER --file="./scripts/sql/create_tables.sql" --file="./scripts/sql/insert_data.sql"