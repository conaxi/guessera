import sqlite3
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})


def connect_to_db():
    conn = sqlite3.connect("countries.db")
    return conn


def get_countries_by_id(countries_ids: str):
    countries = []
    try:
        conn = connect_to_db()
        conn.row_factory = sqlite3.Row
        cur = conn.cursor()
        cur.execute(f"SELECT * FROM countries WHERE id IN {countries_ids}")
        rows = cur.fetchall()
        for row in rows:
            country = {}
            for k in row:
                country["id"] = row["id"]
                country["name"] = row["name"]
                country["lat"] = row["lat"]
                country["lng"] = row["lng"]
                country["correct"] = bool(row["correct"])
            countries.append(country)

    except Exception as e:
        print(e)
        countries = []

    return countries


@app.route("/countries/<countries_ids>", methods=["GET"])
def read_countries(countries_ids: str):
    return jsonify(get_countries_by_id(countries_ids))


if __name__ == "__main__":
    # app.debug = True
    # app.run(debug=True)
    app.run()
