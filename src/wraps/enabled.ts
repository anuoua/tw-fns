export const enabled = (...fns: (() => string)[]) => () => `&:enabled {
${fns.map((fn) => fn()).join("\n")}
}`;
