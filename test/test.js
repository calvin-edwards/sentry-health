var expect  = require('chai').expect;
var request = require('request');

describe('Sentry Health', function() {
    describe ('Home page', function() {
        it('welcome message', function(done){
            request('http://localhost:8080/', function(error, response, body) {
                var obj = { simpleget: "Hello, Sentry Health!" };
                expect(JSON.parse(body).simpleget).to.equal(obj.simpleget);
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });

    describe ('Number Parameter', function() {
        it('bound-low', function(done){
            request('http://localhost:8080/-1', function(error, response, body) {
                var obj = { paramtest: "too small" };
                expect(JSON.parse(body).paramtest).to.equal(obj.paramtest);
                expect(response.statusCode).to.equal(400);
                done();
            });
        });

        it('in-bounds', function(done) {
            request('http://localhost:8080/3' , function(error, response, body) {
                var obj = { paramtest: "just right" };
                expect(JSON.parse(body).paramtest).to.equal(obj.paramtest);
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

    });
});