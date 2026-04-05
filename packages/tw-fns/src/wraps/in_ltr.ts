/**
 * - :where(*:where(:dir(ltr), [dir="ltr"], [dir="ltr"] *)) & {  }
 */
export const in_ltr = (...fns: (() => string)[]) => () => `  :where(*:where(:dir(ltr), [dir="ltr"], [dir="ltr"] *)) & {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
