from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.shortcuts import render
from django.views.decorators.http import require_GET, require_POST
from requests_toolbelt.multipart import decoder
import PyPDF2
import io
import data_extractor
import predictor
from django.views.decorators.csrf import csrf_exempt
import json

@require_POST
@csrf_exempt
def get_prediction(request):
    # import pdb; pdb.set_trace()
    message, status = "Success", 200
    payload={}
    try:
        #print("Resquest recieved ======>",request.__dict__)
        resume_doc = request.FILES.get('files','')
        if resume_doc:
            data = PyPDF2.PdfFileReader(io.BytesIO(resume_doc.read()))
            resume_text = ""
            for page in data.pages:
                print(page.extractText())
                resume_text += page.extractText()
            #print(resume_text)
            cleaned_data = data_extractor.cleaning(resume_text)
            transformed_data = data_extractor.data_transformation(cleaned_data)
            prediction = predictor.predict(transformed_data)
            payload = prediction
        else:
            print("Resume Not found ==>", resume_doc)
            # return HttpResponse("Resume Not found")
            message = "Resume Not found"
            status = 400
            payload = {}   
    except Exception as e:
        message = "Errors"
        status = 400
        print("Exception ===>",e)
        # return HttpResponse("Not Working")
    res = {
        "message" : message,
        "payload": payload,
        "status": status
    }
    
    return JsonResponse(res)

# def render_home(request):
#     return render(request, 'index.html')