const request = require('supertest');
const { app } = require('../src/index');
const { currentVersion } = require('../config/version');

describe('GET /version', () => {
  test('returns configured version', async () => {
    const res = await request(app).get('/version');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ version: currentVersion });
  });
});
