/**
 * - &[aria-disabled="true"] {  }
 */
export const aria_disabled = (...fns: (() => string)[]) => () => `  &[aria-disabled="true"] {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
