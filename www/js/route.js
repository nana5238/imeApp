angular.module('route', [
        'guidepage.route',
        'tab.route',
        'movie.route',
        'movie_list.route',
        'movie_detail.route',
        'menu.route',
        'menu_list.route',
        'menu_detail.route',
        'book.route'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/guidepage');
    });
