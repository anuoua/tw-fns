/**
 * - &::file-selector-button {  }
 */
export const file = (...fns: (() => string)[]) => () => `  &::file-selector-button {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
