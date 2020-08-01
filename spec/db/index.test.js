const app = require('../../server/index.js');
const mongoose = require('mongoose');
mongoose.promise = global.Promise;

const request = require('supertest');


describe('Test to see if data gets retrieved properly', () => {
  const randomlyPickedData = Math.ceil(Math.random() * 50);

  // afterAll(async (done) => {
  //   await mongoose.connection.close();
  //   done();
  // });

  test('GET method returns an array of listings', (done) => {
    return request(app)
      .get('/api/reviews/?id=5')
      .then(response => {
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body[1]).toHaveProperty('name');
        expect(response.body[1]).toHaveProperty('location');
        expect(response.body[1]).toHaveProperty('timestamp');
        expect(response.body[1]).toHaveProperty('title');
        expect(response.body[1]).toHaveProperty('comment');
        expect(response.body[1]).toHaveProperty('like');
        expect(response.body[1]).toHaveProperty('dislike');
        expect(response.body[1]).toHaveProperty('star');
        done();
      });
  });

  test('Randomly picked data has correct properties', (done) => {
    return request(app)
      .get(`/api/reviews?id=${randomlyPickedData}`)
      .then(response => {
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body[0]).toHaveProperty('name');
        expect(response.body[0]).toHaveProperty('location');
        expect(response.body[0]).toHaveProperty('timestamp');
        expect(response.body[0]).toHaveProperty('title');
        expect(response.body[0]).toHaveProperty('comment');
        expect(response.body[0]).toHaveProperty('like');
        expect(response.body[0]).toHaveProperty('dislike');
        expect(response.body[0]).toHaveProperty('star');
        done();
      });
  });
});