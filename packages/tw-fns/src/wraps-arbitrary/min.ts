/**
 * - @media (width >= ${arbitrary}) {  }
 */
export const min = (arbitrary: string, ...fns: (() => string)[]) => () => `  @media (width >= ${arbitrary}) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
