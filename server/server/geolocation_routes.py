from sqlalchemy import and_

from server import app, db
from flask import jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity
from datetime import datetime, date
from server.Geolocation import Geolocation
from server.User import User, ROLE_USER

@app.route('/api/geolocation/<int:user_id>', methods=['get'])
@jwt_required
def get_today_positions(user_id):

    current_user = user.query.get(get_jwt_identity())

    if (current_user.role == role_user
            and not current_user.id == user_id):
        return jsonify(msg="only admin can update other users"), 400


    today_date = datetime.now()
    today_locations = geolocation.query\
        .filter(geolocation.date.between(datetime(today_date.year, today_date.month, today_date.day, 0, 0, 0)
                                         , datetime(today_date.year, today_date.month, today_date.day, 23, 59, 59)))\
        .filter_by(user_id = user_id)\
        .all()

    json_locaitons = list()
    for location in today_locations:
        json_locaitons.append(location.to_json())

    return jsonify(locations = json_locaitons)

@app.route('/api/geolocation/<int:user_id>/all', methods=['get'])
@jwt_required
def get_positions(user_id):

    current_user = user.query.get(get_jwt_identity())

    if (current_user.role == role_user
            and not current_user.id == user_id):
        return jsonify(msg="only admin can update other users"), 400

    today_locations = Geolocation.query.filter_by(user_id = user_id).all()

    json_locaitons = list()
    for location in today_locations:
        json_locaitons.append(location.to_json())

    return jsonify(locations = json_locaitons)


@app.route('/api/geolocation/<int:user_id>', methods=['POST'])
@jwt_required
def update_locaton(user_id):

    current_user = User.query.get(get_jwt_identity())

    if (current_user.role == ROLE_USER
            and not current_user.id == user_id):
        return jsonify(msg="only admin can update other users"), 400

    location_info = request.get_json()

    today_date = datetime.now()
    location = Geolocation(user_id = user_id, long=location_info['long'], lat=location_info['lat'], date=today_date)

    db.session.add(location)
    db.session.commit()

    return jsonify(msg='location saved', location=location.to_json())
