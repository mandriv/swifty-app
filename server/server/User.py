import hashlib

from server import db


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    passw = db.Column(db.String(128), unique=False, nullable=False)
    bio = db.Column(db.TEXT, unique=False, nullable=True)
    role = db.Column(db.Integer, unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def to_json(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

    def set_hash_password(self, password):
        self.passw = self.__hash_password(password)

    def check_password(self, password):
        return self.passw == self.__hash_password(password)

    def __hash_password(self, password):
        hash_object = hashlib.sha3_512(password.encode('utf-8'))
        return hash_object.hexdigest()
