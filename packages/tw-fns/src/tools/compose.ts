export function compose(...fns: (() => string)[]) {
  return fns.map((fn) => fn()).join("\n");
}
