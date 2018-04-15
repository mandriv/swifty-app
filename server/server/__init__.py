import datetime
import os

from flask import Flask, send_from_directory
from flask_jwt_extended import JWTManager
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_sslify import SSLify

app = Flask(__name__, static_url_path='/static')
app.config.from_object(__name__)

if 'DYNO' in os.environ:
    sslify = SSLify(app)

@app.route('/static/<path:path>')
def static_file_serving(path):
    return send_from_directory('static', path)


# db
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URI', 'sqlite:///../sql')
app.config['SECRET_KEY'] = 'evenmoresecretthanthis'

db = SQLAlchemy(app)
migrate = Migrate(app, db)

# jwt
jwt_key = os.environ.get('JWT_SECRET_KEY')
app.config['JWT_SECRET_KEY'] = jwt_key if jwt_key else 'secret key'  # Change this!
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = datetime.timedelta(days=365)
jwt = JWTManager(app)


import server.auth_routes
import server.stat_routes
import server.user_routes