//require SuperTest
const test = require('supertest');

import router from ('./server/router.js');



describe('POST /tableData', function() {
    it('responds with json', function(done) {
      test(router)
        .post('/tableData')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });