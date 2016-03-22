angular.module('movie_list.service', [])
    .factory('MovieListFty', function($http, $q, $stateParams, AppConfig, HttpService) {
        return {
            list: function(message) {
                var subjects = [];
                var pageNum = $stateParams.page;
                var count = 10;
                var start = (pageNum - 1) * count;
                var deferred = $q.defer();
                HttpService.jsonp(
                    AppConfig.listApiAddress + $stateParams.category, { start: start, count: count },
                    function(data) {
                        subjects = data.subjects;
                        deferred.resolve(subjects);
                    });
                return deferred.promise;
            },
            morelist: function(message) {
                var subjects = [];
                var deferred = $q.defer();
                HttpService.jsonp(
                    AppConfig.listApiAddress + $stateParams.category, {},
                    function(data) {
                        subjects = data.subjects;
                        deferred.resolve(subjects);
                    });
                return deferred.promise;
            },
            getAllData: function() {
                var deferred = $q.defer();

                setTimeout(function() {
                    deferred.resolve("返回的数据")
                    console.log("5");
                }, 5000)

                ////$http的get请求方式
                //$http.get('localhost:8080').success(function(data,status,headers,config){
                //    deferred.resolve(data);
                //}).error(function(data,status,headers,config){
                //    deferred.reject(data);
                //})

                return deferred.promise;
            }

        }
    });
