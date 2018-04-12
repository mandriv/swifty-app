from server import app

@app.route('/api/stats/<int:user_id>', methods=['GET'])
def get_stats(user_id):
    return "hello"