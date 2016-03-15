(function() {

  'use strict';

  angular.module('pb.ds.errors').config(function($stateProvider) {
    $stateProvider.state('errors', {
      url: '/errors',
      templateUrl: 'modules/errors/templates/errors-template.html',
      controller: 'ErrorsController as errors',
      abstract: true,
      data: {
        pageTitle: 'Landing Pages',
        access: 'public',
        bodyClass: 'errors'
      }
    })
    .state('errors-404-left', {
      url: '/errors/404-left',
      templateUrl: 'modules/errors/templates/errors-404-left.html',
      data: {
        pageTitle: 'Error 404',
        access: 'public',
        bodyClass: 'errors errors-404'
      }
    })
    .state('errors-404-centered', {
      url: '/errors/404-centered',
      templateUrl: 'modules/errors/templates/errors-404-centered.html',
      data: {
        pageTitle: 'Error 404 Centered',
        access: 'public',
        bodyClass: 'errors errors-404 errors-centered'
      }
    })
    .state('errors-404-centered-search', {
      url: '/errors/404-centered-search',
      templateUrl: 'modules/errors/templates/errors-404-centered-search.html',
      data: {
        pageTitle: 'Error 404 Centered with Search',
        access: 'public',
        bodyClass: 'errors errors-404 errors-centered errors-search'
      }
    })
    .state('errors-500-left', {
      url: '/errors/500-left',
      templateUrl: 'modules/errors/templates/errors-500-left.html',
      data: {
        pageTitle: 'Error 500',
        access: 'public',
        bodyClass: 'errors errors-500'
      }
    })
    .state('errors-500-centered', {
      url: '/errors/500-centered',
      templateUrl: 'modules/errors/templates/errors-500-centered.html',
      data: {
        pageTitle: 'Error 500 Centered',
        access: 'public',
        bodyClass: 'errors errors-500 errors-centered'
      }
    });



  });

})();
