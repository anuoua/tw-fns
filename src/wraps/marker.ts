export const marker = (...fns: (() => string)[]) => () => `& *::marker, &::marker, & *::-webkit-details-marker, &::-webkit-details-marker {
${fns.map((fn) => fn()).join("\n")}
}`;
