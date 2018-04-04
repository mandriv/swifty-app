from app import app
from flask_jwt import JWT
from User import User

def authenticate(username, password):
    print(username)
    print(password)
    user = User.query.filter_by(username=username).filter_by(passw=password).first()
    return user

def identity(payload):
    print(payload)
    user_id = payload['identity']
    return User.query.get(user_id)

jwt = JWT(app, authenticate, identity)