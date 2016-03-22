/*
 * @Author: wsj11
 * @Date:   2016-02-23 21:35:40
 * @Last Modified by:   wsj11
 * @Last Modified time: 2016-02-29 18:56:59
 */

'use strict';
angular.module('movie_list.controller', ['movie_list.service'])
    .controller('MovieListCtrl', function($scope, $window, MovieListFty, $stateParams, $ionicLoading, $ionicHistory) {

        $scope.$on('$ionicView.beforeEnter', function(e) {
            $scope.list();
        });
        $scope.subjects = [];
        $scope.pms_isMoreItemsAvailable = true;
        /*var page = $stateParams.page;*/
        // console.log(page);


        // 刷新获取最新的数据
        $scope.list = function() {
            $scope.pageNum = $stateParams.page;
            console.log($scope.pageNum);
            var message = JSON.stringify($scope.pageNum)
            var promise = MovieListFty.list(message);
            promise.then(
                function(result) {
                    if (result != null) {
                        $scope.subjects = result;
                        $scope.pms_isMoreItemsAvailable = true;
                    } else {
                        $scope.pms_isMoreItemsAvailable = false;
                    }
                }
            ).finally(function() {
                // 停止广播ion-refresher
                $scope.$broadcast('scroll.refreshComplete');
            });
        };

        // 获取更多数据列表
        // $scope.morelist = function() {
        //     $ionicLoading.show({
        //         template: "正在载入数据，请稍后..."
        //     });

        //     $scope.pageNum = $stateParams.page + 1;
        //     var message = JSON.stringify($scope.pageNum);

        //     var promise = MovieListFty.morelist(message);
        //     promise.then(
        //         function(result) {

        //             if ($scope.pageNum == 4) {
        //                 $scope.pms_isMoreItemsAvailable = false;
        //             }

        //             if (result != null) {
        //                 $.each(result, function(i, item) {
        //                     $scope.subjects.push(item);
        //                 });
        //             } else {
        //                 $scope.pms_isMoreItemsAvailable = false;
        //             }
        //         },
        //         function(reason) {
        //             alert(reason);
        //         }
        //     ).finally(function() {
        //         $scope.$broadcast('scroll.infiniteScrollComplete');
        //         setTimeout(function() {
        //             $ionicLoading.hide();
        //         }, 1000)
        //     });
        // }



        // 返回前一个页面
        $scope.goBack = function() {
            $ionicHistory.goBack();
        }


    })
