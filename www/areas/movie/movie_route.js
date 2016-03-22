'use strict';
angular.module('movie.route', ['movie.controller', 'movie.service'])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('tab.movie', {
            url: '/movie',
            views: {
                'tab-movie': {
                    templateUrl: 'areas/movie/movie.html',
                    controller: 'MovieCtrl'
                }
            }
        })



});
