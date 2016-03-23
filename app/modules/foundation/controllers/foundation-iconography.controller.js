(function() {

  'use strict';

  angular.module('pb.ds.foundation').controller('IconographyController', function($log, IconsResolve) {

    var _this = this;

    _this.faIcons = IconsResolve;

    _this.pbIcons =  [
      'addressbook',
      'addtocatalog',
      'addtofolder',
      'catalog',
      'connection',
      'databaseconnection',
      'filesystemconnection',
      'folder',
      'labellayer',
      'layer',
      'line',
      'map',
      'metadata',
      'metadatatemplate',
      'newcatalog',
      'newconnection',
      'newfolder',
      'newlayer',
      'newmap',
      'newtable',
      'newtile',
      'point',
      'polygon',
      'scale',
      'table',
      'tile',
      'treeview',
      'admin'
    ];

    _this.ncIcons = [
      'arrows-1_cloud-upload-96',
      'arrows-2_square-upload',
      'arrows-2_square-download',
      'ui-1_bell-53',
      'tech_print-round',
      'ui-2_alert-circle',
      'ui-1_bold-add',
      'ui-1_bold-delete',
      'ui-1_bold-remove',
      'shopping_cart',
      'ui-1_pencil',
      'ui-1_settings-gear-64'
    ];

  });

})();
