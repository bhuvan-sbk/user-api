const { Sequelize } = require('sequelize');
require('dotenv').config();



console.log('🔍 Connecting to PostgreSQL...');
console.log(`📌 DB_HOST: ${process.env.DB_HOST}`);
console.log(`📌 DB_PORT: ${process.env.DB_PORT}`);
console.log(`📌 DB_USER: ${process.env.DB_USER}`);
console.log(`📌 DB_NAME: ${process.env.DB_NAME}`);

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
  }
);

// Test the database connection
sequelize.authenticate()
  .then(() => {
    console.log('✅ Database connected successfully');
  })
  .catch((error) => {
    console.error('❌ Unable to connect to the database:', error);
  });

module.exports = sequelize;