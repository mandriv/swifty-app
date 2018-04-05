from server import db
import hashlib

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    passw = db.Column(db.String(64), unique=False, nullable=False)
    bio = db.Column(db.TEXT, unique=False, nullable=True)

    def __repr__(self):
        return '<User %r>' % self.username

    def set_hash_password(self, password):
        self.passw = self.__hash_password(password)

    def check_password(self, password):
        print(self.passw)
        print(self.__hash_password(password))
        return self.passw == self.__hash_password(password)

    def __hash_password(self, password):
        hash_object = hashlib.sha3_256(password.encode('utf-8'))
        return hash_object.hexdigest()