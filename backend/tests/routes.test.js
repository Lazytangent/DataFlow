const request = require('supertest');
const app = require('../app');
const { sequelize, User } = require('../db/models');

describe('Get Endpoints', () => {
  it('should get a message', async () => {
    const res = await request(app)
      .get('/api/test')
      .expect('Content-Type', /json/)
      .expect(200)
    expect(res.body).toHaveProperty('message');
  });
});

beforeAll(async () => {
  await sequelize.sync({ force: true, logging: false });
});

afterAll(async () => {
  await sequelize.close();
});

describe('GET /api/users', () => {
  it('should exist', async () => {
    await request(app)
      .get('/api/users')
      .expect(200)
  });

  it('should return JSON', async () => {
    await request(app)
      .get('/api/users')
      .expect('Content-Type', /json/)
      .expect(200)
  });

  it('should return all the users in the database', async () => {
    const fakeUser1 = {
      name: "Demo Tester",
      email: "demo@aa.io",
      username: "demoman",
    };
    const fakeUser2 = {
      name: "Test Demoer",
      email: "test@aa.io",
      username: "testman",
    };

    await User.create(fakeUser1);
    await User.create(fakeUser2);

    const res = await request(app)
      .get('/api/users')
      .expect(200)

    expect(res.body).toEqual(expect.arrayContaining([
      expect.objectContaining(fakeUser1),
      expect.objectContaining(fakeUser2),
    ]));
  });
});
