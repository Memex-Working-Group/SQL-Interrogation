
``` bash
docker compose up -d

# Wait for nextcloud to start running
# Seed the database
docker exec --user www-data nextcloud-app php occ maintenance:install \
  --database "pgsql" \
  --database-host "db" \
  --database-name "postgres" \
  --database-user "postgres" \
  --database-pass "postgres" \
  --admin-user "admin" \
  --admin-pass "admin"


export CURRENT_DIR="$(pwd -P)"
export ERD_PATH="$CURRENT_DIR/sqlSchema"
export PROJECT_NAME='Nextcloud'
export POSTGRES_URL="postgresql://postgres:postgres@127.0.0.1:5432/postgres"
export POSTGRES_URL_PYTHON="postgresql+psycopg2://postgres:postgres@127.0.0.1:5432/postgres"


mkdir -p $ERD_PATH
node ../../dbml-exporter/export-postgres.js -o $ERD_PATH/$PROJECT_NAME.dbml
eralchemy2 -i $POSTGRES_URL_PYTHON -o $ERD_PATH/$PROJECT_NAME.pdf
eralchemy2 -i $POSTGRES_URL_PYTHON -o $ERD_PATH/$PROJECT_NAME.md
eralchemy2 -i $POSTGRES_URL_PYTHON -o $ERD_PATH/$PROJECT_NAME.png
eralchemy2 -i $POSTGRES_URL_PYTHON -o $ERD_PATH/$PROJECT_NAME.jpg
docker exec -it nextcloud-db pg_dump --schema-only $POSTGRES_URL > $ERD_PATH/$PROJECT_NAME.sql

```