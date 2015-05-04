(function() {

  'use strict';

  angular.module('pb.ds.brand').config(function($stateProvider) {
    $stateProvider.state('brand', {
      abstract: true,
      url: '/brand',
      templateUrl: 'modules/brand/templates/brand.html',
      controller: 'BrandController as brand',
      data: {
        pageTitle: 'Brand',
        access: 'public',
        bodyClass: 'brand'
      }
    })

    .state('brand.color', {
      url: '/color',
      templateUrl: 'modules/brand/templates/brand-color.html',
      controller: 'ColorController as color'
    })

    .state('brand.typography', {
      url: '/typography',
      templateUrl: 'modules/brand/templates/brand-typography.html',
      controller: 'TypographyController as type'
    })

    .state('brand.logo', {
      url: '/logo',
      templateUrl: 'modules/brand/templates/brand-logo.html',
      controller: 'LogoController as logo'
    })

    .state('brand.font', {
      url: '/font',
      templateUrl: 'modules/brand/templates/brand-font.html',
      controller: 'FontController as font'
    });

  });

})();