from django.urls import path
from .views import CandlestickData, LineChartData, BarChartData, PieChartData

urlpatterns = [
    path('candlestick-data/', CandlestickData.as_view(), name='candlestick_data'),
    path('line-chart-data/', LineChartData.as_view(), name='line_chart_data'),
    path('bar-chart-data/', BarChartData.as_view(), name='bar_chart_data'),
    path('pie-chart-data/', PieChartData.as_view(), name='pie_chart_data'),
]
