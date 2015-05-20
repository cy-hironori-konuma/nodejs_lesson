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
