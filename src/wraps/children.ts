export const children = (...fns: (() => string)[]) => () => `:is(& > *) {
${fns.map((fn) => fn()).join("\n")}
}`;
