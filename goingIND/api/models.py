from django.db import models


# Create your models here.
class Project(models.Model):
    wiki_title = models.CharField(max_length=50,
                                  verbose_name='wiki article',
                                  null=True,
                                  blank=False)
    target = models.CharField(max_length=50,
                              verbose_name='target language',
                              null=True,
                              blank=False)


class Sentence(models.Model):
    project_id = models.ForeignKey("Project",
                                   on_delete=models.CASCADE,
                                   default=0,
                                   verbose_name='Project')
    original_sentence = models.TextField(max_length=1000,
                                         blank=True,
                                         null=True,
                                         verbose_name='Original sentence')
    translated_sentence = models.TextField(max_length=1000,
                                           blank=True,
                                           null=True,
                                           verbose_name='Translated sentence')
