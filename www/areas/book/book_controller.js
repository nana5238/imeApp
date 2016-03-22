/*
 * @Author: wsj11
 * @Date:   2016-02-23 21:35:40
 * @Last Modified by:   wsj11
 * @Last Modified time: 2016-03-21 17:35:11
 */

'use strict';
angular.module('book.controller', ['book.service'])
    /* .config(function($stateProvider, $urlRouterProvider) {
         $stateProvider
             .state('/:status?', {
                 templateUrl: 'areas/book/book.html',
                 controller: 'BookCtrl'
             })
     })*/

.controller('BookCtrl', function($scope, $stateParams) {

    $scope.text = '';
    $scope.todos = [{
        id: 1,
        text: "学习",
        completed: true
    }, {
        id: 2,
        text: "看小说",
        completed: false
    }, {
        id: 3,
        text: "睡觉",
        completed: true
    }];

    function getId() {
        var id = Math.random();
        for (var i = 0; i < $scope.todos.length; i++) {
            if ($scope.todos[i].id === id) {
                id = getId();
                break;
            }
        }
        return id;
    }


    //添加todo
    $scope.add = function() {
        $scope.todos.push({
            id: getId(),
            text: $scope.text,
            completed: false
        });
        $scope.text = '';
    };

    //处理删除
    $scope.remove = function(id) {
        for (var i = 0; i < $scope.todos.length; i++) {
            if ($scope.todos[i].id === id) {
                $scope.todos.splice(i, 1);
                break;
            }
        }
    }

    //清空所有已经完成的
    $scope.clear = function() {
        var result = [];
        for (var i = 0; i < $scope.todos.length; i++) {
            if (!$scope.todos[i].completed) {
                result.push($scope.todos[i])
            }
        }
        $scope.todos = result;
    };

    //判断当前是否有已经完成的
    $scope.existComplted = function() {
        for (var i = 0; i < $scope.todos.length; i++) {
            if ($scope.todos[i].completed) {
                return true;
            }
        }
        return false;
    };

    //判断当前编辑哪个元素
    $scope.currentEditing = -1;
    $scope.editing = function(id) {
        $scope.currentEditing = id;
    };
    $scope.save = function() {
        $scope.currentEditing = -1;
    };

    //
    var now = true;
    $scope.toggleAll = function() {
        for (var i = 0; i < $scope.todos.length; i++) {
            $scope.todos[i].completed = now;
        }
        now = !now;
    };


    $scope.selector = {};
    var status = $stateParams.status;
    switch (status) {
        case 'active':
            $scope.selector = { completed: false };
            break;
        case 'completed':
            $scope.selector = { completed: true };
            break;
        default:
            $scope.selector = {};
            break;
    }



    /*$scope.equalCompare = function(source,target){
      return source === traget
    }*/










});
