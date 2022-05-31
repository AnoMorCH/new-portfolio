from django.urls import path

from portfolio_app import views

app_name = 'portfolio_app'

urlpatterns = [
    path('', views.portfolio, name='portfolio'),
    path('donate/', views.donate, name='donate'),
]
