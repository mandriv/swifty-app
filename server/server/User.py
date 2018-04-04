from server import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    passw = db.Column(db.String(64), unique=False, nullable=False)
    bio = db.Column(db.TEXT, unique=False, nullable=True)

    def __repr__(self):
        return '<User %r>' % self.username

