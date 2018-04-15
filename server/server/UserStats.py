from server import db
from server.util import JsonModel
from datetime import date

class UserStats(db.Model, JsonModel):

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    date = db.Column(db.Date, nullable=False)
    steps = db.Column(db.Integer, nullable = False)
    calories = db.Column(db.Float, nullable = False)
    distance = db.Column(db.Float, nullable = False)
    average_speed = db.Column(db.Float, nullable = False)

    def __repr__(self):
        return '<UserStats %r>' % self.user_id


    def get_stats(user_id, year, month, day):
        user_today_stats = UserStats.query.filter_by(user_id = user_id, date = date(year, month, day)).first()

        if user_today_stats == None:
            user_today_stats = UserStats(user_id = user_id, date = date(year, month, day), steps=0, calories=0, distance=0, average_speed=0 )
            db.session.add(user_today_stats)
            db.session.commit()

        return user_today_stats


