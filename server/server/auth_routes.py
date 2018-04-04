from server import app
from flask import jsonify, request
from flask_jwt_extended import create_access_token

@app.route('/api/auth', methods=['POST'])
def create_account():
    if not request.is_json:
        return jsonify({"msg": "Request must be in JSON"}), 400

    # Add  input validation

    email = "email@mail.com"
    password = "pass"
    first_name = "person"
    last_name = "nosrep"

    # Create account

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token), 200


@app.route('/api/auth/login', methods=['POST'])
def login():
    if not request.is_json:
        return jsonify({"msg": "Request must be in JSON"}), 400

    email = "email@mail.com"
    password = "pass"

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token), 200

