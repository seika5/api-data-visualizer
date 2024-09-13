from rest_framework.views import APIView
from rest_framework.response import Response

class CandlestickData(APIView):
    def get(self, request):
        data = {
            "datasets": [
                {
                    "label": "Candlestick Data",
                    "data": [
                        {"x": "2024-09-12", "o": 60, "h": 80, "l": 50, "c": 70},
                        {"x": "2024-09-13", "o": 70, "h": 90, "l": 60, "c": 80},
                    ]
                }
            ]
        }
        return Response(data)

class LineChartData(APIView):
    def get(self, request):
        data = {
            "labels": ["Sep", "Oct", "Nov", "Dec"],
            "data": [5, 10, 15, 20]
        }
        return Response(data)

class BarChartData(APIView):
    def get(self, request):
        data = {
            "labels": ["Item 1", "Item 2", "Item 3"],
            "data": [200, 300, 400]
        }
        return Response(data)

class PieChartData(APIView):
    def get(self, request):
        data = {
            "labels": ["Type 1", "Type 2", "Type 3"],
            "data": [700, 200, 300]
        }
        return Response(data)
