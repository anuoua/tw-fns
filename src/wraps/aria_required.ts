export const aria_required = (...fns: (() => string)[]) => () => `&[aria-required="true"] {
${fns.map((fn) => fn()).join("\n")}
}`;
