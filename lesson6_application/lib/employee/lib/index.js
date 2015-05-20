function employee() {
}

var member = {
	name: '',
	department: ''
};

employee.prototype.member = member;

/**
 * 名前をセットする関数
 * @param {string} name 名前
 */
employee.prototype.setName = function(name) {
	member.name = name;
};

/**
 * 部署をセットする関数
 * @param {string} department 部署
 */
employee.prototype.setDepartment = function(department) {
	member.department = department;
};

/**
 * どこの部署の誰だか返す
 * @return {string} 部署の誰です。
 */
employee.prototype.whoAmI = function() {
	if (member.name == '' || member.department == '') {
		return false;
	}
	return member.department + 'の' + member.name + 'です。';
}

function _hoge() {
	console.log('hoge');
}

module.exports = employee;