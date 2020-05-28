import {
  TAG as RAWR,
  is as isRawr,
  make as makeRawr
} from "https://unpkg.com/@qvvg/test-tag-rawr@0.0.3/tag.deno.ts";

import {
  TAG as WOOT,
  is as isWoot,
  make as makeWoot
} from "https://unpkg.com/@qvvg/test-tag-woot@0.0.3/tag.deno.ts";

console.log(WOOT, isWoot, makeWoot);
console.log(RAWR, isRawr, makeRawr);
