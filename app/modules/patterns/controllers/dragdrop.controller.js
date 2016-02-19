(function() {

  'use strict';

  angular.module('pb.ds.patterns').controller('DragDropController', function($log, $scope) {


    
    $scope.models = {
        selected: null,
        lists: {"A": [], "B": []}
    };

    // Generate initial model
    for (var i = 1; i <= 3; ++i) {
        $scope.models.lists.A.push({label: "Item A" + i});
        $scope.models.lists.B.push({label: "Item B" + i});
    }

  });

})();
