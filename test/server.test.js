// test/server.test.js
const exec = require('mz/child_process').exec;
const request = require('supertest');
const expect = require('chai').expect;

const app = require('../server/app');

describe('builds application', function () {
  it('builds to "build" directory', function () {
    // Disable mocha time-out because this takes a lot of time
    this.timeout(0);

    // Run process
    return exec('yarn build');
  });
});

describe('express serving', function () {
  it('responds to / with the index.html', function () {
    return request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200)
      .then(res => expect(res.text).to.contain('<div id="root">'));
  });
});
