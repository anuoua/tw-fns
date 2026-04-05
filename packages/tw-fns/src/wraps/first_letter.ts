/**
 * - &::first-letter {  }
 */
export const first_letter = (...fns: (() => string)[]) => () => `  &::first-letter {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
