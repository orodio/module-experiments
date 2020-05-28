import { makeTag } from "https://unpkg.com/@qvvg/test-make-tag@0.0.6/make-tag.esm.js";
import { isTag } from "https://unpkg.com/@qvvg/test-is-tag@0.0.6/is-tag.esm.js";

export const TAG = "WOOT";

export function make(obj) {
  return makeTag(TAG, obj);
}

export function is(obj) {
  return isTag(TAG, obj);
}
