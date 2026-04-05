/**
 * - &:where(:dir(ltr), [dir="ltr"], [dir="ltr"] *) {  }
 */
export const ltr = (...fns: (() => string)[]) => () => `  &:where(:dir(ltr), [dir="ltr"], [dir="ltr"] *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
