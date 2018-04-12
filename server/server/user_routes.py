from server import app, db
from server.util import json_required
from flask import jsonify, request
from server.User import User, ROLE_USER, ROLE_ADMIN
from sqlalchemy.exc import IntegrityError
from flask_jwt_extended import jwt_required, get_jwt_identity

@app.route('/api/users', methods=['GET'])
@jwt_required
def get_all_user():
    current_user_id = get_jwt_identity()
    current_user = User.query.get(current_user_id)

    if current_user.role == ROLE_USER:
        return jsonify(msg="You are not an admin bro"), 400

    users = User.query.all()
    json_user_list = list()
    for user in users:
        json_user_list.append(user.to_json())

    return jsonify(users=json_user_list)

@app.route('/api/users/<int:user_id>', methods=['DELETE'])
@jwt_required
def delete_user(user_id):
    current_user = User.query.get(get_jwt_identity())

    # TODO need to be fixed
    if not current_user.role == 1:
        return jsonify(msg="you are not an admin"), 400

    user_to_delete = User.query.get(user_id)

    if user_to_delete == None:
        return jsonify(msg="User does not exist"), 400

    db.session.delete(user_to_delete)
    db.session.commit()

    return jsonify(msg="user deleted")


@app.route('/api/users/<int:userID>', methods=['GET'])
@jwt_required
def get_user(userID):
    current_user_id = get_jwt_identity()
    current_user = User.query.get(current_user_id)

    if (current_user.role == ROLE_USER
            and not current_user.id == userID):
        return jsonify(msg="only admin can see other users"), 400

    user = User.query.get(userID)
    if (user == None):
        return jsonify(msg="User with this ID does not exist"), 400

    return jsonify(user=user.to_json())

@app.route('/api/users/<int:user_id>', methods=['PUT'])
@json_required
@jwt_required
def update_user(user_id):
    current_user = User.query.get(get_jwt_identity())

    if (current_user.role == ROLE_USER
            and not current_user.id == user_id):
        return jsonify(msg="only admin can update other users"), 400

    user_to_update = User.query.get(user_id)
    if user_to_update == None:
        return jsonify(msg="user not exists"), 400

    new_user_data = request.get_json()

    if 'password' in new_user_data:
        user_to_update.set_hash_password(new_user_data['password'])

    if 'bio' in new_user_data:
        user_to_update.bio = new_user_data['bio']

    if 'email' in new_user_data:
        user_to_update.email = new_user_data['email']

    if 'username' in new_user_data:
        user_to_update.username = new_user_data['username']

    try:
        db.session.commit()
    except IntegrityError:
        return jsonify(msg="username or email already in use"), 400

    return jsonify(msg="User data updated")



@app.route('/api/users', methods=['POST'])
@json_required
def create_user():

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

@app.config('/api/users/<int:user_id>/picture', methods=['POST'])
@jwt_required
def upload_picture():
    return jsonify(msg="picture upload placeholder")