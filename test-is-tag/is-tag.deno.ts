export function isTag(tag: string, obj: { tag?: string }): boolean {
  return obj.tag === tag;
}
