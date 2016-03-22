angular.module('menu_list.service', [])
    .factory('MenuListFty', function($http, $q, $stateParams, AppConfig, HttpService) {
        return {
            list: function(cid, page, count, q) {
                //var subjects = [];
                var start = (page - 1) * count;
                var deferred = $q.defer();
                HttpService.jsonp(
                    AppConfig.menulistApiAddress, { cid: cid, start: start, count: count, q: $stateParams.q },
                    function(data) {
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
