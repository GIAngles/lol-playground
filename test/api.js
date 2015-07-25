var supertest = require('supertest');
var api = supertest('http://localhost:8008');

describe('Meta API', function() {

    it('should at least reponse when request the root path', function(done) {
        api.get('/').expect(200, done);
    });

    it('should response OK to health query', function(done) {
        api.get('health')
           .expect('Content-Type', 'text/plain')
           .expect(200, 'ok', done);

    });
});

describe('Heroes API', function() {

    it('should respond with JSON', function(done) {
        api.get('/heroes')
           .set('Accept', 'application/json')
           .expect(200)
           .end(function(err, res) {
               if (err) return done(err);
               done();
           });
    });

});
