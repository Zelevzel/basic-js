const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {

  if ((typeof (sampleActivity) !== 'string')) {
    return false;
  }

  if (isNaN(parseInt(sampleActivity))) {
    return false;
  }

  if ((sampleActivity <= 0) || (sampleActivity > 15)) {
    return false;
  }

  return Math.ceil(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD);

};
