//require SuperTest
const request = require('supertest');
const express = require('express');
//const app = require('../../server/server.js');

const server = 'http://localhost:3000';
import router from ('./server/router.js');


// describe('Route integration', () => {
//   describe('POST /uri', function() => {
//     it('responds with 200 status and json content type', function(done) {
//       return request(server)
//         .post('/api/uri')
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect(200, done);
//     });
//   });
// })

describe('Route integration', () => {
  describe('POST /uri', function() => {
    it('responds with 200 status and json content type', function(done) {
      return request(server)
        .post('/api/uri')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });
});


