from django.http import HttpResponse
from django.views.decorators.http import require_http_methods
import json,time,hashlib

def response(code: int, message: str, data: any = None):
    body = {'code': code, 'message' : message, 'data' : {}}
    if data is not None:
        if hasattr(data, '__dict__'):
            body['data'] = data.__dict__
        else:
            body['data'] = data
    
    return HttpResponse(json.dumps(body, sort_keys = True, ensure_ascii = False))


camps_data = [
    {"id":"1",
     "title":"test1", 
     "stars":1, "desc": "test1 desc", 
     "lat": 23.020304,"lng":114.020304,
     "address":"address1",
     "comments":10, 
     "time": "2023-04-04 00:00:01",
     "imgs":["https://photos.zillowstatic.com/fp/294afdaf69ec13953506b811dbccac0c-p_e.webp",
    "https://photos.zillowstatic.com/fp/294afdaf69ec13953506b811dbccac0c-p_e.webp"]},

    {"id":"2",
     "title":"test2", 
     "stars":2, 
     "desc": "test2 desc", 
     "lat": 23.020304,"lng":114.020304,
     "address":"address2",
     "comments":20, "time": "2023-04-04 00:00:02",
    "imgs":["https://photos.zillowstatic.com/fp/294afdaf69ec13953506b811dbccac0c-p_e.webp",
    "https://photos.zillowstatic.com/fp/294afdaf69ec13953506b811dbccac0c-p_e.webp"]},


    {"id":"3",
     "title":"test3", 
     "stars":3, 
     "desc": "test3 desc", 
     "lat": 23.020304,
     "lng":114.020304,
     "address":"address3",
     "comments":30, 
     "time": "2023-04-04 00:00:03",
    "imgs":["https://photos.zillowstatic.com/fp/294afdaf69ec13953506b811dbccac0c-p_e.webp",
    "https://photos.zillowstatic.com/fp/294afdaf69ec13953506b811dbccac0c-p_e.webp"]}
]

comments_data = [{ 
    "campID":"1",
    "user": "aaaa",
    "stars":4,
    "time":"2023-04-04 00:00:01",
    "desc":"good1",
},{ 
    "campID":"1",
    "user": "bbbb",
    "stars":4,
    "time":"2023-04-04 00:00:01",
    "desc":"good2",
},{ 
    "campID":"2",
    "user": "cccc",
    "stars":4,
    "time":"2023-04-04 00:00:01",
    "desc":"good3",
}
]

# method, find matching id
def findCampByID(id):
    for camp in camps_data:  # Using the actual list of camps
        if camp['id'] == id:
            return camp
    return None
def findCommentsByID(id):
    comments =[]
    for comment in comments_data:
        if comment['campID'] == id:
            comments.append(comment)
    return comments
        
# get camp list
@require_http_methods('GET')
def list(request):
    return response(0, "ok",camps_data)

# get camp details, unique id
@require_http_methods('GET')
def detail(request):
    id = request.GET.get("id", "")
    data = findCampByID(id)
    return response(0, "ok", data)

@require_http_methods('GET')
def comments(request):
    campID = request.GET.get("campID","")
    coms = findCommentsByID(campID)
    return response(0,"ok",coms)

# add comment for a specific camp, input: campID, commentdata
# use POST, input data in JSON
@require_http_methods('POST')
def commentAdd(request):
    print(request.body)
    if str(request.body, 'utf-8') == '':
        return response(1, "Data cannot be empty")
    
    comment = {
    "campID":"",
    "user": "",
    "stars":0,
    "time":time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()),
    "desc":"",
}
    
    param = json.loads(request.body)
    print(param)
    if  "campID" not in param or param["campID"] == "":
        return response(1, "campID cannot be empty")
    comment["campID"] = param["campID"]

    if  "user" not in param or param["user"] == "":
        return response(1, "user cannot be empty")
    comment["user"] = param["user"]

    if  "stars" not in param:
        return response(1, "stars cannot be empty")
    comment["stars"] = param["stars"]

    if  "desc" not in param:
        return response(1, "description cannot be empty")
    comment["desc"] = param["desc"]

    comments_data.append(comment)
    
    return response(0, "ok")
    
# temp global pic, dictionary: picID => {type: pic_type, body: pic_body}
pics = {} 


# Upload image request api
@require_http_methods('POST')
def upload(request):
    # this is a dictionary so have to use key value []
    f = request.FILES['file']
    fileName = "{}{}".format(f.name, time.time())
    hFileName = hashlib.md5(fileName.encode("utf-8")).hexdigest()

    pics[hFileName] = {"type" : f.content_type, "body": f.read()}

    return response(0,"ok",{"id": hFileName})


# getting image API

@require_http_methods('GET')
def file(request):
    id = request.GET.get('id',"")
    if id not in pics:
        return response(100, "image does not exist")
    # binary val for pic
    return HttpResponse(pics[id]['body'],pics[id]['type'])

# new camp
@require_http_methods('POST')
def add(request):
    print(request.body)
    if str(request.body, 'utf-8') == '':
        return response(1, "Data cannot be empty")
    
    camp = {

     "id":"",
     "user":"",
     "title":"", 
     "stars":0, 
     "desc": "", 
     "lat": 0,
     "lng":0,
     "address":"address3",
     "comments":0, 
     "time": time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()),
    "imgs":[]
}
    
    param = json.loads(request.body)
    if  "title" not in param or param["title"] == "":
        return response(1, "title cannot be empty")
    camp["title"] = param["title"]
    
    
    print(param)
    
    titleName= "{}{}".format(param["title"]  ,time.time())
    camp["id"]= hashlib.md5(titleName.encode("utf-8")).hexdigest()


    if  "user" not in param or param["user"] == "":
        return response(1, "user cannot be empty")
    camp["user"] = param["user"]

    if  "stars" not in param:
        return response(1, "stars cannot be empty")
    camp["stars"] = param["stars"]

    if  "desc" not in param:
        return response(1, "description cannot be empty")
    camp["desc"] = param["desc"]

    if "lat" not in param or "lng" not in param:
        return response(1, "lat lng can't be empty")
    camp["lat"] = param["lat"]
    camp["lng"] = param["lng"]

    if  "address" not in param:
        return response(1, "address cannot be empty")
    camp["address"] = param["address"]

    if "imgs" not in param:
        return response(1, "imgs cannot be empty")
    camp["imgs"] = param["imgs"]

    camps_data.append(camp)
    return response(0, "ok",camp)