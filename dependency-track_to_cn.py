# -*- coding: utf-8 -*-

# This code shows an example of text translation from English to Simplified-Chinese.
# This code runs on Python 2.7.x and Python 3.x.
# You may install `requests` to run this code: pip install requests
# Please refer to `https://api.fanyi.baidu.com/doc/21` for complete api document

import requests
import random
import json
from hashlib import md5
import time

# Set your own appid/appkey.
appid = 'id'
appkey = 'key'

# For list of language codes, please refer to `https://api.fanyi.baidu.com/doc/21`
from_lang = 'en'
to_lang =  'zh'

endpoint = 'http://api.fanyi.baidu.com'
path = '/api/trans/vip/translate'
url = endpoint + path


# Generate salt and sign
def make_md5(s, encoding='utf-8'):
    return md5(s.encode(encoding)).hexdigest()

salt = random.randint(32768, 65536)

# 读取en.json，en.json和脚本放在同一目录
with open('en.json', encoding='utf-8') as f:
    en_json =  f.read()

en_object = json.loads(en_json)
for k,v in en_object.items():
    for k1, v1 in v.items():
        query = v1
        sign = make_md5(appid + query + str(salt) + appkey)

        # Build request
        headers = {'Content-Type': 'application/x-www-form-urlencoded'}

        payload = {'appid': appid, 'q': query, 'from': from_lang, 'to': to_lang, 'salt': salt, 'sign': sign}

        # Send request
        r = requests.post(url, params=payload, headers=headers)
        result = r.json()
        en_object[k][k1] = result["trans_result"][0]['dst']
        print(k, k1, result["trans_result"][0]['dst'])
        time.sleep(1)
        
# 生成cn.json
with open('cn.json', encoding='utf-8', mode='w') as f:
    f.write(json.dumps(en_object, indent=4, ensure_ascii=False))