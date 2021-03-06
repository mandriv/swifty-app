from functools import wraps

from flask import jsonify, request


def json_required(func):
    @wraps(func)
    def g(*args, **kwargs):
        if not request.is_json:
            return jsonify({"msg": "Request must be in JSON"}), 400
        return func(*args, **kwargs)

    return g

class JsonModel():
    def to_json(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}