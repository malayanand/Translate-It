from rest_framework.routers import DefaultRouter
from . import views
from django.urls import path, include

app_name = 'api'

router = DefaultRouter()
router.register('api/sentence/create',
                views.CreateSentenceView,
                basename='Create')
router.register('api/sentence/view', views.ReadSentenceView, basename='view')
router.register('api', views.ProjectListView, basename='Projects')

urlpatterns = router.urls