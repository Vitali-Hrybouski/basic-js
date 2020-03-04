const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let t = false;
  if (typeof sampleActivity === "string") {
    let x = parseFloat(sampleActivity);
    if (typeof x === "number" && x <= 15 && x > 0) {
      t = Math.ceil(Math.log(MODERN_ACTIVITY / x) * HALF_LIFE_PERIOD / 0.693);
    }
  }
  return t;
};
