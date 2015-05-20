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