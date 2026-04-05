/**
 * - &:has(*:placeholder-shown) {  }
 */
export const has_placeholder_shown = (...fns: (() => string)[]) => () => `  &:has(*:placeholder-shown) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
