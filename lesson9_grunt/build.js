(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function() {
	return 'hello world!';
};

},{}],2:[function(require,module,exports){
module.exports = require('./lib');
},{"./lib":3}],3:[function(require,module,exports){
/**
 * URLかどうか判定
 * @param  {string}  url 入力文字列
 * @return {Boolean}     true: URL, false: URLでない
 */
var isUrl = function(url) {
	var regExp = /(http|https):\/\//;
	return regExp.test(url);
};

module.exports = {
	isUrl: isUrl
};
},{}],4:[function(require,module,exports){
var validation = require('./lib/validation');
var print = require('./lib/print.js');

var url = 'http://www.yahoo.co.jp/';
var url = 'hogehoge';

/*
if (validation.isUrl(url)) {
	location.href = url;
} else {
	alert(url + 'はURLではありません。');
}
*/
if (validation.isUrl(url)) {
	location.href = url + print();
} else {
	alert(url + print() + 'はURLではありません。');
}

},{"./lib/print.js":1,"./lib/validation":2}]},{},[4]);
