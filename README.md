# Project Title
Building a RESTful API with Node.js and Express

## Description
This is a RESTful API built with **Node.js**, **Express**, and **Sequelize**. It allows you to perform CRUD (Create, Read, Update, Delete) operations on a `User` entity. The API also includes optional features like **JWT authentication** and **pagination**.

---

##  Criteria

### 1. Correct Setup of Node.js, Express, and Sequelize
- **Node.js**: The project is initialized using `npm init` and includes all necessary dependencies.
- **Express**: Used as the web framework to handle routing and middleware.
- **Sequelize**: Configured to interact with a PostgreSQL database.
- **Environment Variables**: Managed using `dotenv` for secure configuration.

### 2. Adherence to RESTful Conventions
- The API follows RESTful conventions:
  - **GET /api/users**: Retrieve all users.
  - **GET /api/users/:id**: Retrieve a single user by ID.
  - **POST /api/users**: Create a new user.
  - **PUT /api/users/:id**: Update a user by ID.
  - **DELETE /api/users/:id**: Delete a user by ID.
- Proper HTTP methods and status codes are used for each endpoint.

### 3. Proper Database Design with Sequelize Models
- The `User` model is defined using Sequelize with the following fields:
  | Column      | Type          | Description                |
  |-------------|---------------|----------------------------|
  | id          | INTEGER       | Primary key, auto-increment|
  | name        | STRING        | User's name (required)     |
  | email       | STRING        | User's email (unique)      |
  | password    | STRING        | User's password (required) |
  | createdAt   | TIMESTAMP     | Timestamp of creation      |
  | updatedAt   | TIMESTAMP     | Timestamp of last update   |

### 4. Middleware Usage and Validation
- **Request Validation Middleware**: Ensures that `name` and `email` are provided and that the email is in a valid format.
- **Error Handling Middleware**: Gracefully handles errors and returns appropriate HTTP status codes and messages.

<!-- const validateUser = (req, res, next) => {
    const { name, email } = req.body;
  
    // Check if name and email are provided
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }
  
    // Validate email format using a simple regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }
  
    // If validation passes, move to the next middleware or controller
    next();
  };
  
  module.exports = validateUser; -->

### 5. Quality and Structure of the Codebase
- The codebase is organized into modular components:

## Project Setup

Installation

1.Clone the repository:

git clone https://github.com/bhuvan-sbk/user-api.git
   cd user-api


 2.Install dependencies:
    npm install


3.Set up the database:
-Create a PostgreSQL database named users_db.

-Update the .env file with your database credentials:


DB_NAME=users_db
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
PORT=3000


4.Start the server:
npm run dev/node src/app.js



1. POST /users - Create Users
First, let's create some test users:

POST http://localhost:3500/users
Content-Type: application/json

Body 1:
{
    "name": "John Doe",
    "email": "john.doe@example.com"
}

Body 2:
{
    "name": "Jane Smith",
    "email": "jane.smith@example.com"
}

Body 3:
{
    "name": "Mike Johnson",
    "email": "mike.johnson@example.com"
}

Expected Response (Status: 201):

{
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "createdAt": "2024-01-31T...",
    "updatedAt": "2024-01-31T..."
}

2.GET /users - Get All Users
GET http://localhost:3500/users


Expected Response (Status: 200):

[
    {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "createdAt": "2024-01-31T...",
        "updatedAt": "2024-01-31T..."
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "createdAt": "2024-01-31T...",
        "updatedAt": "2024-01-31T..."
    },
    {
        "id": 3,
        "name": "Mike Johnson",
        "email": "mike.johnson@example.com",
        "createdAt": "2024-01-31T...",
        "updatedAt": "2024-01-31T..."
    }
]


3.GET /users/:id - Get Single User
GET http://localhost:3500/users/1

Expected Response (Status: 200):
{
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "createdAt": "2024-01-31T...",
    "updatedAt": "2024-01-31T..."
}

4. PUT /users/:id - Update User

PUT http://localhost:3500/users/1
Content-Type: application/json

{
    "name": "John Doe Updated",
    "email": "john.updated@example.com"
}


Expected Response (Status: 200):
{
    "id": 1,
    "name": "John Doe Updated",
    "email": "john.updated@example.com",
    "createdAt": "2024-01-31T...",
    "updatedAt": "2024-01-31T..."
}

5. DELETE /users/:id - Delete User


DELETE http://localhost:3500/users/3
Expected Response (Status: 204 No Content)


Here's how to test these in Postman step by step:

Testing POST (Create):

Open Postman
Select "POST" method
Enter URL: http://localhost:3000/users
Go to "Headers" tab
Add: Content-Type: application/json
Go to "Body" tab
Select "raw" and "JSON"
Copy and paste the test data
Click "Send"


Testing GET (Read All):

Create new tab
Select "GET" method
Enter URL: http://localhost:3000/users
Click "Send"


Testing GET by ID (Read One):

Create new tab
Select "GET" method
Enter URL: http://localhost:3000/users/1
Click "Send"


Testing PUT (Update):

Create new tab
Select "PUT" method
Enter URL: http://localhost:3000/users/1
Go to "Headers" tab
Add: Content-Type: application/json
Go to "Body" tab
Select "raw" and "JSON"
Copy and paste the update data
Click "Send"


Testing DELETE:

Create new tab
Select "DELETE" method
Enter URL: http://localhost:3000/users/3
Click "Send"



Error Testing:

1.Invalid Email Format:

POST http://localhost:3000/users
{
    "name": "Test User",
    "email": "invalid-email"
}

2.Duplicate Email:

POST http://localhost:3000/users
{
    "name": "Another User",
    "email": "john.doe@example.com"
}

3.Invalid ID:

GET http://localhost:3000/users/999






   



   
project-root/
├── src/
│   ├── controllers/       # Controller logic
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── middleware/        # Middleware functions
│   ├── config/            # Configuration files
│   └── app.js             # Main application file
├── tests/                 # Unit tests
├── .env                   # Environment variables
├── .gitignore             # Git ignore file
└── package.json           # Project dependencies



