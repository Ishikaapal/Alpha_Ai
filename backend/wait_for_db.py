import time
import psycopg2
import os

while True:
    try:
        conn = psycopg2.connect(
            dbname=os.environ.get('DB_NAME', 'postgres'),
            user=os.environ.get('DB_USER', 'postgres'),
            password=os.environ.get('DB_PASSWORD', 'pankaj'),
            host=os.environ.get('DB_HOST', 'db'),
            port=os.environ.get('DB_PORT', '5432'),
        )
        conn.close()
        print("Database is ready!")
        break
    except psycopg2.OperationalError:
        print("Database not ready, waiting 2 seconds...")
        time.sleep(2)
