from app import app

@app.route('/auth')
def login():
    return "hello"