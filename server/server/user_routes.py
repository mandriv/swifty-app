from server import app, db
from server.User import User
from flask import jsonify, request
from server.User import User
from sqlalchemy.exc import IntegrityError
from flask_jwt_extended import jwt_required, get_jwt_identity

@app.route('/api/user/<int:userID>', methods=['GET'])
@jwt_required
def get_user(userID):
    current_user_id = get_jwt_identity()
    current_user = User.query.get(current_user_id)

    if (current_user.role == 0
            and not current_user.id == userID):
        return jsonify(msg="only admin can see other users"), 400

    user = User.query.get(userID)
    if (user == None):
        return jsonify(msg="User with this ID does not exist"), 400

    return jsonify(user=user.to_json())



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
