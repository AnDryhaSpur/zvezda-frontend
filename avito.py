import requests

# r = requests.post(
#     'https://api.avito.ru/token/',
#     data={
#         'grant_type': 'client_credentials',
#         'client_id': '2E7jhp-xY-BQNtkiqJCl',
#         'client_secret': 'B-XVAu2gjlDgvJUgzN3eVEImF0xyMtvl8av6VGCt'
#     }
# )

r = requests.get(
    'https://api.avito.ru/ratings/v1/reviews',
    params={
        'offset': '0',
        'limit': '30'
    },
    headers={
        'authorization': 'Bearer k2b8htHAR-iLzZTvEBzx-g-bmrp5_VrCp4EshNYU',
        'content-type': 'application/json'
    },
)

with open('reviews.json', 'w', encoding='utf8') as file:
    file.write(r.text)
