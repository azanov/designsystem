(function() {

  'use strict';

  angular.module('pb.elements').controller('TablesController', function($log, peopleResolve) {

    var _this = this;

    _this.people = peopleResolve;

  });

})();