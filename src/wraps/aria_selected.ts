export const aria_selected = (...fns: (() => string)[]) => () => `&[aria-selected="true"] {
${fns.map((fn) => fn()).join("\n")}
}`;
