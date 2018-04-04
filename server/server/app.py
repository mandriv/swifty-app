import os
from flask_sqlalchemy import SQLAlchemy
from flask import Flask, jsonify, request
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
    get_jwt_identity
)

app = Flask(__name__)
app.config.from_object(__name__)

# db
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///./sql'
app.config['SECRET_KEY'] = 'evenmoresecretthanthis'

# db
# app.config['MONGO_DBNAME'] = 'swifty'
# mongo = PyMongo(app, config_prefix='MONGO')

db = SQLAlchemy(app)

# jwt
jwt_key = os.environ.get('JWT_SECRET_KEY')
app.config['JWT_SECRET_KEY'] = jwt_key if jwt_key else 'secret key'  # Change this!
jwt = JWTManager(app)


@app.route('/')
def hello_world():
    return 'Hello World!'


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


@app.route('/api/user/<int:userID>', methods=['GET'])
@jwt_required
def get_user(userID):
    current_user = get_jwt_identity()
    return 'User %d %s ' % (userID, current_user)


if __name__ == '__main__':
    app.run()
