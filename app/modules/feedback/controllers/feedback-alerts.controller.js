(function() {

  'use strict';

  angular.module('pb.ds.feedback').controller('AlertsController', function($log, $modal) {

    var _this = this;

    _this.transitoryAlert = {
      fadeIn: 500,
      fadeOut: 1000,
      delay: 2000,
      message: '<strong>Success!</strong> Data was saved.',
      messageClass: 'text-success'
    };



    _this.modals = {
      simple: function() {
        $modal.open({
          templateUrl: 'modules/feedback/templates/modals/feedback-simple.html',
          controller: 'BootstrapUiSimpleModalController'
        });
      },
      modal: function() {
        $modal.open({
          templateUrl: 'modules/feedback/templates/modals/feedback-modal.html',
          controller: 'BootstrapUiModalController',
          keyboard: false,
          backdrop: 'static'
        });
      },
      prompt: function() {
        $modal.open({
          templateUrl: 'modules/feedback/templates/modals/feedback-prompt.html',
          controller: 'BootstrapUiPromptModalController',
          keyboard: false,
          backdrop: 'static'
        }).result.then(function(fullname) {
          _this.fullname = fullname;
        });
      },
      draggable: function() {
        $modal.open({
          windowTemplateUrl: 'modules/feedback/templates/modals/feedback-draggable-template.html',
          templateUrl: 'modules/feedback/templates/modals/feedback-draggable.html',
          controller: 'BootstrapUiDraggableModalController',
          keyboard: false,
          backdrop: 'static'
        });
      }
    };

  });

})();
