const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  let flag = false,
    resArr = [];

  for (let i = 0; i < arr.length; i++) {



    switch (arr[i]) {

      case '--double-next': {
        if (flag === false) {
          resArr.push(arr[i + 1]);
          flag = true;
        } else {
          flag = false;
        }
        break;
      }

      case '--double-prev': {
        if (flag === false) {
          resArr.push(arr[i - 1]);
          flag = true;
        } else {
          flag = false;
        }
        break;
      }

      case '--discard-next': {
        i++;
        flag = true;

        break;
      }

      case '--discard-prev': {
        if (flag === false) {
          resArr.pop();
          flag = true;
        } else {
          flag = false;
        }
        break;
      }

      case 'undefined': {
        break;
      }


      default: {
        resArr.push(arr[i]);
        flag = false;
      }
    }
  }
  return resArr;
}




// const doubleNext = '--double-next',
//   doublePrev = '--double-prev',
//   discardNext = '--discard-next',
//   discardPrev = '--discard-prev',
//   resArr = [];
// let flag = true;

// if (Object.prototype.toString.call(arr) != 'object Array') throw new Error('Error')
// if (arr.length === undefined) throw new Error('Error')

// for (let i = 0; i < arr.length; i++) {

//   if (typeof arr[i] === 'number') {
//     resArr.push(arr[i]);
//     flag = false;
//   }


//   if (arr[i] === doubleNext) {
//     if (flag === false) {
//       resArr.push(arr[i + 1]);
//       flag = true;
//     } else {
//       flag = false;
//     }

//   }

//   if (arr[i] === doublePrev) {

//     `      if (flag === false) {
//         resArr.push(arr[i - 1]);
//         flag = true;
//       } else {
//         flag = false;
//       }`
//   }

//   if (arr[i] === discardNext) {
//     i++;
//     flag = true;
//   }

//   if (arr[i] === discardPrev) {
//     if (flag === false) {
//       resArr.pop();
//       flag = true;
//     } else {
//       flag = false;
//     }
//   }
// }

