
angular.module('tab.route', ['tab.controllers'])
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'areas/tab/tab.html',
    controller: 'TabCtrl'
  })


});
