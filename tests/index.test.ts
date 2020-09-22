import supertest from 'supertest';

import app from '../src/config/app';

const request = supertest(app);

test('It should be kevin', async () => {
  const { body } = await request.get('/users');

  expect(Array.isArray(body)).toBe(true);
});
