
# Users API

This is a simple RESTful API for managing a list of users. It's built with Node.js and Express, demonstrating concepts such as routing, middleware, HTTP methods, status codes, error handling, and interaction with an in-memory data source.

## Features

- CRUD operations for user management
- Request logging middleware
- Input validation middleware
- Error handling with appropriate HTTP status codes

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/sourabh-969/MongoDB_Restful_API.git
   cd mongoDB_RESTful API
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   node server.js/||nodemon server.js/
   ```

The server will start running on `http://localhost:6900`.

## API Endpoints

- `GET /users`: Fetch all users from the MongoDB collection.
- `GET /users/`: Fetch details of a specific user by MongoDB ObjectId.
- `POST /user`: Add a new user
- `PUT /user/`: Update details of an existing user
- `DELETE /user/`: Delete a user by MongoDB ObjectId.

## User Object Structure

```json
{
    id: "1",
    firstName: "Anshika",
    lastName: "Agarwal",
    hobby: "Teaching"
    },
        {
        id: "2",
        firstName: "John",
        lastName: "Man",
        hobby: "Spamming name in WorldWEB"
        },
            {
            id: "3",
            firstName: "Sourabh",
            lastName: "Saroj",
            hobby: "Reading"
                }
```

## Usage Examples.

### install ThunderCLIENT Or PostMAN and make following Request's.

### Get all users

```
GET http://localhost:6900/users
```

### Get a specific user

```
GET http://localhost:6900/users/
```

### Create a new user

```
POST http://localhost:6900/user/
"BODY TAB - PASS FOLLOWING DATA'{"firstName":"John","lastName":"Doe","hobby":"Coding"}'
```

### Update a user

```
PUT  http://localhost:6900/user/
"BODY TAB - PASS FOLLOWING DATA'{"hobby":"Reading"}'
```

### Delete a user

```
DELETE http://localhost:6900/user/
```

## Error Handling

The API returns appropriate HTTP status codes and error messages:

- 200: Successful GET and PUT requests
- 201: Successful POST requests
- 204: Successful DELETE requests
- 400: Bad request (e.g., missing required fields)
- 404: Resource not found

## Use Comment
One-line comments are for explaining major complex parts of code, for easier to understanding.