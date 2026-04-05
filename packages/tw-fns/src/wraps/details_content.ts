/**
 * - &::details-content {  }
 */
export const details_content = (...fns: (() => string)[]) => () => `  &::details-content {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
