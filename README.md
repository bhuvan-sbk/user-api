# Project Title
Building a RESTful API with Node.js and Express

## Description
This is a RESTful API built with Node.js, Express, and Sequelize.

## Installation
```bash
npm install


##Usage

## Start the server:
 node src/app.js


Documentation:

## API Endpoints

### Users
- **GET /api/users**: Retrieve all users.
- **GET /api/users/:id**: Retrieve a single user by ID.
- **POST /api/users**: Create a new user.
- **PUT /api/users/:id**: Update a user by ID.
- **DELETE /api/users/:id**: Delete a user by ID.

### Authentication (Optional)
- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Login a user and receive a JWT token.


3. Proper Database Design with Sequelize Models
## Database Design

### Users Table
| Column      | Type          | Description                |
|-------------|---------------|----------------------------|
| id          | INTEGER       | Primary key, auto-increment|
| name        | STRING        | User's name (required)     |
| email       | STRING        | User's email (unique)      |
| password    | STRING        | User's password (required) |
| createdAt   | TIMESTAMP     | Timestamp of creation      |
| updatedAt   | TIMESTAMP     | Timestamp of last update   |


Running Tests
To run the unit tests, use the following command:

npm test


Test Coverage
GET /api/users: Retrieve all users.

GET /api/users/:id : Retrieve a single user by ID.

POST /api/users: Create a new user.

PUT /api/users/:id : Update a user by ID.

DELETE /api/users/:id : Delete a user by ID.



