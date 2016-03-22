angular.module('movie_list.service', [])
    .factory('MovieListFty', function($http, $q, $stateParams, AppConfig, HttpService) {
        return {
            list: function(page, count, q) {
                var subjects = [];
                var start = (page - 1) * count;
                var deferred = $q.defer();
                HttpService.jsonp(
                    AppConfig.listApiAddress + $stateParams.category, { start: start, count: count, q: $stateParams.q },
                    function(data) {
                        //subjects = data.subjects;
                        deferred.resolve(data);
                    });
                return deferred.promise;
            },

            getAllData: function() {
                var deferred = $q.defer();
                setTimeout(function() {
                    deferred.resolve("返回的数据")
                }, 5000)
                return deferred.promise;
            }
        }
    });
