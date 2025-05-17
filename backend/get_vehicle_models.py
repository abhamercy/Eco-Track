import requests

API_KEY = "Bearer 3ec35YkgVwWnX2VzEDLAg" 

headers = {
    "Authorization": API_KEY
}

url = "https://www.carboninterface.com/api/v1/vehicle_makes"
response = requests.get(url, headers=headers)

print("Status Code:", response.status_code)
print("Raw Response Text:", response.text)

# Only try to parse JSON if it's successful
if response.status_code == 200:
    makes = response.json()
    for make in makes:
        if "data" in make:
            make_id = make['data']['id']
            make_name = make['data']['attributes']['name']
            print(f"{make_name}: {make_id}")
else:
    print("🚫 ERROR: Request failed. This is likely due to an incorrect or missing API key.")
