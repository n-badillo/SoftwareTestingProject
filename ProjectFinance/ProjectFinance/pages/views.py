from django.shortcuts import render

# Create a view by creating a function with the view name, 
# taking in the request argument. Return 3 arguements:
# 1. the request
# 2. the name of the view 
# 3. an empty dictionary 
#    (will be used later to add things to the page from a .py file)
def index(request):
    return render(request, "index.html", {})

def about(request):
    return render(request, "about.html", {})

def register(request):
    return render(request, "register.html", {})

def login(request):
    return render(request, "login.html", {})

def dashboard(request):
    return render(request, "dashboard.html", {})