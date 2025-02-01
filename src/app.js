const express = require('express');
const sequelize = require('./config/db');
 const userRoutes = require('./routes/userRoutes');
 
 const swaggerSetup = require('./config/swagger');

 require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3600;


swaggerSetup(app);
// Middleware to parse JSON requests
app.use(express.json());

// Use user routes
app.use('/api', userRoutes);
 


// Sync database
sequelize.sync().then(() => console.log('Database synced'));

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




// Export the app for testing
module.exports = app;


// Start the server only if not in test environment
if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  }