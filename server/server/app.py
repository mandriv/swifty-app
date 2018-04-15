import os
from server import app
from server import user_routes
from server import auth_routes
from server import stat_routes
from server import geolocation_routes

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
