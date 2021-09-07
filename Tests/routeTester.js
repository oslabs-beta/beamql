//install SuperTest

import router from ('/server/router.js');



describe('GET /tableData', function() {
    it('responds with json', function(done) {
      request(app)
        .get('/tableData')
        .auth('username', 'password')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });