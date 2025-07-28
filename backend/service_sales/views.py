from rest_framework.views import APIView
from rest_framework.response import Response
from .models import SaleTransaction

class SalesTableView(APIView):
    def get(self, request):
        sales = SaleTransaction.objects.all()
        data = [[s.product_name, str(s.total_price), s.sale_date.isoformat()] for s in sales]
        return Response({
            "columns": ["Товар", "Цена", "Дата продажи"],
            "data": data
        })
