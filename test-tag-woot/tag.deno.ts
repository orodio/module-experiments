import { makeTag } from "https://unpkg.com/@qvvg/test-make-tag@0.0.6/make-tag.deno.ts";
import { isTag } from "https://unpkg.com/@qvvg/test-is-tag@0.0.6/is-tag.deno.ts";

export const TAG = "WOOT";

export function make(obj: object): object {
  return makeTag(TAG, obj);
}

export function is(obj: object): boolean {
  return isTag(TAG, obj);
}
