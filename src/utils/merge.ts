import type {
  AnyStyle,
  StyleCollection,
  StyleFn,
  VariantStyleFn,
} from "../core/types";

export function merge(...styles: AnyStyle[]): StyleCollection {
  return styles.filter(Boolean) as StyleFn[];
}
