/**
 * - @media (hover: hover) { &:is(:where(.group):hover *) {  }}
 */
export const group_hover_by = (name: string) => (...fns: (() => string)[]) => () => `  @media (hover: hover) { &:is(:where([aria-group="${name}"]):hover *) {
  ${fns.map((fn) => fn()).join("\n")}
  }}`;
