from server import app
from flask_jwt_extended import jwt_required, get_jwt_identity

@app.route('/api/user/<int:userID>', methods=['GET'])
@jwt_required
def get_user(userID):
    current_user = get_jwt_identity()
    return 'User %d %s ' % (userID, current_user)

