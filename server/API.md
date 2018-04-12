# Proposed Server API:
Authentication: JWT
Authorization: Access Control List
Roles:
* anonymous
* user
* admin

Tables in DB:
* Users (`id`, `email`, `password`, `username`, `bio`)
* GeoLocations (`user_id`, `long`, `lat`, `timestamp`)

all the ones below will be one entry per day per user:

* user_stats(`id`, `user_id`, `date`, `steps`, `calories`, `distance`, `avarage_speed`)


### API Endpoints:
in [brackets] - role required

#### /users

* `GET /users` - retrieves all users [admin]
* `GET /users/:id` - retrieves user by id [any - admin, own - user, admin]

* `GET /users/:id/tracking-data` - returns steps, calories, distance and average speed [any - admin, own - user, admin]
  * `?from` - retrieves data only from specific date (format TBD)
  * `?to` - retrieves data only to specific date
  * `?dist-unit` - "km" or "mi" - default "km"
  * `?speed-unit` - "km/h" or "mi/h" - default "km/h"
* `GET /users/:id/geolocation` - returns geolocation data for user [any - admin, own - user, admin]
  * `?from` - retrieves data only from specific date (format TBD)
  * `?to` - retrieves data only to specific date
* `GET /users/:id/todays-percentile` - returns users percentile for today's activity [any - admin, own - user, admin]
* `POST /users` - creates new user NEED ALL THREE FIELD [anonymous, user, admin]
    * username
    * email
    * password
* `PUT /users/:id` - updates user's info with given details (only send the one you want to update) [any - admin, own -user, admin]
    * password
    * bio
    * email
    * username
* `DELETE /users:id` - removes user and its entries [admin]

#### /stats

* `GET /api/stats/:id` - retrives users stats [admin -> any, user -> own, anonyom - > nothing]
* `GET /api/stats/:id/:year/:month/:day` - retrives user stats from given day [admin -> any, user -> own, anonym -> nothing]
* `PUT /api/stats/:id` updated stats for today [admin -> any, user->own, anonym -> none] with given fields does not required to send all of them
    * steps <- for steps data
    * calories <- for calories data
    * distance <- distance for data 
    * avarage_speed <- guess :0

#### /auth
* `POST /auth` - returns updated JWT and user object [anonymous]
* `POST /auth/login` - return JWT and user object [anonymous]
    * username <- send the username
    * password <- send the password

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
