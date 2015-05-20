var validation = require('./lib/validation');

//var url = 'http://www.yahoo.co.jp/';
var url = 'hogehoge';

if (validation.isUrl(url)) {
	location.href = url;
} else {
	alert(url + 'はURLではありません。');
}