from distutils.core import setup

setup(name='Swifty Server',
      version='1.0',
      url='https://github.com/mandriv/swifty-app/',
      packages=['swifty-server'],
      install_requires=['flask', 'flask-jwt-extended, flask_pymongo'],
)