from dataclasses import fields
from rest_framework import serializers
from . import models


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Project
        fields = '__all__'


class SentenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Sentence
        fields = '__all__'