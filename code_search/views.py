from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.template import loader


def index(request):
    template = loader.get_template('code_search/index.html')
    context = {
        'latest_question_list': "",
    }
    return HttpResponse(template.render(context, request))
