'use strict';
angular.module('movie_detail.route', ['movie_detail.controller'])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('movie_detail', {
            url: '/detail/:id',
            templateUrl: 'areas/movie_detail/movie_detail.html',
            controller: 'MovieDetailCtrl'
        })
});
