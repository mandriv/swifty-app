from flask import jsonify, request
from flask_jwt_extended import create_access_token

from server import app
from server.User import User
from server.util import json_required


@app.route('/api/auth', methods=['POST'])
@json_required
def create_account():
    access_token = create_access_token(identity="todo")
    return jsonify(access_token=access_token), 200


@app.route('/api/auth/login', methods=['POST'])
@json_required
def login():
    login_details = request.get_json()

    if (not 'username' in login_details
            or not 'password' in login_details):
        return jsonify(msg="username and password field required"), 400

    user = User.query.filter_by(username=request.json['username']).first()

    if user is None:
        return jsonify(msg="User not exist"), 400

    if not user.check_password(request.json['password']):
        return jsonify(msg="Wrong password"), 400

    access_token = create_access_token(identity=user.id)
    return jsonify(access_token=access_token, user=user.to_json()), 200
