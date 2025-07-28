from django.urls import path
from .views import SalesTableView

urlpatterns = [
    path("table/", SalesTableView.as_view()),
]
