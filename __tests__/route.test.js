//install SuperTest
const { json } = require('express');
const supertest = require('supertest');
const app = require('../server/server.js');
const server = 'http://localhost:3000';
const request = supertest(app);

// describe('Route integration', () => {
//   describe('Post api/uri', function() {
//     it('responds with 200 status and json content', function(done) {
//       request
//         .post('/api/uri')
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect(200, done);
//     });
//   });
// })

it('Testing to see if Jest works', () => {
  expect(1).toBe(1);
})

describe('Route integration', () => {
  describe('Post api/uri status test', function() {
    it('responds with 200 status and json content', async function() {
      const response = await request.post('/api/uri')
      expect(response.status).toBe(200);
    });
  });

})


