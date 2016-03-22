/*
 * @Author: wsj11
 * @Date:   2016-02-23 21:35:20
 * @Last Modified by:   wsj11
 * @Last Modified time: 2016-03-21 17:20:53
 */

'use strict';
angular.module('book.route', ['book.controller', 'book.service'])

.config(function($stateProvider, $urlRouterProvider) {


    $stateProvider


        .state('tab.book', {
        url: '/book/:status?',
        views: {
            'tab-book': {
                templateUrl: 'areas/book/book.html',
                controller: 'BookCtrl'
            }
        }
    })



});
