# carbon_api.py
import requests

API_KEY = "Bearer 3ec35YkgVwWnX2VzEDLAg"  # <-- Make sure this is your real API key

headers = {
    "Authorization": API_KEY,
    "Content-Type": "application/json"
}

def estimate_vehicle_emissions(distance_mi, vehicle_model_id):
    payload = {
        "type": "vehicle",
        "distance_unit": "mi",
        "distance_value": distance_mi,
        "vehicle_model_id": vehicle_model_id
    }

    res = requests.post("https://www.carboninterface.com/api/v1/estimates", headers=headers, json=payload)

    # ✅ Debug output
    print("Carbon API response status:", res.status_code)
    print("Carbon API response:", res.text)

    if res.status_code not in (200, 201):  
        raise Exception("Carbon Interface API error")


    data = res.json()
    if "data" not in data:
        raise Exception("Invalid response format from Carbon Interface")

    return data["data"]["attributes"]["carbon_kg"]
