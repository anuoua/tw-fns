export function twfns(...fns: (() => string)[]) {
  return fns.map((fn) => fn()).join("\n");
}
