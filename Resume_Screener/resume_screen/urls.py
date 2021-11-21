from django.urls import path
from . import views

urlpatterns = [
    path('get_prediction', views.get_prediction, name="get_prediction"),
    # path('', views.render_home, name="render_home")
]