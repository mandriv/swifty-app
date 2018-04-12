import os

from flask import Flask
from flask_jwt_extended import JWTManager
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config.from_object(__name__)

# db
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///../sql'
app.config['SECRET_KEY'] = 'evenmoresecretthanthis'

# db
# app.config['MONGO_DBNAME'] = 'swifty'
# mongo = PyMongo(app, config_prefix='MONGO')

db = SQLAlchemy(app)
migrate = Migrate(app, db)

# jwt
jwt_key = os.environ.get('JWT_SECRET_KEY')
app.config['JWT_SECRET_KEY'] = jwt_key if jwt_key else 'secret key'  # Change this!
jwt = JWTManager(app)
