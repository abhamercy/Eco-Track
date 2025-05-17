import requests

API_KEY = "Bearer 3ec35YkgVwWnX2VzEDLAg"  # Include Bearer prefix

headers = {
    "Authorization": API_KEY
}

# Honda's make ID
make_id = "d1e97443-32f4-4d98-b2d1-8bf5928da984"

url = f"https://www.carboninterface.com/api/v1/vehicle_makes/{make_id}/vehicle_models"
response = requests.get(url, headers=headers)

print("Status Code:", response.status_code)
print("Raw Response:", response.text)

if response.status_code == 200:
    models = response.json()
    for model in models:
        model_id = model["data"]["id"]
        model_name = model["data"]["attributes"]["name"]
        print(f"{model_name}: {model_id}")
else:
    print("Failed to fetch models.")
