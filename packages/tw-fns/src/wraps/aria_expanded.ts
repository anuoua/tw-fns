export const aria_expanded = (...fns: (() => string)[]) => () => `&[aria-expanded="true"] {
${fns.map((fn) => fn()).join("\n")}
}`;
