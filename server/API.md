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

* `GET /api/users` - retrieves all users [admin]
* `GET /api/users/:id` - retrieves user by id [any - admin, own - user, admin]
* `GET /api/users/:id/todays-percentile` - returns users percentile for today's activity [any - admin, own - user, admin]
* `POST /api/users` - creates new user NEED ALL THREE FIELD [anonymous, user, admin]
    * username
    * email
    * password
* `PUT /api/users/:id` - updates user's info with given details (only send the one you want to update) [any - admin, own -user, admin]
    * password
    * bio
    * email
    * username
* `DELETE /api/users/:id` - removes user and its entries [admin]
* `POST /api/users/:id/picture` - upload profile picture [admin -> any, user-> own, anonym -> none]

#### /stats

* `GET /api/stats/:id` - retrives users stats [admin -> any, user -> own, anonyom - > nothing]
* `GET /api/stats/:id/:year/:month/:day` - retrives user stats from given day [admin -> any, user -> own, anonym -> nothing]
* `PUT /api/stats/:id` updated stats for today [admin -> any, user->own, anonym -> none] with given fields does not required to send all of them
    * steps <- for steps data
    * calories <- for calories data
    * distance <- distance for data 
    * avarage_speed <- guess :0
* `GET /api/stats/leaderboard` retrives the leaderboard

#### /auth
* `POST /auth` - returns updated JWT and user object [anonymous]
* `POST /api/auth/login` - return JWT and user object [anonymous]
    * username <- send the username
    * password <- send the password

#### /geolocation
* `GET /api/geolocation/:id` retrives today locations points for given user
* `POST /api/geolocation/:id` submit new location data
    * lang <- needed
    * long <- neede


