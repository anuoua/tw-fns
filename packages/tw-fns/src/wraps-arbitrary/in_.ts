/**
 * - :where(*:${arbitrary}) & {  }
 */
export const in_ = (arbitrary: string, ...fns: (() => string)[]) => () => `  :where(*:${arbitrary}) & {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
