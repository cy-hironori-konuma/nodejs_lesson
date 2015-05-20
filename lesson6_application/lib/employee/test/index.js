/**
 * 従業員を管理するモジュール
 */

var assert = require('assert');
var employee = require('../index.js');

// テスト開始
assert(employee, 'employeeの読み込みに失敗しました。');

assert(employee.prototype.setName, 'employee.setNameメソッドが存在しません。');
assert(employee.prototype.setName instanceof Function, 'employee.setNameは関数であるべきです。');

assert(employee.prototype.setDepartment, 'employee.setDepartmentメソッドが存在しません。');
assert(employee.prototype.setDepartment instanceof Function, 'employee.setDepartmentは関数であるべきです。');

assert(employee.prototype.whoAmI, 'employee.whoAmIメソッドが存在しません。');
assert(employee.prototype.whoAmI instanceof Function, 'employee.whoAmIは関数であるべきです。');

var member = new employee;
member.setName('小沼 寛哲');
member.setDepartment('イケメンスタジオ');

assert.equal(member.whoAmI(), 'イケメンスタジオの小沼 寛哲です。', 'whoAmIの戻り値がおかしなことになってます。');

console.log('全てのテストをパスしました。');