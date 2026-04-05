/**
 * - @media (hover: hover) { &:is(:where(.group):hover *) {  }}
 */
export const group_hover = (...fns: (() => string)[]) => () => `  @media (hover: hover) { &:is(:where([aria-group]):hover *) {
  ${fns.map((fn) => fn()).join("\n")}
  }}`;
