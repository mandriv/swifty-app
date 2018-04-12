from server import db

class UserStats(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    steps = db.Column(db.Integer, nullable = False)
    calories = db.Column(db.Float, nullable = False)
    distance = db.Column(db.Float, nullable = False)
    avarage_speed = db.Column(db.Float, nullable = False)

    def to_json(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}


