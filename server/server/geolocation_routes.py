from sqlalchemy import and_

from server import app, db
from flask import jsonify, request
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

@app.route('/api/geolocation/<int:user_id>', methods=['PUT'])
def update_locaton(user_id):

    location_info = request.get_json()

    today_date = datetime.now()
    location = Geolocation(user_id = user_id, long=location_info['long'], lat=location_info['lat'], date=today_date)

    db.session.add(location)
    db.session.commit()

    return jsonify(msg='location saved', location=location.to_json())
