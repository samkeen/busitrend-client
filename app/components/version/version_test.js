'use strict';

describe('busitrendClient.version module', function() {
  beforeEach(module('busitrendClient.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
