# wallabag SQL Schema Export

## Description

* Git Repo: https://github.com/wallabag/wallabag
* Site: https://www.wallabag.org
* Docs: https://doc.wallabag.org

## Run the Software

``` bash
# Clone the wallabag repository (if not already done)
git clone https://github.com/wallabag/wallabag.git /tmp/wallabag
cd /tmp/wallabag

# Create a docker-compose.yml for wallabag with mariadb
cat > "docker-compose.yml" << 'EOF'
services:
  mariadb:
    image: mariadb:10
    volumes:
      - db-data:/var/lib/mysql
    env_file:
      - ./docker/mariadb/env
    environment:
      - MYSQL_USER=wallabag
      - MYSQL_PASSWORD=wallaroot
    ports:
      - "3306:3306"

  wallabag:
    build:
      context: .
      dockerfile: ./docker/php/Dockerfile
      target: default
    volumes:
      - .:/var/www/html
      - assets:/var/www/html/web/assets
      - data:/var/www/html/data
      - cache:/var/www/.cache
    environment:
      - DATABASE_URL=mysql://wallabag:wallaroot@mariadb:3306/wallabag
    ports:
      - "8000:8000"
    depends_on:
      - mariadb

volumes:
  db-data:
  assets:
  data:
  cache:
EOF

# Start the containers
docker compose up -d

# Wait for mariadb to be ready (we can wait a few seconds and then check)
sleep 10

# Install wallabag (this will create the database schema and an admin user)
docker compose exec wallabag php bin/console wallabag:install --env=prod --no-interaction --admin-user=admin --admin-password=admin --admin-email=admin@example.com

# Now wallabag is running and the database is set up.
```

## Export the Schema

``` bash
export CURRENT_DIR="$(pwd -P)"
export ERD_PATH="$CURRENT_DIR/sqlSchema"
export PROJECT_NAME='wallabag'
export MYSQL_URL="mysql://wallabag:wallaroot@127.0.0.1:3306/wallabag"

mkdir -p $ERD_PATH

# Export the schema using mysqldump
docker exec $(docker ps -qf "name=mariadb") mysqldump --no-data --routines --triggers -u wallabag -pwallaroot wallabag > $ERD_PATH/$PROJECT_NAME.sql

# Use the dbml-exporter for mysql (we have a script for mysql)
node ../../dbml-exporter/export-mysql.js -o $ERD_PATH/$PROJECT_NAME.dbml
eralchemy2 -i $MYSQL_URL -o $ERD_PATH/$PROJECT_NAME.pdf
eralchemy2 -i $MYSQL_URL -o $ERD_PATH/$PROJECT_NAME.md
eralchemy2 -i $MYSQL_URL -o $ERD_PATH/$PROJECT_NAME.png
eralchemy2 -i $MYSQL_URL -o $ERD_PATH/$PROJECT_NAME.jpg
```