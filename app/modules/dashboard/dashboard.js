/* jshint strict:false */

  var pbDashboard = angular.module('pb.dashboard', [
    'ui.router'
  ])

  .config(['$stateProvider',function($stateProvider){
    $stateProvider.state('dashboard', {
      url: '/dashboard',
      templateUrl: 'modules/dashboard/templates/dashboard.html',
      controller: 'DashboardCtrl as db',
      resolve: {
        translate: function($translatePartialLoader){
          $translatePartialLoader.addPart('/modules/dashboard/i18n');
        },
        people: function(people){
          return people.get();
        }
      },
      data: {
        pageTitle: 'Dashboard',
        access: 'private'
      }
    });
  }]);