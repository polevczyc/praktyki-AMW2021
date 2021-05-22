from rest_framework import viewsets
from .serializers import CarSerializer
from .models import Car


class CarVievSet(viewsets.ModelViewSet):
    queryset = Car.objects.all().order_by('car_brand')
    serializer_class = CarSerializer
