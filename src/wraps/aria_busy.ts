export const aria_busy = (...fns: (() => string)[]) => () => `&[aria-busy="true"] {
${fns.map((fn) => fn()).join("\n")}
}`;
