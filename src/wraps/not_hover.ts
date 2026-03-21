export const not_hover = (...fns: (() => string)[]) => () => `&:not(*:hover), @media not (hover: hover) {
${fns.map((fn) => fn()).join("\n")}
}`;
