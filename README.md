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



