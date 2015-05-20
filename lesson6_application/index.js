var employee = require('./lib/employee');
var employee2 = require('./lib/employee');

var member1 = new employee();
var member2 = new employee2();

member1.setName('小沼');
member1.setDepartment('ゲーム事業本部 イケメンスタジオ');

member2.setName('fuga');

//member1.member.name = 'fuga';

console.log(member1);
console.log(member1.whoAmI());
console.log(member2.whoAmI());