from server import db
from server.util import JsonModel

class UserStats(db.Model, JsonModel):

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    date = db.Column(db.Date, nullable=False)
    steps = db.Column(db.Integer, nullable = False)
    calories = db.Column(db.Float, nullable = False)
    distance = db.Column(db.Float, nullable = False)
    avarage_speed = db.Column(db.Float, nullable = False)

    def __repr__(self):
        return '<UserStats %r>' % self.user_id

