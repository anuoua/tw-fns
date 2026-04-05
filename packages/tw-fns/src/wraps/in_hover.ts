/**
 * - @media (hover: hover) { :where(*:hover) & {  }}
 */
export const in_hover = (...fns: (() => string)[]) => () => `  @media (hover: hover) { :where(*:hover) & {
  ${fns.map((fn) => fn()).join("\n")}
  }}`;
