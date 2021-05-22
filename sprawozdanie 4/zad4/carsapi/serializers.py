from rest_framework import serializers
from .models import Car


class CarSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Car
        fields = ('car_brand', 'car_model', 'car_gen', 'car_year')
