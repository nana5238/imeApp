/*
 * @Author: wsj11
 * @Date:   2016-02-23 21:35:20
 * @Last Modified by:   wsj11
 * @Last Modified time: 2016-03-07 15:25:13
 */

'use strict';
angular.module('menu.route', ['menu.controller', 'menu.service'])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('tab.menu', {
            url: '/menu',
            views: {
                'tab-menu': {
                    templateUrl: 'areas/menu/menu.html',
                    controller: 'MenuCtrl'
                }
            }
        })

});
