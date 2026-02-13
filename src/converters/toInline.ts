import type {
  StyleCollection,
  StyleFn,
  StyleRule,
  MultiStyleRule,
  VariantStyleFn,
} from "../core/types";

export function toInline(collection: StyleCollection): string {
  const styles: StyleRule[] = [];

  for (const styleFn of collection) {
    const result = styleFn();
    const styleArray = getStyleArray(result);
    styles.push(...styleArray);
  }

  return styles
    .map(({ property, value }) => `${property}: ${value}`)
    .join("; ");
}

function getStyleArray(
  result:
    | StyleRule
    | MultiStyleRule
    | { styles: StyleRule | MultiStyleRule; variant?: any },
): StyleRule[] {
  if (typeof result === "object" && "styles" in result) {
    const styles = (result as { styles: StyleRule | MultiStyleRule }).styles;
    return Array.isArray(styles) ? styles : [styles];
  }
  return Array.isArray(result) ? result : [result];
}
