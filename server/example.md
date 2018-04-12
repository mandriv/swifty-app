## Request example


```/api/users``` POST

**Request**
```json
{
	"username": "user12",
	"password": "hunter2",
	"email": "email@mail.com"
}
```


**Response**
```json
{
    "msg": "user created"
}
```


```/api/auth/login``` POST

**Request**

```json
{
	"username": "user12",
	"password": "hunter2"
}
```


**Response**
```json
{
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MjMyNzY3OTMsIm5iZiI6MTUyMzI3Njc5MywianRpIjoiMDAxNDNjNDUtZTUxZS00ZmEzLTllMzUtZDFkNzE0NGMzNTA4IiwiZXhwIjoxNTIzMjc3NjkzLCJpZGVudGl0eSI6MywiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.qVa8nr0mWan-QGuV5JglXQpgnkPGQG07_UJtvtay2EI",
    "user": {
        "bio": null,
        "email": "email@mail.com",
        "id": 3,
        "passw": "ebf48b0b0147f5525e19fdbda209643157f7dbef69c81009cb6c7c66526f59c68b465396f963a76c61c0b662bb896b8870ecf4ef19d49b04c5d33a196d05281c",
        "role": 0,
        "username": "user12"
    }
}
```
