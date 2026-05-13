# Wordpress SQL Schema Export

## Description

* Git Repo: https://github.com/WordPress/WordPress
* Site: https://wordpress.org
* Docs: https://wordpress.org/documentation/

## Run the Software

``` bash
# Spin up
docker compose up -d

```

## Export the Schema

``` bash

export CURRENT_DIR="$(pwd -P)"
export ERD_PATH="$CURRENT_DIR/sqlSchema"
export PROJECT_NAME='Wordpress'
export MYSQL_URL="mysql://ghost_user:secure_password@127.0.0.1:3307/ghost"
mkdir -p $ERD_PATH
docker exec ghost-db mysqldump --no-data --routines --triggers -u mysql -pwordpress mysql > $ERD_PATH/$PROJECT_NAME.sql
node ../../dbml-exporter/export-mysql.js -c $MYSQL_URL -o $ERD_PATH/$PROJECT_NAME.dbml
eralchemy2 -i $MYSQL_URL -o $ERD_PATH/$PROJECT_NAME.pdf
eralchemy2 -i $MYSQL_URL -o $ERD_PATH/$PROJECT_NAME.md
eralchemy2 -i $MYSQL_URL -o $ERD_PATH/$PROJECT_NAME.png
eralchemy2 -i $MYSQL_URL -o $ERD_PATH/$PROJECT_NAME.jpg

```



``` bash


mysql://mysql:mysql@localhost:3307/mysql

```