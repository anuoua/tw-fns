/**
 * - &:is(:where(.peer):user-invalid ~ *) {  }
 */
export const peer_user_invalid = (...fns: (() => string)[]) => () => `  &:is(:where([aria-peer]):user-invalid ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
