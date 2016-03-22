/*
 * @Author: wsj11
 * @Date:   2016-02-23 21:35:40
 * @Last Modified by:   wsj11
 * @Last Modified time: 2016-03-21 19:11:15
 */

'use strict';
angular.module('menu_list.controller', ['menu_list.service'])
    .controller('MenuListCtrl', function($scope, $window, MenuListFty, AppConfig, $state, $stateParams, $ionicLoading, $ionicHistory) {

        $scope.subjects = [];
        $scope.name = '';
        $scope.id = $stateParams.id;
        $scope.pms_isMoreItemsAvailable = true;
        var page = $stateParams.page;
        var q = $stateParams.q;
        $scope.cid = $stateParams.cid;
        /*$scope.name = [{
            id: "早餐"
        }, {
            id: "午餐"
        }, {
            id: "晚餐"
        }];*/
        $scope.name = '';
        console.log($stateParams.cid);
        switch ($stateParams.cid) {
            case '37':
                $scope.name = '早餐';
                break;
            case '38':
                $scope.name = '午餐';
                break;
                default:
                    $scope.name = '晚餐';
                break;
        };


        var promise = MenuListFty.list($scope.cid, 5, q);
        promise.then(
            function(result) {
                if (result.result.data === 0) {
                    $scope.pms_isMoreItemsAvailable = false;
                }
                if (result.result.data != null) {
                    $.each(result.result.data, function(i, item) {
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
        });
        // 获取更多数据列表
        $scope.morelist = function() {
            $ionicLoading.show({
                template: "正在载入数据，请稍后..."
            });
            var promise = MenuListFty.list($scope.cid);
            promise.then(
                function(result) {
                    if (result.result.data === 0) {
                        $scope.pms_isMoreItemsAvailable = false;
                    }
                    if (result.result.data != null) {
                        $.each(result.result.data, function(i, item) {
                            $scope.subjects.push(item);
                        });
                    } else {
                        $scope.pms_isMoreItemsAvailable = false;
                    }
                },
                function(reason) {
                    alert(reason);
                }
            ).finally(function() {
                $scope.$broadcast('scroll.infiniteScrollComplete');
                $ionicLoading.hide();
            });
        };
        // 返回前一个页面
        $scope.goBack = function() {
            $ionicHistory.goBack();
        };
        $scope.menudetail = $scope.subjects.find(obj => {
            console.log($scope.subjects.length)
            return obj.id == $scope.id;
        })



    })
    .controller('MenuListCtrl1', function($scope, $window, MenuListFty, AppConfig, $state, $stateParams, $ionicLoading, $ionicHistory) {

        $scope.subjects = [];
        $scope.name = '';
        $scope.id = $stateParams.id;
        $scope.pms_isMoreItemsAvailable = true;
        var page = $stateParams.page;
        var q = $stateParams.q;
        $scope.cid = $stateParams.cid;
        $scope.name = [{
            id: "早餐"
        }, {
            id: "午餐"
        }, {
            id: "晚餐"
        }];

        var promise = MenuListFty.list($scope.cid, 5, q);
        promise.then(
            function(result) {
                if (result.result.data === 0) {
                    $scope.pms_isMoreItemsAvailable = false;
                }
                if (result.result.data != null) {
                    $.each(result.result.data, function(i, item) {
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
            $scope.menudetail = $scope.subjects.find(obj => {
                //console.log($scope.subjects.length)
                return obj.id == $scope.id;
            });
            console.log($scope.menudetail);
            $scope.$broadcast('scroll.infiniteScrollComplete');
            $ionicLoading.hide();
        });
        // 获取更多数据列表
        $scope.morelist = function() {
            $ionicLoading.show({
                template: "正在载入数据，请稍后..."
            });
            var promise = MenuListFty.list($scope.cid);
            promise.then(
                function(result) {
                    if (result.result.data === 0) {
                        $scope.pms_isMoreItemsAvailable = false;
                    }
                    if (result.result.data != null) {
                        $.each(result.result.data, function(i, item) {
                            $scope.subjects.push(item);
                        });
                    } else {
                        $scope.pms_isMoreItemsAvailable = false;
                    }
                },
                function(reason) {
                    alert(reason);
                }
            ).finally(function() {
                $scope.$broadcast('scroll.infiniteScrollComplete');
                $ionicLoading.hide();
            });
        };
        // 返回前一个页面
        $scope.goBack = function() {
            $ionicHistory.goBack();
        };

    })
