/**
 * - @media not (forced-colors: active) {  }
 */
export const not_forced_colors = (...fns: (() => string)[]) => () => `  @media not (forced-colors: active) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
