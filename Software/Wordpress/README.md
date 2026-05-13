# Wordpress SQL Schema Export

## Description

* Git Repo: https://github.com/WordPress/WordPress
* Site: https://wordpress.org
* Docs: https://wordpress.org/documentation/

## Run the Software

``` bash
# Spin up
docker compose up -d

# WordPress needs installation to create its tables. Wait for it, then:
curl -s -L -c /tmp/wp_cookies.txt -b /tmp/wp_cookies.txt \
  -d "weblog_title=SQL+Study&user_name=admin&admin_password=admin&admin_password2=admin&admin_email=admin@example.com&Submit=Install+WordPress&language=" \
  http://localhost:8081/wp-admin/install.php?step=2

```

## Export the Schema

``` bash
export CURRENT_DIR="$(pwd -P)"
export ERD_PATH="$CURRENT_DIR/sqlSchema"
export PROJECT_NAME='Wordpress'
export MYSQL_URL="mysql://root:wordpress@127.0.0.1:3307/wordpress"
mkdir -p $ERD_PATH
docker exec wordpress-db mysqldump --no-data --routines --triggers -u root -pwordpress wordpress > $ERD_PATH/$PROJECT_NAME.sql
node ../../dbml-exporter/export-mysql.js -o $ERD_PATH/$PROJECT_NAME.dbml
eralchemy2 -i $MYSQL_URL -o $ERD_PATH/$PROJECT_NAME.pdf
eralchemy2 -i $MYSQL_URL -o $ERD_PATH/$PROJECT_NAME.md
eralchemy2 -i $MYSQL_URL -o $ERD_PATH/$PROJECT_NAME.png
eralchemy2 -i $MYSQL_URL -o $ERD_PATH/$PROJECT_NAME.jpg

```
