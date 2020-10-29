const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let nameArr = [];

  if ((typeof (members) !== 'object') || (members === null) || (members.length === undefined)) {
    return false;
  }

  members.forEach(item => {
    if (typeof (item) !== 'string') {
      return false;
    }
    for (let i = 0; i < item.length; i++) {
      if (item[i] !== ' ') {
        nameArr.push(item[i].toUpperCase());
        break;
      }
    }
  })

  return nameArr.sort().join('');

}
