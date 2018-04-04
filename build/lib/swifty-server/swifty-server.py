from flask import Flask, jsonify, request
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
    get_jwt_identity
)

app = Flask(__name__)
app.config.from_object(__name__)


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('api/user/<int:userID>', methods=['GET'])
def get_user(userID):
    return 'Hello World! %d ' % userID


@app.route('api/auth', methods=['POST'])
def get_user(userID):
    return 'Hello World! %d ' % userID



if __name__ == '__main__':
    app.debug = True
    app.run()




class User(object):
    def __init__(self, id, email, password):
        self.id = id
        self.email = email
        self.password = password
        self.lastSeen