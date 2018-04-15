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

@app.route('/api/stats/<int:user_id>/todays_percentile', methods=['GET'])
@jwt_required
def get_today_percentile(user_id):
    current_user = User.query.get(get_jwt_identity())

    if current_user.role == ROLE_USER and current_user.id != user_id:
        return jsonify(msg="you are not an admin"), 404

    today_date = datetime.now()
    today_stats = UserStats.query.filter_by(date = date(today_date.year, today_date.month, today_date.day)).all()

    today_stats.sort(key=lambda x: x.steps, reverse=True)

    index = 0
    while index < len(today_stats) and today_stats[index].user_id == user_id:
        index += 1

    steps_percentile = index / (len(today_stats)-1) * 100

    today_stats.sort(key=lambda x: x.distance, reverse=True)

    index = 0
    while index < len(today_stats) and today_stats[index].user_id == user_id:
        index += 1

    distance_percentile = index / (len(today_stats)-1) * 100

    today_stats.sort(key=lambda x: x.calories, reverse=True)
    index = 0
    while index < len(today_stats) and today_stats[index].user_id == user_id:
        index += 1

    calories_percentile = index / (len(today_stats)-1) * 100
    today_stats.sort(key=lambda x: x.average_speed, reverse=True)

    index = 0
    while index < len(today_stats) and today_stats[index].user_id == user_id:
        index += 1

    average_speed_percentile = index / (len(today_stats)-1) * 100

    return jsonify(average_speed_percentile = average_speed_percentile
                   , steps_percentile = steps_percentile
                   , calories_percentile = calories_percentile
                   , distance_percentile = distance_percentile)

@app.route('/api/stats/<int:user_id>/all', methods=['GET'])
@jwt_required
def get_all_stats(user_id):
    current_user = User.query.get(get_jwt_identity())

    if current_user.role == ROLE_USER and current_user.id != user_id:
        return jsonify(msg="you are not an admin"), 404

    records = UserStats.query.filter_by(user_id = user_id).all()

    json_all_record = list()
    for record in records:
        json_all_record.append(record.to_json())

    return jsonify(all_record = json_all_record)

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
        user_today_stats = UserStats(user_id = user_id, date = date(today_date.year, today_date.month, today_date.day), steps=0, calories=0, distance=0, average_speed=0 )
        db.session.add(user_today_stats)
        db.session.commit()

    stats_data = request.get_json()

    if "steps" in stats_data:
        user_today_stats.steps = stats_data['steps']

    if 'calories' in stats_data:
        user_today_stats.calories = stats_data['calories']

    if 'distance' in stats_data:
        user_today_stats.distance = stats_data['distance']

    if 'average_speed' in stats_data:
        user_today_stats.average_speed = stats_data['average_speed']

    db.session.commit()

    return jsonify(msg="stats has been updated", stats=user_today_stats.to_json())

@app.route('/api/stats/<int:user_id>/increment', methods=['PUT'])
@jwt_required
@json_required
def increment_stats(user_id):
    current_user = User.query.get(get_jwt_identity())

    if current_user.role == ROLE_USER and current_user.id != user_id:
        return jsonify(msg="you are not an admin"), 404

    today_date = datetime.now()
    user_today_stats = UserStats.query.filter_by(user_id = user_id, date = date(today_date.year, today_date.month, today_date.day)).first()

    if user_today_stats == None:
        user_today_stats = UserStats(user_id = user_id, date = date(today_date.year, today_date.month, today_date.day), steps=0, calories=0, distance=0, average_speed=0 )
        db.session.add(user_today_stats)
        db.session.commit()

    stats_data = request.get_json()

    if "steps" in stats_data:
        user_today_stats.steps += stats_data['steps']

    if 'calories' in stats_data:
        user_today_stats.calories += stats_data['calories']

    if 'distance' in stats_data:
        user_today_stats.distance += stats_data['distance']

    if 'average_speed' in stats_data:
        user_today_stats.average_speed += stats_data['average_speed']

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

    board = {}
    board['steps'] = sorted(json_user_list,key=lambda k: k['steps'], reverse=True)
    board['distance'] = sorted(json_user_list, key=lambda k: k['distance'], reverse=True)
    board['calories'] = sorted(json_user_list, key=lambda k: k['calories'], reverse=True)

    return jsonify(leaderboard=board)

