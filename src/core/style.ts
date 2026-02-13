import type { StyleRule, MultiStyleRule, StyleFn } from "./types";

export function createStyle(property: string, value: string): StyleFn {
  return () => ({ property, value });
}

export function createMultiStyle(rules: MultiStyleRule): StyleFn {
  return () => rules;
}

export function createStyleWithValue(
  property: string,
): (value: string) => StyleFn {
  return (value: string) => createStyle(property, value);
}

export function createMappedStyle(
  property: string,
  key: string,
  mapping: Record<string, string>,
): StyleFn {
  const value = mapping[key] || key;
  return createStyle(property, value);
}
