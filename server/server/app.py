from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///./sql'
app.config['SECRET_KEY'] = 'evenmoresecretthanthis'
db = SQLAlchemy(app)


if __name__ == '__main__':
    app.run()