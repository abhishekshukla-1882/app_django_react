from django.shortcuts import render
from django.http import HttpResponse
import requests
from django.shortcuts import redirect
import json
from .models import Products
from django.http import JsonResponse
from django.core import serializers
# Create your views here.
def home(req):
    print(req)
    print('yes')
    shop = req.GET['shop']
    hmac = req.GET['hmac']
    print(shop)
    print(hmac)
    url = 'https://url24.myshopify.com/admin/oauth/authorize?client_id=4b426dc6838c4a8ef11b9b0d1ab91330&scope=write_products,read_shipping&redirect_uri=http://127.0.0.1:8000/shop/shoping&state=1245'

    
    print('data')
    response = redirect(url)
    return response
    # return HttpResponse(url)
def shoping(req):
    # print(req)
    code = req.GET['code']
    print(code)
    url = 'https://url24.myshopify.com/admin/oauth/access_token?client_id=4b426dc6838c4a8ef11b9b0d1ab91330&client_secret=19cb29d1166b3767691d2d439c168ce1&code='+code
    r = requests.post(url = url)
    data = r.json()
    print(data)
    print(data['access_token'])
    # curl -X GET \
    print('access_token')
    url2 = 'https://url24.myshopify.com/admin/api/2022-10/products.json'
    header = {
        'Content-Type' : 'application/json',
        'X-Shopify-Access-Token' : 'shpua_85e6c1854b113a6c400a9216e9f98b67'
    }
    rr = requests.get(url = url2, headers=header)
    dataa = rr.json()
    # dataaa = json.loads(dataa)
    val = dataa['products']
    print(val)
    idd = 4
    title = 'k'
    vendor = 'k'
    variants = {}
    for i in val:
        for k,j in i.items():
            # print(i)
            if(k == 'id'):
                idd = j
            if(k == 'title'):
                title = j
            if(k == 'vendor'):
                vendor = j
            if(k == 'variants'):
                variants = j
            
    #     print("----------------------------------------------------------")
    Products.objects.create(_id= idd, title = title, vendor = vendor , variants=variants)
   
    print('shop')
    # print(dataa['products']['id'])
    return HttpResponse('hhh')

def get_shop_data(request):
    all_product = Products.objects.all()
    post_list = serializers.serialize('json', all_product)
    return HttpResponse(post_list, content_type="text/json-comment-filtered")
    # response_data = {
    #     'data' : all_product
    # }
    # response_data['result'] = 'good'
    # response_data['message'] = 'Some error message'
    # return JsonResponse(response_data)