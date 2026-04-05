/**
 * - &[aria-${arbitrary}] {  }
 */
export const aria = (arbitrary: string, ...fns: (() => string)[]) => () => `  &[aria-${arbitrary}] {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
