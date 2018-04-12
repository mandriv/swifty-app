from server import app, db
from server.User import User, ROLE_USER
from server.UserStats import UserStats
from datetime import date, datetime
from flask import jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity
from sqlalchemy import func
from server.util import json_required


@app.route('/api/stats/<int:user_id>', methods=['GET'])
@jwt_required
def get_today_stats(user_id):
    current_user = User.query.get(get_jwt_identity())

    if current_user.role == ROLE_USER and current_user.id != user_id:
        return jsonify(msg="you are not an admin"), 404

    today_date = datetime.now()
    user_today_stats = UserStats.get_stats(user_id, today_date.year, today_date.month, today_date.day)

    return jsonify(stats=user_today_stats.to_json())

@app.route('/api/stats/<int:user_id>/<int:year>/<int:month>/<int:day>', methods=['GET'])
@jwt_required
def get_date_stats(user_id, year, month, day):
    current_user = User.query.get(get_jwt_identity())

    if current_user.role == ROLE_USER and current_user.id != user_id:
        return jsonify(msg="you are not an admin"), 404

    user_today_stats = UserStats.get_stats(user_id, year, month, day)

    return jsonify(stats=user_today_stats.to_json())


@app.route('/api/stats/<int:user_id>', methods=['PUT'])
@jwt_required
@json_required
def update_stats(user_id):
    current_user = User.query.get(get_jwt_identity())

    if current_user.role == ROLE_USER and current_user.id != user_id:
        return jsonify(msg="you are not an admin"), 404

    today_date = datetime.now()
    user_today_stats = UserStats.query.filter_by(user_id = user_id, date = date(today_date.year, today_date.month, today_date.day)).first()

    if user_today_stats == None:
        user_today_stats = UserStats(user_id = user_id, date = date(today_date.year, today_date.month, today_date.day), steps=0, calories=0, distance=0, avarage_speed=0 )
        db.session.add(user_today_stats)
        db.session.commit()

    stats_data = request.get_json()

    if "steps" in stats_data:
        user_today_stats.steps = stats_data['steps']

    if 'calories' in stats_data:
        user_today_stats.calories = stats_data['calories']

    if 'distance' in stats_data:
        user_today_stats.distance = stats_data['distance']

    if 'avarage_speed' in stats_data:
        user_today_stats.avarage_speed = stats_data['avarage_speed']

    db.session.commit()

    return jsonify(msg="stats has been updated", stats=user_today_stats.to_json())

@app.route('/api/stats/leaderboard', methods=['GET'])
def leaderboard():

    leaderboard_query = db.session.query(User.username, func.sum(UserStats.distance).label('distance'), func.sum(UserStats.calories).label('calories'), func.sum(UserStats.steps).label('steps')
    ).join(User.user_stats
    ).group_by(User.username
    ).all()


    json_user_list = list()
    for user in leaderboard_query:
        json_user_list.append({c: getattr(user, c) for c in user._fields})

    return jsonify(leaderboard=json_user_list)

