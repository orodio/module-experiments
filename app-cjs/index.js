const {
  TAG: RAWR,
  is: isRawr,
  make: makeRawr
} = require("@qvvg/test-tag-rawr");

const {
  TAG: WOOT,
  is: isWoot,
  make: makeWoot
} = require("@qvvg/test-tag-woot");

console.log(WOOT, isWoot, makeWoot);
console.log(RAWR, isRawr, makeRawr);
