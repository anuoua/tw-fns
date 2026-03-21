export const defualt_ = (...fns: (() => string)[]) => () => `&:default {
${fns.map((fn) => fn()).join("\n")}
}`;
