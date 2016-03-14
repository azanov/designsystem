(function() {

  'use strict';

  angular.module('pb.ds.patterns').controller('IsotopeController', function($log, MockData, $window, $scope) {

    var _this = this;

    _this.data = MockData;

    _this.openItem = function(data) {
      $window.open(data.url, '_blank');
    };


  });

})();
