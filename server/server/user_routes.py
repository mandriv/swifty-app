from server import app, db
from server.User import User
from flask import jsonify, request
from sqlalchemy.exc import IntegrityError
from flask_jwt_extended import jwt_required, get_jwt_identity

@app.route('/api/user/<int:userID>', methods=['GET'])
@jwt_required
def get_user(userID):
    current_user = get_jwt_identity()
    return 'User %d %s ' % (userID, current_user)

@app.route('/api/users', methods=['POST'])
def create_user():
    if not request.is_json:
        return jsonify(msg="Request must be in JSON"), 400

    user_data = request.get_json()

    if (not 'username' in user_data
            or not 'password' in user_data
            or not 'email' in user_data):
       return jsonify(msg="username, password, email fields are required!"), 400

    user = User(username=user_data['username'], email=user_data['email'], role=0)
    user.set_hash_password(user_data['password'])

    if 'bio' in user_data:
        user.bio = user_data['bio']

    try:
        db.session.add(user)
        db.session.commit()
    except IntegrityError:
        return jsonify(msg="username or email already in use"), 400

    return jsonify(msg="user created")
