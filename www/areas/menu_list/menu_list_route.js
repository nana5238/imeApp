'use strict';
angular.module('menu_list.route', ['menu_list.controller', 'menu_list.service'])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('menu_list', {
            url: '/menu/:cid/:page:q',
            templateUrl: 'areas/menu_list/menu_list.html',
            controller: 'MenuListCtrl'
        })
});
