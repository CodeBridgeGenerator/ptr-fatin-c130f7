const assert = require('assert');
const app = require('../../src/app');

describe('\'dashboard1\' service', () => {
  it('registered the service', () => {
    const service = app.service('dashboard1');

    assert.ok(service, 'Registered the service (dashboard1)');
  });
});
