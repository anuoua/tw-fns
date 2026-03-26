export const has_checked = (...fns: (() => string)[]) => () => `&:has(*:checked) {
${fns.map((fn) => fn()).join("\n")}
}`;
