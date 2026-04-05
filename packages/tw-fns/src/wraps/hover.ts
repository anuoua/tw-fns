/**
 * - @media (hover: hover) { &:hover {  }}
 */
export const hover = (...fns: (() => string)[]) => () => `  @media (hover: hover) { &:hover {
  ${fns.map((fn) => fn()).join("\n")}
  }}`;
