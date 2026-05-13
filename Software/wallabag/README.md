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

# Create a docker-compose.yml for wallabag with mariadb using official images
cat > docker-compose.yml << 'EOF'
version: '3'
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
    image: wallabag/wallabag:latest
    environment:
      - DATABASE_URL=mysql://wallabag:wallaroot@mariadb:3306/wallabag
      - SYMFONY_ENV=prod
      - SYMFONY_DEBUG=0
    ports:
      - "8000:80"
    depends_on:
      - mariadb

volumes:
  db-data:
EOF

# Start the containers
docker compose up -d

# Wait for mariadb and wallabag to be ready (we can wait a few seconds and then check)
sleep 15

# Install wallabag (this will create the database schema and an admin user)
docker compose exec wallabag php bin/console wallabag:install --env=prod --no-interaction --admin-user=admin --admin-password=admin --admin-email=admin@example.com

# Now wallabag is running and the database is set up.

# To access the database
docker exec -it $(docker ps -qf "name=mariadb") mysql -u root -p
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