/**
 * - @media not (inverted-colors: inverted) {  }
 */
export const not_inverted_colors = (...fns: (() => string)[]) => () => `  @media not (inverted-colors: inverted) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
