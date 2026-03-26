export const selection = (...fns: (() => string)[]) => () => `& *::selection, &::selection {
${fns.map((fn) => fn()).join("\n")}
}`;
