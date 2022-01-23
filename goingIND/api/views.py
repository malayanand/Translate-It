from django.http import request
from django.shortcuts import get_object_or_404
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from django.db import transaction
from . import models
from . import serializers
from . import utils


class ProjectListView(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = models.Project.objects.all()
    serializer_class = serializers.ProjectSerializer

    def get_object(self, queryset=None, **kwargs):
        item = self.kwargs.get('pk')
        return get_object_or_404(models.Project, id=item)

    def create(self, request, *args, **kwargs):
        title = request.data['wiki_title']
        target = request.data['target']
        print("@@")
        print(title, target)
        print("@@")
        obj = models.Project.objects.create(wiki_title=title, target=target)

        summary = utils.getWikiSummary(title)
        sentences = utils.split_summary_to_sentences(summary)
        sentences = sentences[:5]

        print("@@")
        print(obj.id)
        print("@@")

        for sentence in sentences:
            print(obj.id, sentence)
            models.Sentence.objects.create(project_id=obj,
                                           original_sentence=sentence)

        return Response(status.HTTP_201_CREATED)


class ReadSentenceView(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.SentenceSerializer

    def get_queryset(self):
        projectid = self.request.query_params.get('project_id')
        return models.Sentence.objects.filter(project_id=projectid)


class CreateSentenceView(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = models.Sentence.objects.all()
    serializer_class = serializers.SentenceSerializer

    # def get_queryset(self):
    #     projectid = self.request.query_params.get('project_id')
    #     print("@@ ", projectid, " @@")
    #     return models.Sentence.objects.filter(project_id=projectid)

    def get_object(self, *args, **kwargs):
        item = self.kwargs.get('pk')
        return get_object_or_404(models.Sentence, id=item)

    def update(self, request, *args, **kwargs):
        sentence_data = request.data

        print("\n@@")
        print(sentence_data)
        print("sen id", sentence_data['id'])
        print("@@\n")

        obj = self.get_object()
        proj_obj = models.Project.objects.get(id=sentence_data['project_id'])

        obj.translated_sentence = sentence_data['translated_sentence']
        obj.original_sentence = sentence_data['original_sentence']
        obj.project_id = proj_obj

        obj.save()

        return Response(status.HTTP_200_OK)

    # def partial_update(self, request, *args, **kwargs):
    #     translated_sentences = request.data
    #     projectid = request.query_params.get('project_id')
    #     print("@@")
    #     print(translated_sentences)
    #     print("@@")

    #     for sentence in translated_sentences:
    #         senid = sentence['id']
    #         obj = models.Sentence.objects.filter(
    #             project_id=int(projectid)).filter(id=int(senid))
    #         obj.translated_sentence = translated_sentences.get(
    #             'translated_sentence', obj.translated_sentence)
    #         obj.save()

    #     return Response(status.HTTP_200_OK)


# class UpdateSentenceView(viewsets.ModelViewSet):
#     permission_classes = [permissions.AllowAny]
#     serializer_class = serializers.SentenceSerializer

#     def update(self, request, *args, **kwargs):
#         projectid = request.POST.get('project_id')
