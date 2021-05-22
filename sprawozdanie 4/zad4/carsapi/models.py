from django.db import models


class Car(models.Model):
    car_brand = models.CharField(max_length=25)
    car_model = models.CharField(max_length=40)
    car_gen = models.CharField(max_length=10)
    car_year = models.CharField(max_length=4)

    def __str__(self):
        return self.car_brand
