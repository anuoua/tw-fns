export const aria_checked = (...fns: (() => string)[]) => () => `&[aria-checked="true"] {
${fns.map((fn) => fn()).join("\n")}
}`;
