export function makeTag(tag: string, obj: { tag?: string }): object {
  obj.tag = tag;
  return obj;
}
