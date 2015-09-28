(function() {

  'use strict';

  angular.module('pb.ds.splitview').controller('SplitviewController', function($log) {

    var _this = this;

    _this.leftnav =  [{
       "label": "Foundations",
       "value": "",
       "toggle": "dropdown",
       "children": [{
         "label": "Color",
         "value": "foundation.color"
       }, {
         "label": "Typography",
         "value": "foundation.typography"
       }, {
         "label": "Grid",
         "value": "foundation.grid"
       }, {
         "label": "Writing",
         "value": "foundation.writing.page"
       }, {
         "label": "Iconography",
         "value": "foundation.iconography"
       }, {
         "label": "Helpers",
         "value": "helpers"
       }]
     }, {
       "label": "Elements",
       "value": "",
       "toggle": "dropdown",
       "children": [{
         "label": "UI Controls",
         "value": "elements.uicontrols"
       }, {
         "label": "Buttons",
         "value": "elements.buttons"
       }, {
         "label": "Containers",
         "value": "elements.containers.page"
       }, {
         "label": "Modals & Popovers",
         "value": "elements.popovers",
         "className": "popovers"
       }, {
         "label": "User Feedback",
         "value": "feedback.page"
       }, {
         "label": "Tables",
         "value": "tables.datatable.page"
       }, {
         "label": "Charts",
         "value": "graphs.page"
       }]
     }, {
       "label": "Patterns",
       "value": "",
       "toggle": "dropdown",
       "children": [{
         "label": "Headers & Footers",
         "value": "patterns.headersfooters"
       }, {
         "label": "Sign In & Sign Up",
         "value": "patterns.signinup"
       }, {
         "label": "Dashboards",
         "value": "patterns.dashboards"
       }, {
         "label": "Split Views",
         "value": "patterns.splitview"
       }, {
         "label": "Getting Started",
         "value": "patterns.gettingstarted"
       }, {
         "label": "Welcome",
         "value": "patterns.welcome"
       }, {
         "label": "Page Errors",
         "value": "patterns.errorpages"
       }, {
         "label": "Form Samples",
         "value": "patterns.forms"
       }]
     }]


  });

})();
