export const aria_hidden = (...fns: (() => string)[]) => () => `&[aria-hidden="true"] {
${fns.map((fn) => fn()).join("\n")}
}`;
