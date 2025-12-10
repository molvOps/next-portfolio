from django.shortcuts import render
from rest_framework import viewsets
from .models import Blog
from .serializers import BlogSerializer

# Create your views here.

class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all().order_by('-created_at')  
    serializer_class = BlogSerializer


def blogs_page(request):
    return render(request, "blogs/blogs_list.html")