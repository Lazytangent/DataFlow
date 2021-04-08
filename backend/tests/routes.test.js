const request = require('supertest');
const app = require('../app');

describe('Get Endpoints', () => {
  it('should get a message', async () => {
    const res = await request(app)
      .get('/api/test')
      .expect('Content-Type', /json/)
      .expect(200)
    expect(res.body).toHaveProperty('message');
  });
});
