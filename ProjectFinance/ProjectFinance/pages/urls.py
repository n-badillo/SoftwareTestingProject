from django.urls import path
from . import views

urlpatterns = [
    # path (3 parameters)
    # 1. how it'll look like on the url
    # 2. where it's pointing to
    # 3. what it's named for referencing
    path('', views.index, name="index"),
    path('about/', views.about, name="about"),
    path('register/', views.register, name="register"),
    path('login/', views.login, name="login"),
    path('dashboard/', views.dashboard, name="dashboard"),
]
