/**
 * - @media not (prefers-reduced-motion: reduce) {  }
 */
export const not_motion_reduce = (...fns: (() => string)[]) => () => `  @media not (prefers-reduced-motion: reduce) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
