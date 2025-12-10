from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BlogViewSet
from .views import blogs_page

router = DefaultRouter()
router.register(r'blogs', BlogViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path("blog/", blogs_page),
]
