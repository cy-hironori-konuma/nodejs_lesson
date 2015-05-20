var validation = require('./lib/validation');

var url = 'http://www.yahoo.co.jp/';
//var url = 'hogehoge';

if (validation.isUrl(url)) {
	console.log(url + 'は有効なURLです。');
} else {
	console.log(url + 'はURLではありません。');
}
