'use strict';

/**
 * @ngdoc function
 * @name ngApp.directive:ngSetFocus
 * @description Set focus to element when a given expression changes
 * https://github.com/christurnbull/ng-set-focus
 */
 
angular.module('ngSetFocus', [])
  .directive('ngSetFocus', ['$timeout' ,function ($timeout) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        
        var delay= 300;
        
        // set focus on broadcast
        scope.$on(attrs.ngSetFocus, function(e) {
          $timeout(function(){
            element[0].focus();
          }, delay);

        });   
        
        // apply default focus after other events have complete
        $timeout(function(){          
          if(attrs.hasOwnProperty('setFocusDefault')){
            element[0].focus();
          }
        }, delay);
        
        // fix for default focus on iOS. Does not show keyboard
        element.on('touchstart', function(event) {
          element[0].blur();
        });

      }   
    };
  }]);