/**
 * - &:has(*:read-only) {  }
 */
export const has_read_only = (...fns: (() => string)[]) => () => `  &:has(*:read-only) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
