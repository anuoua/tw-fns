/**
 * - &:nth-last-child(${arbitrary}) {  }
 */
export const nth_last = (arbitrary: string, ...fns: (() => string)[]) => () => `  &:nth-last-child(${arbitrary}) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
