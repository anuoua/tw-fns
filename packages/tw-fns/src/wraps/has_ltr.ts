/**
 * - &:has(*:where(:dir(ltr), [dir="ltr"], [dir="ltr"] *)) {  }
 */
export const has_ltr = (...fns: (() => string)[]) => () => `  &:has(*:where(:dir(ltr), [dir="ltr"], [dir="ltr"] *)) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
