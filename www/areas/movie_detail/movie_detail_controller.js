/*
 * @Author: wsj11
 * @Date:   2016-02-23 21:35:40
 * @Last Modified by:   wsj11
 * @Last Modified time: 2016-03-08 18:55:14
 */

'use strict';
angular.module('movie_detail.controller', [])
    .controller('MovieDetailCtrl', function($scope, $stateParams, $ionicLoading, AppConfig, $ionicHistory, HttpService) {
        $scope.movie = {};
        var apiAddress = AppConfig.detailApiAddress + $stateParams.id;
        // 跨域的方式
        HttpService.jsonp(apiAddress, {}, function(data) {
            $scope.movie = data;
            $scope.$apply();
        });

        // 返回前一个页面
        $scope.goBack = function() {
            $ionicHistory.goBack();
        }


    })
