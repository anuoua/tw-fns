/**
 * - @media not (orientation: landscape) {  }
 */
export const not_landscape = (...fns: (() => string)[]) => () => `  @media not (orientation: landscape) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
