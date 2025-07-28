from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('inventory/', include('service_inventory.urls')),
    path('sales/', include('service_sales.urls')),
]
