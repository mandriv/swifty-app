from server import db

class Geolocation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    long = db.Column(db.Float, nullable=False, default=0)
    lat = db.Column(db.Float, nullable=False, default=0)
    date = db.Column(db.DateTime, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

