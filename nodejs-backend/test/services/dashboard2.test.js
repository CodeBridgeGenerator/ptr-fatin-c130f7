const assert = require('assert');
const app = require('../../src/app');

describe('\'dashboard2\' service', () => {
  it('registered the service', () => {
    const service = app.service('dashboard2');

    assert.ok(service, 'Registered the service (dashboard2)');
  });
});
