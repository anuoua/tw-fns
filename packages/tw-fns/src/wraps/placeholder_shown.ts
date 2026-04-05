/**
 * - &:placeholder-shown {  }
 */
export const placeholder_shown = (...fns: (() => string)[]) => () => `  &:placeholder-shown {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
