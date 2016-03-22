/*
 * @Author: wsj11
 * @Date:   2016-02-23 21:35:40
 * @Last Modified by:   wsj11
 * @Last Modified time: 2016-03-16 18:09:32
 */

'use strict';
angular.module('menu.controller', [])

.controller('MenuCtrl', function($scope) {
    $scope.menu = [{
        cid: 37,
        img: 'img/menu/nav5.png',
        name: '早餐'
    }, {
        cid: 38,
        img: 'img/menu/nav6.png',
        name: '午餐'
    }, {
        cid: 39,
        img: 'img/menu/nav7.png',
        name: '晚餐'
    }];

    getHeaderSlideData();
    $scope.$on('$ionicView.afterEnter', function(e) {
        initHeaderSlide();
    });

    function getHeaderSlideData() {
        $scope.headerSlideData = [{
            alt: "双十一预热主场会",
            src: "img/menu/home-headerSlide-1.jpg"
        }, {
            alt: "11月11天家电低价不停歇",
            src: "img/menu/home-headerSlide-2.jpg"
        }, {
            alt: "家具盛典 好货提前抢",
            src: "img/menu/home-headerSlide-3.jpg"
        }, {
            alt: "IT抢券节",
            src: "img/menu/home-headerSlide-4.jpg"
        }, {
            alt: "潮流数码 双11爽购攻略",
            src: "img/menu/home-headerSlide-5.jpg"
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
});
