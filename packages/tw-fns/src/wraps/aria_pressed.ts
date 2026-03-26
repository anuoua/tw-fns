export const aria_pressed = (...fns: (() => string)[]) => () => `&[aria-pressed="true"] {
${fns.map((fn) => fn()).join("\n")}
}`;
