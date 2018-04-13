# Swifty Server

API implemented with Python 3.6 - flask.

## Setup

3.6 is the required Python version.
If you have multiple python installation make sure the right one is used.
For example:
python3.6 and pip3.6

Install modules

```
pip install -r requirements.txt
```

**Environment variables**

Set the environment variables

`JWT_SECRET_KEY` - JWT secret key

`PORT` - Port

## Development


```
python server/app.py
```

Starts the api server


## Deploy

Deploy to Heroku

```
git push heroku `git subtree split --prefix server master`:master --force
```
GL & HF


