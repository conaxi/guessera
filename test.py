import os
from dotenv import load_dotenv

load_dotenv()
key = os.getenv("VITE_SUPABASE_ANON_KEY")
url = os.getenv("VITE_SUPABASE_URL")

print(key)
print(url)