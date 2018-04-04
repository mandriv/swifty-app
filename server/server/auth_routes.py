from server import app
from server.User import User
from flask import jsonify, request
from flask_jwt_extended import create_access_token

@app.route('/api/auth', methods=['POST'])
def create_account():
    if not request.is_json:
        return jsonify({"msg": "Request must be in JSON"}), 400

    access_token = create_access_token(identity="todo")
    return jsonify(access_token=access_token), 200


@app.route('/api/auth/login', methods=['POST'])
def login():
    if not request.is_json:
        return jsonify({"msg": "Request must be in JSON"}), 400

    user = User.query.filter_by(username=request.json['username']).filter_by(passw=request.json['password']).first()

    if (user == None):
        return jsonify({"msg": "User not exist"}), 400

    access_token = create_access_token(identity=user)
    return jsonify(access_token=access_token), 200

