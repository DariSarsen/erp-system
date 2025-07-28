from rest_framework import serializers
from .models import SaleTransaction

class SaleTransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SaleTransaction
        fields = ['product_name', 'total_price', 'sale_date']
