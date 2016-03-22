/*
 * @Author: wsj11
 * @Date:   2016-02-23 21:35:40
 * @Last Modified by:   wsj11
 * @Last Modified time: 2016-03-06 20:02:24
 */

'use strict';

angular.module('movie.controller', ['movie.service'])

.controller('MovieCtrl', function($scope, $window, $state) {
    getHeaderSlideData();
    $scope.$on('$ionicView.afterEnter', function(e) {
        initHeaderSlide();
    });

    function getHeaderSlideData() {
        $scope.headerSlideData = [{
            alt: "双十一预热主场会",
            src: "img/movie/home-headerSlide-1.jpg"
        }, {
            alt: "11月11天家电低价不停歇",
            src: "img/movie/home-headerSlide-2.jpg"
        }, {
            alt: "家具盛典 好货提前抢",
            src: "img/movie/home-headerSlide-3.jpg"
        }, {
            alt: "IT抢券节",
            src: "img/movie/home-headerSlide-4.jpg"
        }, {
            alt: "潮流数码 双11爽购攻略",
            src: "img/movie/home-headerSlide-5.jpg"
        }];
    }

    // 初始化头部swiper滚动条的方法
    function initHeaderSlide() {
        var headerSwiper = new Swiper('#headerSlider', {
            slidesPerView: 1, // 在slider的前后各添加一张相同的slider
            paginationClickable: true, // 分页器是否可以点击
            centeredSlides: true,
            autoplay: 2000, // 多少毫秒切换页面
            autoplayDisableOnInteraction: false,
            loop: true,
            // 如果需要分页器
            pagination: '.swiper-pagination',
            // 改变自动更新
            observer: true, // 当我们修改swiper的时候，他会自动重新实例化switer
            observeParents: true
        });
    }

    $scope.input = '';
    $scope.search = function() {

        $state.go('movie_list', { category: 'search', q: $scope.input });


    }
})
