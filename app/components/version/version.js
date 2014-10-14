'use strict';

angular.module('busitrendClient.version', [
  'busitrendClient.version.interpolate-filter',
  'busitrendClient.version.version-directive'
])

.value('version', '0.1');
