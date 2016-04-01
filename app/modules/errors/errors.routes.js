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

    //400
    .state('errors-400-left', {
      url: '/errors/400-left',
      templateUrl: 'modules/errors/templates/errors-400-left.html',
      data: {
        pageTitle: 'Error 400',
        access: 'public',
        bodyClass: 'errors errors-400'
      }
    })
    .state('errors-400-centered', {
      url: '/errors/400-centered',
      templateUrl: 'modules/errors/templates/errors-400-centered.html',
      data: {
        pageTitle: 'Error 400',
        access: 'public',
        bodyClass: 'errors errors-400 errors-centered'
      }
    })

    //401
    .state('errors-401-left', {
      url: '/errors/401-left',
      templateUrl: 'modules/errors/templates/errors-401-left.html',
      data: {
        pageTitle: 'Error 401',
        access: 'public',
        bodyClass: 'errors errors-401'
      }
    })
    .state('errors-401-centered', {
      url: '/errors/401-centered',
      templateUrl: 'modules/errors/templates/errors-401-centered.html',
      data: {
        pageTitle: 'Error 401',
        access: 'public',
        bodyClass: 'errors errors-401 errors-centered'
      }
    })

    //404
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
        pageTitle: 'Error 404',
        access: 'public',
        bodyClass: 'errors errors-404 errors-centered'
      }
    })

    //500
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
    })

    //502
    .state('errors-502-left', {
      url: '/errors/502-left',
      templateUrl: 'modules/errors/templates/errors-502-left.html',
      data: {
        pageTitle: 'Error 502',
        access: 'public',
        bodyClass: 'errors errors-502'
      }
    })
    .state('errors-502-centered', {
      url: '/errors/502-centered',
      templateUrl: 'modules/errors/templates/errors-502-centered.html',
      data: {
        pageTitle: 'Error 502 Centered',
        access: 'public',
        bodyClass: 'errors errors-502 errors-centered'
      }
    })

    //504
    .state('errors-504-left', {
      url: '/errors/504-left',
      templateUrl: 'modules/errors/templates/errors-504-left.html',
      data: {
        pageTitle: 'Error 504',
        access: 'public',
        bodyClass: 'errors errors-504'
      }
    })
    .state('errors-504-centered', {
      url: '/errors/504-centered',
      templateUrl: 'modules/errors/templates/errors-504-centered.html',
      data: {
        pageTitle: 'Error 504 Centered',
        access: 'public',
        bodyClass: 'errors errors-504 errors-centered'
      }
    })

    //Signed Out
    .state('errors-signed-out-left', {
      url: '/errors/signed-out-left',
      templateUrl: 'modules/errors/templates/errors-signed-out-left.html',
      data: {
        pageTitle: 'Error Signed Out',
        access: 'public',
        bodyClass: 'errors errors-signed-out'
      }
    })
    .state('errors-signed-out-centered', {
      url: '/errors/signed-out-centered',
      templateUrl: 'modules/errors/templates/errors-signed-out-centered.html',
      data: {
        pageTitle: 'Error Signed Out Centered',
        access: 'public',
        bodyClass: 'errors errors-signed-out errors-centered'
      }
    })

    //Maintenance
    .state('errors-planned-maintenance-left', {
      url: '/errors/planned-maintenance-left',
      templateUrl: 'modules/errors/templates/errors-planned-maintenance-left.html',
      data: {
        pageTitle: 'Error Planned Maintenance',
        access: 'public',
        bodyClass: 'errors errors-planned-maintenance'
      }
    })
    .state('errors-planned-maintenance-centered', {
      url: '/errors/planned-maintenance-centered',
      templateUrl: 'modules/errors/templates/errors-planned-maintenance-centered.html',
      data: {
        pageTitle: 'Error Planned maintenance Centered',
        access: 'public',
        bodyClass: 'errors errors-planned-maintenance errors-centered'
      }
    })

    .state('errors-unplanned-maintenance-left', {
      url: '/errors/unplanned-maintenance-left',
      templateUrl: 'modules/errors/templates/errors-unplanned-maintenance-left.html',
      data: {
        pageTitle: 'Error Unplanned Maintenance',
        access: 'public',
        bodyClass: 'errors errors-unplanned-maintenance'
      }
    })
    .state('errors-unplanned-maintenance-centered', {
      url: '/errors/unplanned-maintenance-centered',
      templateUrl: 'modules/errors/templates/errors-unplanned-maintenance-centered.html',
      data: {
        pageTitle: 'Error Unplanned maintenance Centered',
        access: 'public',
        bodyClass: 'errors errors-unplanned-maintenance errors-centered'
      }
    });



  });

})();
