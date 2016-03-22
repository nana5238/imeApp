'use strict';
angular.module('movie_list.route', ['movie_list.controller', 'movie_list.service'])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('movie_list', {
            url: '/movie/:category/:page:q',
            templateUrl: 'areas/movie_list/movie_list.html',
            controller: 'MovieListCtrl'
        })
});
