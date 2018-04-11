import os

from flask import Flask
from flask_jwt_extended import JWTManager
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object(__name__)

# db
password = os.getenv('SWIFTY_DB_PASS')
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:%s@localhost/swifty' % password
app.config['SECRET_KEY'] = 'evenmoresecretthanthis'

# db
# app.config['MONGO_DBNAME'] = 'swifty'
# mongo = PyMongo(app, config_prefix='MONGO')

db = SQLAlchemy(app)

# jwt
jwt_key = os.environ.get('JWT_SECRET_KEY')
app.config['JWT_SECRET_KEY'] = jwt_key if jwt_key else 'secret key'  # Change this!
jwt = JWTManager(app)
