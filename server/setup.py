from distutils.core import setup

setup(name='Swifty Server',
      version='1.0',
      url='https://github.com/mandriv/swifty-app/',
      packages=['server'],
      install_requires=['flask', 'flask-jwt-extended, flask_pymongo', 'SQLAlchemy', 'gunicorn', 'flask_migrate', 'flask_sslify'],
      )
