(function () {
  'use strict';

  angular.module('app')
    .directive('pbModalDraggable', ['$document',
      function ($document) {
        return {
          restrict: 'EA',
          link: function postLink (scope, element, attrs) {
            element.addClass('draggable');

            var $content = element.find('.modal-content');
            // var defaultOffset = {};
            // var offsetX = 0;
            // var offsetY = 0;
            var mouseXdelta = 0;
            var mouseYdelta = 0;

            $document.on('mousedown', function (event) {
              var offset = $content.offset();

              // var offsetX = offset.left;
              // var offsetY = offset.top;

              mouseYdelta = event.pageY - offset.top;
              mouseXdelta = event.pageX - offset.left;

              $document.on('mousemove', mousemove);
              $document.on('mouseup', mouseup);
            });

            function mousemove (event) {
              $content.offset({
                top: event.pageY - mouseYdelta,
                left: event.pageX - mouseXdelta
              });
            }

            function mouseup () {
              $document.off('mousemove', mousemove);
              $document.off('mouseup', mouseup);
            }

            element.on('shown.bs.modal', function (e) {
              // defaultOffset = $content.offset();
            });

            element.on('hidden.bs.modal', function (e) {
              $content.removeAttr('style');
            });
          }
        };
      }
    ]);
})();
