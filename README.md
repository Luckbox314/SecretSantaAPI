# SecretSantaAPI

API to play secret santa with your friends. It sends emails to all your friends with their respective secret santa.

## Prerequisites:
* Node.js LTS (10.x or 12.x)

## Project Setup

* Clone repository
* Install dependencies:
  * `npm install`

## Run the app!

```sh
npm start
```

the app will run in http://localhost:3000

## Endpoints

* POST /
this endpoint receives all friends data, shuffles them and then send the respective emails.

Headers:
```json
{
  "Content-Type": "application/json",
  "Accept": "application/json"
}
```
Body:
```json
{"users": [
          {"username": "username1", "email": "email1@email.com"},
          {"username": "username2", "email": "email2@email.com"},
          {"username": "username3", "email": "email3@email.com"},
          {"username": "username4", "email": "email4@email.com"},
          {"username": "username5", "email": "email5@email.com"},
          {"username": "username6", "email": "email6@email.com"}
      ]
}
```
