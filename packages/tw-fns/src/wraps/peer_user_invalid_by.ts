/**
 * - &:is(:where(.peer):user-invalid ~ *) {  }
 */
export const peer_user_invalid_by = (name: string) => (...fns: (() => string)[]) => () => `  &:is(:where([aria-peer="${name}"]):user-invalid ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
