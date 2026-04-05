/**
 * - &:has(*:focus-visible) {  }
 */
export const has_focus_visible = (...fns: (() => string)[]) => () => `  &:has(*:focus-visible) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
