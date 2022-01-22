import requests
import os
from dotenv import load_dotenv
from supabase import create_client

load_dotenv()
key = os.getenv("VITE_SUPABASE_ANON_KEY")
url = os.getenv("VITE_SUPABASE_URL")

supabase = create_client(url, key)

res = requests.get("https://restcountries.com/v2/all")
all_countries = res.json()

for country in all_countries:
    try:
        i = country["latlng"]
    except KeyError:
        continue

    supabase.table("countries").insert(
        {
            "name": country["name"],
            "alpha3code": country["alpha3Code"],
            "lat": i[0],
            "lng": i[1],
        }
    ).execute()
