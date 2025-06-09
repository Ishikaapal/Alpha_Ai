FROM python:3.10
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["sh", "-c", "python wait_for_db.py && python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]

