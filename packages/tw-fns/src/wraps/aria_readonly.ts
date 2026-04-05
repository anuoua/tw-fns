/**
 * - &[aria-readonly="true"] {  }
 */
export const aria_readonly = (...fns: (() => string)[]) => () => `  &[aria-readonly="true"] {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
