/**
 * 第一引数で指定したディレクトリ内のファイルの内、
 * 第二引数で指定された拡張子のファイルの一覧を出力
 */

// モジュールを読み込む
var myModuleFn = require('./myModule.js');

// 引数を代入
var dir = process.argv[2];
var ext = process.argv[3];

// フィルタリングされたファイルの一覧をcallbackで取得
myModuleFn(dir, ext, function (err, fileList) {
	if (err) {
		return console.error('There was an error:', err);
	}

	for (var i = 0; i < fileList.length; i++) {
		console.log(fileList[i]);
	}
});
