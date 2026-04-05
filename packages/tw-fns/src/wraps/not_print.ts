/**
 * - @media not print {  }
 */
export const not_print = (...fns: (() => string)[]) => () => `  @media not print {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
