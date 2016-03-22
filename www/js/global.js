/*
 * @Author: wsj11
 * @Date:   2016-02-23 21:37:41
 * @Last Modified by:   wsj11
 * @Last Modified time: 2016-03-08 19:06:04
 */

'use strict';

angular.module('global', [])
    .constant('AppConfig', {
        pageSize: 5,
        listApiAddress: 'http://api.douban.com/v2/movie/',
        detailApiAddress: 'http://api.douban.com/v2/movie/subject/',
        menulistApiAddress: 'http://apis.juhe.cn/cook/index?key=1761902211c46351a107da5e0f5d47f2'
    })
