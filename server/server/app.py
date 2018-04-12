import os
from server import app
from server import user_routes
from server import auth_routes
from server import stat_routes

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(port=port)
