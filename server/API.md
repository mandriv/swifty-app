# Proposed Server API:
Authentication: JWT
Authorization: Access Control List
Roles:
* anonymous
* user
* admin

Tables in DB:
* Users (`id`, `email`, `password`, `username`, `bio`, `photo`)
* GeoLocations (`user_id`, `long`, `lat`, `timestamp`)
all the ones below will be one entry per day per user:
* Steps (`user_id`, `date`, `value`)
* Calories (`user_id`, `date`, `value`)
average speed will be tricky - it would be easier if we store distances and times locally and just sync with db, keep it in the same fashion like steps and calories
* Distances (`user_id`, `date`, `value`)
* AverageSpeeds (`user_id`, `date`, `value`)


### API Endpoints:
in [brackets] - role required

#### /users

* `GET /users` - retrieves all users [admin]
* `GET /users/:id` - retrieves user by id [any - admin, own - user, admin]
* `GET /users/:id/steps` - retrieves user's total step cound [any - admin, own - user, adnim]
query params:
  * `?from` - retrieves steps only from specific date (format TBD)
  * `?to` - retrieves steps only to specific date
* `PUT /users/:id/steps` - updates user's step count (number and timeframe passed in body) [any - admin, own - user, admin]
* `GET /users/:id/distance` - retrieves user total distance [any - admin, own - user, adnim]
query params:
  * `?from` - retrieves distance only from specific date (format TBD)
  * `?to` - retrieves distance only to specific date
  * `?unit` - "km" or "mi" - default "km"
* `PUT /users/:id/distance` - updates user's distance in timeframe (number and timeframe passed in body) [any - admin, own - user, admin]
* `GET /users/:id/calories` - retrieves user's total calories burned in kcal [any - admin, own - user, adnim]
query params:
  * `?from` - retrieves calories only from specific date (format TBD)
  * `?to` - retrieves calories only to specific date
* `PUT /users/:id/calories` - updates user's calories burned (number and timeframe passed in body) [any - admin, own - user, admin]
* `GET /users/:id/average-speed` - retrieves user's average speed [any - admin, own - user, adnim]
query params:
  * `?from` - retrieves average speed only from specific date (format TBD)
  * `?to` - retrieves average speed only to specific date
  * `?unit` - "km/h" or "mi/h" - default "km/h"
* `PUT /users/:id/average-speed` - updates user's average speed (number and timeframe passed in body) [any - admin, own - user, admin]
* `GET /users/:id/tracking-data` - returns steps, calories, distance and average speed [any - admin, own - user, admin]
  * `?from` - retrieves data only from specific date (format TBD)
  * `?to` - retrieves data only to specific date
  * `?dist-unit` - "km" or "mi" - default "km"
  * `?speed-unit` - "km/h" or "mi/h" - default "km/h"
* `GET /users/:id/geolocation` - returns geolocation data for user [any - admin, own - user, admin]
  * `?from` - retrieves data only from specific date (format TBD)
  * `?to` - retrieves data only to specific date
* `GET /users/:id/todays-percentile` - returns users percentile for today's activity [any - admin, own - user, admin]
* `POST /users` - creates new user [anonymous, user, admin]
* `PUT /users/:id` - updates user's info [any - admin, own -user, admin]
* `DELETE /users:id` - removes user and its entries [admin]

#### /auth
* `POST /auth` - returns updated JWT and user object [anonymous]
* `POST /auth/login` - return JWT and user object [anonymous]

#### /leaderboards
* `GET /leaderboards/steps` - returns users leaderboard in steps [anonymous]
query params:
  * `?from` - retrieves data only from specific date (format TBD)
  * `?to` - retrieves data only to specific date
* `GET /leaderboards/calories` - returns leaderboard in calories [anonymous]
query params:
  * `?from` - retrieves data only from specific date (format TBD)
  * `?to` - retrieves data only to specific date
* `GET /leaderboards/distance` - returns leaderboard in distance [anonymous]
query params:
  * `?from` - retrieves data only from specific date (format TBD)
  * `?to` - retrieves data only to specific date
  * `?unit` - "km" or "mi" - default "km"
* `GET /leaderboards/average-speed` - returns leaderboard in average-speed [anonymous]
query params:
  * `?from` - retrieves data only from specific date (format TBD)
  * `?to` - retrieves data only to specific date
  * `?unit` - "km/h" or "mi/h" - default "km/h"
