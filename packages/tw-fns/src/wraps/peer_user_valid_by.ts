/**
 * - &:is(:where(.peer):user-valid ~ *) {  }
 */
export const peer_user_valid_by = (name: string, ...fns: (() => string)[]) => () => `  &:is(:where([aria-peer="${name}"]):user-valid ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
