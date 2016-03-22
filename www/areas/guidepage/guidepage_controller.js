/*
* @Author: wsj11
* @Date:   2016-02-23 21:35:40
* @Last Modified by:   wsj11
* @Last Modified time: 2016-02-27 16:54:26
*/

'use strict';
angular.module('guidepage.controller', [])

.controller('GuidePageCtrl', function($scope,$state) {
   var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
  });
   $scope.func_goHome = function(){
      $state.go('tab.movie');
   }
});
