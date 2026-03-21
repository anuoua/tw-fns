export const backdrop = (...fns: (() => string)[]) => () => `&::backdrop {
${fns.map((fn) => fn()).join("\n")}
}`;
