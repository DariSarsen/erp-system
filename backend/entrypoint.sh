#!/bin/sh

echo "Применяем миграции..."
python manage.py migrate

echo "Создаём суперюзера (если нет)..."
python manage.py shell <<EOF
from django.contrib.auth import get_user_model
User = get_user_model()
if not User.objects.filter(username='admin').exists():
    User.objects.create_superuser('admin', 'admin@example.com', 'adminpass')
EOF

echo "Загружаем фикстуры..."
python manage.py loaddata service_inventory/fixtures/initial_data.json
python manage.py loaddata service_sales/fixtures/initial_data.json

echo "Запуск Django-сервера..."
exec python manage.py runserver 0.0.0.0:8000
