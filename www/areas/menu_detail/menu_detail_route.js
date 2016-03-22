'use strict';
angular.module('menu_detail.route', ['menu_list.controller'])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('menu_detail', {
            url: '/menudetail/:cid/:id',
            templateUrl: 'areas/menu_detail/menu_detail.html',
            controller: 'MenuListCtrl1'
        })
});
