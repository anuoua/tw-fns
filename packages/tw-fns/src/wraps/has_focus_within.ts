/**
 * - &:has(*:focus-within) {  }
 */
export const has_focus_within = (...fns: (() => string)[]) => () => `  &:has(*:focus-within) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
