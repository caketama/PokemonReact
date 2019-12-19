from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)


@app.route("/api/login", methods=["POST"])
def get_token():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")
    if username and password:
        with sqlite3.connect("pokemon.db") as conn:
            cursor = conn.cursor()
            sql = """SELECT auth_token FROM users
                    WHERE username=? AND password_hash=?"""
            token = cursor.execute(sql, (username, password)).fetchone()
            if token:
                return jsonify({"token": token})
    return jsonify({"token": ""})


@app.route("/api/add", methods=["POST"])
def add_to_team():
    data = request.get_json()
    print(data)
    name = data.get("name")
    image_path = data.get("image_path")
    number = data.get("number")
    user_pk = check_token(data.get("token"))
    if user_pk:
        with sqlite3.connect("pokemon.db") as conn:
            cursor = conn.cursor()
            sql = """INSERT INTO teams (
                    user_pk, image_path, number, name
                    ) VALUES (?,?,?,?);"""
            values = (user_pk, image_path, number, name)
            print(values)
            cursor.execute(sql, values)
            return jsonify({"status": "success"})
    return jsonify({"status": "SQL Error"})


def check_token(token):
    with sqlite3.connect("pokemon.db") as conn:
        cursor = conn.cursor()
        sql = """SELECT pk FROM users WHERE auth_token=?"""
        user_pk = cursor.execute(sql, (token,)).fetchone()[0]
        return user_pk


if __name__ == "__main__":
    app.run(debug=True)
