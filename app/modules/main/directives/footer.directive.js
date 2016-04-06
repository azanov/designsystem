;(function () {
  'use strict'

  angular.module('app').directive('pbDsFooter', function () {
    return {
      restrict: 'A',
      templateUrl: 'modules/main/templates/footer.html',
      controller: 'FooterController as footer',
      bindToController: true
    }
  })
})()
