const request = require('supertest');
const app = require('../src/app');
const sequelize = require('../src/config/db');
const User = require('../src/models/User'); // Correct Import

describe('User API', () => {
  let server;

  beforeAll(async () => {
    console.log('🔄 Initializing database connection...');

    try {
      await sequelize.authenticate();
      console.log('✅ Database connected successfully');
      await sequelize.sync({ force: true }); // Reset database before tests
    } catch (error) {
      console.error('❌ Unable to connect to the database:', error);
    }

    // Start the test server
    server = app.listen(4000, () => console.log('🚀 Test server running on port 4000'));
  });

  afterAll(async () => {
    console.log('🛑 Closing server and database connection...');
    await server.close();
    await sequelize.close();
  });

  beforeEach(async () => {
    await User.destroy({ where: {} }); // Clear Users before each test
  });

  // ✅ Test GET /users (Retrieve All Users)
  it('should retrieve all users', async () => {
    const response = await request(app).get('/api/users');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  // ✅ Test POST /users (Create User)
  it('should create a new user', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({ name: 'Test User', email: 'test@example.com' });
    
    expect(response.status).toBe(201);
    expect(response.body.name).toBe('Test User');
    expect(response.body.email).toBe('test@example.com');
  });

  // ✅ Test GET /users/:id (Retrieve User by ID)
  it('should retrieve a user by ID', async () => {
    const user = await User.create({ name: 'Test User', email: 'test@example.com' });
    const response = await request(app).get(`/api/users/${user.id}`);

    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Test User');
    expect(response.body.email).toBe('test@example.com');
  });

  // ✅ Test PUT /users/:id (Update User by ID)
  it('should update a user by ID', async () => {
    const user = await User.create({ name: 'Test User', email: 'test@example.com' });

    const response = await request(app)
      .put(`/api/users/${user.id}`)
      .send({ name: 'Updated User', email: 'updated@example.com' });

    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Updated User');
    expect(response.body.email).toBe('updated@example.com');
  });

  // ✅ Test DELETE /users/:id (Delete User by ID)
  it('should delete a user by ID', async () => {
    const user = await User.create({ name: 'Test User', email: 'test@example.com' });

    const response = await request(app).delete(`/api/users/${user.id}`);
    expect(response.status).toBe(204);
  });
});
