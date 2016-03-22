/*
* @Author: wsj11
* @Date:   2016-02-23 21:35:20
* @Last Modified by:   wsj11
* @Last Modified time: 2016-02-23 22:45:24
*/

'use strict';
angular.module('guidepage.route', ['guidepage.controller', 'guidepage.service'])

.config(function($stateProvider, $urlRouterProvider) {


  $stateProvider
  .state('guidepage', {
    url: '/guidepage',
    templateUrl: 'areas/guidepage/guidepage.html',
    controller: 'GuidePageCtrl'
  })


});
