/**
 * Created by Administrator on 2015/10/11 0011.
 */
define(['jquery'], function ($) {
    var Data = (function ($) {
        if (!$) {
            throw new Error("Function 'getData' needs jQuery, if you don't want to use $.ajax, please change the init function");
        }
        var G = {};
        G.dataSource = [];
        //数据载入后要执行的函数暂存在这里
        G.dataReadyFunc = [];
        //检查数据源是否全部载入完毕
        G.isReady = function () {
            var isReady = true,
                _length = G.dataSource.length,
                _data = G.dataSource;
            for (var index = 0; index < _length; index++) {
                var element = _data[index];
                if (element.ready !== true) {
                    isReady = false;
                }
            }
            return isReady;
        };

        //数据源全部加载完毕，则运行dataReadyFunc中存放的函数
        G.callReady = function () {
            if (true === this.isReady()) {
                for (var key in this.dataReadyFunc) {
                    this.dataReadyFunc[key]();
                }
            }
        };

        //供外部调用，会将外部输入的函数暂存在dataReadyFunc中
        G.dataReady = function (func) {
            if (typeof func !== 'function') {
                return false;
            }
            this.dataReadyFunc.push(func);
        };

        G.init = function () {
            var _initElement = function (raw, obj) {
                var request = $.ajax(obj);
                if (raw.hasOwnProperty('done')) {
                    flag = true;
                    raw.ready = true;
                    request.done(raw.done);
                }
                if (raw.hasOwnProperty('fail')) {
                    request.fail(raw.fail);
                }
                if (raw.hasOwnProperty('always')) {
                    request.always(raw.always);
                }
            };
            var _length = G.dataSource.length;
            var flag = false;
            for (var i = 0; i < _length; i++) {
                var tmp = {},
                    raw = G.dataSource[i];
                for (var attr in raw) {
                    if (typeof raw[attr] !== 'function') {
                        tmp[attr] = raw[attr];
                    }
                }
                _initElement(G.dataSource[i], tmp);
            }
            var test = setInterval(function () {
                if (flag) {
                    G.callReady();
                    clearInterval(test);
                }
            }, 200);
        };
        return {
            //获得数据源，传入的参数为JavaScript对象，对每一个成员进行ajax绑定
            get: function (options, callback) {
                if (typeof callback === 'function') {
                    G.dataReady(callback);
                }
                var _length = options.length;
                var _data = G.dataSource;
                for (var i = 0; i < _length; i++) {
                    _data.push(options[i]);
                }
                G.init();
            },
            out: function () {
                var arr = G.dataSource,
                    _length = G.dataSource.length;
                for (var i = 0; i < _length; i++) {
                    console.log(arr[i]);
                }
            }
        };
    })(window.jQuery || {});
    return Data;
});