export const nth_last_of_type = (arbitrary: string, ...fns: (() => string)[]) => () => `&:nth-last-of-type(${arbitrary}) {
${fns.map((fn) => fn()).join("\n")}
}`;
