from rest_framework.views import APIView
from rest_framework.response import Response
from .models import InventoryItem

class InventoryTableView(APIView):
    def get(self, request):
        items = InventoryItem.objects.all()
        data = [[item.name, item.quantity, item.updated_at.isoformat()] for item in items]
        return Response({
            "columns": ["Название", "Количество", "Обновлено"],
            "data": data
        })
