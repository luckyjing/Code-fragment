/**
 * Created by LuckyJing on 2015/10/9 0009.
 * 这个文件会第一个被requireJS加载，相当于main函数
 */
requirejs.config({
    //By default load any module IDs from script/public
    baseUrl: 'script/widget',
    //except, if the module ID starts with "app",
    //load it from the script/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".script" extension since
    //the paths config could be for a directory.
    paths: {
        //相对于baseUrl
        jquery:'http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min',
        common:'../public/',
        "uikit":'../public/uikit.min'
    },
    config:{
        "uikit":{
            "base":'script/widget'
        }
    },
    shim:{
        //'name':['jquery']
    }

});

// Start the main app logic.
requirejs(['jquery','common/math','uikit','login','jsonp'],
    function($,math,UI,login,jp) {
       login();
        //这里的函数参数是模块返回值的引用，无论值是什么
    });