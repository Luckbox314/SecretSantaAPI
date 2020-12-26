# SecretSantaAPI

API to play secret santa with your friends. It sends emails to all your friends with their respective secret santa.

It's deployed on Heroku in https://amigo-secreto-api.herokuapp.com/.

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

## Selection algorithms
* `one-circle` **(default)**: this algorithm shuffles al the users and then assign to each one the next one. Finally, the last one get asigned the first one.
    * **Pros:** The result is a full circle that goes trough everyone. This may be handy when giving the presents.
    * **Cons:** It doesn't reach all posible combinations between the participants. For example, you know that if you're the secret Santa of X, then X is not your secret Santa.

## Add a selection algorithm
To add a selection algorithm you have to create a `js` file in the folder `src/selection_methods`.
In this folder you can make the function that will apply the selection algorithm.

This function must receive an array of users in the form:
```json
[
    {"username": "username1", "email": "email1@email.com"},
    {"username": "username2", "email": "email2@email.com"},
    "..."
]
```
And must return and array with the paired users in this format:
```json
[
  {
    "sender": {"username": "username1", "email": "email1@email.com"},
    "receiver": {"username": "username2", "email": "email2@email.com"}
  },
  {
    "sender": {"username": "username2", "email": "email2@email.com"},
    "receiver": {"username": "username1", "email": "email1@email.com"}
  },
  "..."
]
```
The function must be imported in `src/routes/index.js` and must be included in the object `methods`.
```js
const one_circle = require('../selection_methods/one_circle');

const methods = {
  one_circle: one_circle
}
```

Finally the new method must be documented here.
