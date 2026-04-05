/**
 * - @media (prefers-contrast: less) {  }
 */
export const contrast_less = (...fns: (() => string)[]) => () => `  @media (prefers-contrast: less) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
