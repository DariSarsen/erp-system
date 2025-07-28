from django.urls import path
from .views import InventoryTableView

urlpatterns = [
    path("table/", InventoryTableView.as_view()),
]
