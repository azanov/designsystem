(function () {
  'use strict';

  angular.module('pb.ds.elements').controller('PanelsController', function ($log, $scope, $timeout, PeopleResolve, MillerResolve, cfpLoadingBar) {
    var _this = this;

    _this.people = PeopleResolve;

    _this.millercolumn = {
      data: MillerResolve,
      level1: [],
      level2: []
    };

    _this.getSublevel1 = function (item, index) {
      cfpLoadingBar.start();
      _this.millercolumn.level1 = [];
      _this.millercolumn.level2 = [];

      // simulate reomte data
      $timeout(function () {
        _this.millercolumn.level1 = item.versionInfos;
        _this.millercolumn.dataSelected = index;
        _this.millercolumn.level1Selected = null;
        cfpLoadingBar.complete();
      }, 750);

      // $log.debug(item);
    };

    _this.getSublevel2 = function (index) {
      _this.millercolumn.level2 = _this.millercolumn.level1[index].versionInfos;
      _this.millercolumn.level1Selected = index;
    };

    // draggable options
    _this.draggable = {
      connectWith: '.column',
      handle: '.panel-heading',
      cursor: 'move',
      placeholder: 'placeholder',
      forcePlaceholderSize: true,
      opacity: 0.4
    };
  });
})();
