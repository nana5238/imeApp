/*
 * @Author: wsj11
 * @Date:   2016-02-23 21:35:40
 * @Last Modified by:   wsj11
 * @Last Modified time: 2016-03-06 20:23:17
 */

'use strict';
angular.module('movie_list.controller', ['movie_list.service'])
    .controller('MovieListCtrl', function($scope, $window, MovieListFty, $state, $stateParams, $ionicLoading, $ionicHistory) {

        $scope.subjects = [];
        $scope.title = '';
        $scope.pms_isMoreItemsAvailable = true;
        var page = $stateParams.page;
        var q = $stateParams.q;
        // 获取更多数据列表
        $scope.morelist = function() {
            $ionicLoading.show({
                template: "正在载入数据，请稍后..."
            });
            var promise = MovieListFty.list(parseInt(page), 5, q);
            promise.then(
                function(result) {
                    if (result.subjects.length === 0) {
                        $scope.pms_isMoreItemsAvailable = false;
                    }
                    if (result.subjects != null) {
                        $scope.title = result.title;
                        $.each(result.subjects, function(i, item) {
                            $scope.subjects.push(item);

                        });
                    } else {
                        $scope.pms_isMoreItemsAvailable = false;
                    }
                    page++;
                },
                function(reason) {
                    alert(reason);
                }
            ).finally(function() {
                $scope.$broadcast('scroll.infiniteScrollComplete');
                $ionicLoading.hide();
                // setTimeout(function() {
                //
                // }, 1000)
            });
        };
        // 返回前一个页面
        $scope.goBack = function() {
            $ionicHistory.goBack();
        }



    })
