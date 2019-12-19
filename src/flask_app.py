from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/api/login", methods=["POST"])
def authenticate():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")
    if username == "Jah" and password == "password":
        return jsonify({"token": 123456789})
    return jsonify({"token": ""})


if __name__ == "__main__":
    app.run()
