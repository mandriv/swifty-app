from sqlalchemy import and_

from server import app
from flask import jsonify
from datetime import datetime, date
from server.Geolocation import Geolocation

@app.route('/api/geolocation/<int:user_id>', methods=['GET'])
def get_today_positions(user_id):

    today_date = datetime.now()
    today_locations = Geolocation.query\
        .filter(Geolocation.date.between(datetime(today_date.year, today_date.month, today_date.day, 0, 0, 0)
                                         , datetime(today_date.year, today_date.month, today_date.day, 23, 59, 59)))\
        .filter_by(user_id = user_id)\
        .all()

    json_locaitons = list()
    for location in today_locations:
        json_locaitons.append(location.to_json())

    return jsonify(locations = json_locaitons)
