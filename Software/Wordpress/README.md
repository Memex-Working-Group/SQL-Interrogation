
``` bash

export CURRENT_DIR="$(pwd -P)"
export ERD_PATH="$CURRENT_DIR/sqlSchema"
export PROJECT_NAME='Wordpress'
export MYSQL_URL="mysql://root:wordpress@127.0.0.1:3307/wordpress"

mkdir -p $ERD_PATH

# Spin up
docker compose up -d

# WordPress needs installation to create its tables. Wait for it, then:
curl -s -L -c /tmp/wp_cookies.txt -b /tmp/wp_cookies.txt \
  -d "weblog_title=SQL+Study&user_name=admin&admin_password=admin&admin_password2=admin&admin_email=admin@example.com&Submit=Install+WordPress&language=" \
  http://localhost:8081/wp-admin/install.php?step=2

# Dump schema (MySQL, not PostgreSQL like Nextcloud)
docker exec wordpress-db mysqldump --no-data --routines --triggers -u root -pwordpress wordpress > $ERD_PATH/$PROJECT_NAME.sql

# mysql workbench etc

# Tear down
docker compose down -v --remove-orphans

```
