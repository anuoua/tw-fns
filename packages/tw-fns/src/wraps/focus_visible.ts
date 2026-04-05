/**
 * - &:focus-visible {  }
 */
export const focus_visible = (...fns: (() => string)[]) => () => `  &:focus-visible {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
