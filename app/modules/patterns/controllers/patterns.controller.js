(function() {

  'use strict';

  angular.module('pb.ds.patterns').controller('PatternsController', function($log) {

    var _this = this;

    _this.year = new Date().getFullYear();

    _this.userInitials = 'RH';

    _this.offline = true;

    _this.chatOfflineMessage = 'Our hours of operation are from 8am to 8pm Eastern Standard Time.  If you\'d like to chat with us, please try during that time.';
    _this.phoneOfflineMessage = 'Our hours of operation are from 8am to 8pm Eastern Standard Time.  If you\'d like to call us, please try during that time.';

    _this.hideMethods = true;

    _this.userDisplay = 'image';

  });

})();
