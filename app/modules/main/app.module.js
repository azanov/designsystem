(function() {

  'use strict';

  angular.module('app', [

    //third party modules are in /core/core.module.js
    'pb.core',
    'pb.ds.home',
    'pb.ds.elements',
    'pb.ds.forms',
    'pb.ds.foundation',
    'pb.ds.globalization',
    'pb.ds.graphs',
    'pb.ds.helpers',
    'pb.ds.mobile',
    'pb.ds.landing',
    'pb.ds.feedback',
    'pb.ds.patterns',
    'pb.ds.principles',
    'pb.ds.resources',
    'pb.ds.tables',
    'pb.ds.writing',
    'pb.ds.splitview',
    'pb.ds.help',
    'pb.ds.hamburger',
    'pb.ds.content',
    'pb.ds.errors'
  ]);

  //angular scroll configuration
  angular.module('app').value('duScrollDuration', 750);
  angular.module('app').value('duScrollOffset', 125);
  angular.module('app').value('duScrollGreedy', true);


  //configure debugging
  angular.module('app').config(function($logProvider, config) {
    $logProvider.debugEnabled(config.debug);
  });

  //configure production mode
  angular.module('app').config(function($compileProvider, config) {
    $compileProvider.debugInfoEnabled(config.debug);
  });

  //ui-bootstrap tooltip
  angular.module('app').config(function($uibTooltipProvider) {
    $uibTooltipProvider.options({
      appendToBody: true
    });
  });

  angular.module('app')
    .config(function(cfpLoadingBarProvider) {
      cfpLoadingBarProvider.spinnerTemplate = '<div id="loading-bar-spinner"><i class="nc-icon-mini loader_circle-04 spin lg"></i></div>';
    });

  // UI ROUTER CONFIG
  angular.module('app').config(function($stateProvider) {
    $stateProvider.state('weblanding', {
        url: '/web',
        templateUrl: 'modules/main/templates/web.html',
        controller: 'SectionLandingController as SLC',
        resolve: {
          NavigationResolve: function($log, MockDataFactory) {
            return MockDataFactory.query({
              filename: 'navigation'
            });
          }
        },
        data: {
          pageTitle: 'Web',
          access: 'public',
          bodyClass: 'web sectionlanding'
        }
      })
      .state('mobilelanding', {
        url: '/mobile',
        templateUrl: 'modules/main/templates/mobile.html',
        controller: 'SectionLandingController as SLC',
        resolve: {
          NavigationResolve: function($log, MockDataFactory) {
            return MockDataFactory.query({
              filename: 'navigation'
            });
          }
        },
        data: {
          pageTitle: 'Mobile',
          access: 'public',
          bodyClass: 'mobile sectionlanding'
        }
      })
      .state('otherwise', {
        url: '*path',
        template: '',
        controller: function($state) {
          $state.go('home');
        }
      });
  });

  // highlight.js configuration
  angular.module('app').config(function(hljsServiceProvider) {
    hljsServiceProvider.setOptions({
      languages: ['html', 'css', 'js', 'xml', 'json']
    });
  });


  // TRANSLATE CONFIG
  angular.module('app').config(function($translateProvider, $translatePartialLoaderProvider) {

    $translateProvider.useLoaderCache(true);

    $translateProvider.useLoader('$translatePartialLoader', {
      urlTemplate: '{part}/{lang}.json'
    });

    //additional parts loaded in module controllers
    //$translatePartialLoaderProvider.addPart('modules/i18n');

    $translateProvider.preferredLanguage('en-us');
    $translateProvider.fallbackLanguage('en-us');
    $translateProvider.useLocalStorage();

    $translateProvider.useSanitizeValueStrategy('escapeParameters');
  });

  // DYNAMIC LOCALE CONFIG
  angular.module('app').config(function(tmhDynamicLocaleProvider) {
    tmhDynamicLocaleProvider.useCookieStorage('NG_TRANSLATE_LANG_KEY');

    //gulp copies the i18n locale files from bower_components to modules/i18n
    tmhDynamicLocaleProvider.localeLocationPattern('modules/i18n/angular-i18n/angular-locale_{{locale}}.js');

  });




  angular.module('app').run(function($log, $rootScope, $translate, $document, $timeout, $location, $state) {


    //refresh as parts are added in controllers
    $rootScope.$on('$translatePartialLoaderStructureChanged', function() {
      $translate.refresh();
    });

    //LOCATION CHANGE START
    $rootScope.$on('$locationChangeStart', function(event, newUrl) {

      if ($location.$$hash) {
        //$log.debug('LOCATION CHANGE START WITH $$hash', $location);
        hashScroll($location.$$hash);
      }

    });



    // $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
    //   $log.debug(
    //     'To State:', toState,
    //     'From state:', fromState
    //   );
    //
    //   if (!toState || !toState.data) {
    //     return;
    //   }
    //
    // });


    //STATE CHANGE ERROR
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
      $log.debug('$stateChangeError: ', error);
    });


    //STATE NOT FOUND
    $rootScope.$on('$stateNotFound', function(unfoundState) {
      $log.debug('$stateNotFound: ', unfoundState);
    });


    //ROUTE CHANGE SUCCESS
    $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {

    });


    //ROUTE CHANGE START
    $rootScope.$on('$routeChangeStart', function(newRoute, oldRoute) {

    });


    //STATE CHANGE SUCCESS
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {

    });


    //VIEW CONTENT LOADING
    $rootScope.$on('$viewContentLoading', function(event) {
      $document.duScrollTo(0, 0);
    });


    //VIEW CONTENT LOADED
    $rootScope.$on('$viewContentLoaded', function(event) {

      //convert urlencoded #
      $location.url($location.url().replace('%23', '#'));

      if ($location.$$hash) {
        //$log.debug('VIEW CONTENT LOADED WITH $$hash', $location);
        hashScroll($location.$$hash, true);
      }

    });


    //handle scrolling to updated hash
    //@param timeout : boolean, if true use timeout for view animation delay
    function hashScroll(hash, timeout) {
      timeout = timeout || false;
      $log.debug(timeout);

      if (hash) {
        var element = angular.element(document.getElementById(hash));

        if (element.length > 0) {

          if (timeout) {
            $timeout(function() {
              $document.duScrollToElementAnimated(element);
            }, 300);
          } else {
            $document.duScrollToElementAnimated(element);
          }

        }

      }

    }


  });


})();
