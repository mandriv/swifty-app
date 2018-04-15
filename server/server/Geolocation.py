from server import db
from server.util import JsonModel

class Geolocation(db.Model, JsonModel):
    id = db.Column(db.Integer, primary_key=True)
    long = db.Column(db.Float, nullable=False, default=0)
    lat = db.Column(db.Float, nullable=False, default=0)
    date = db.Column(db.DateTime, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

