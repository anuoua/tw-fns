/**
 * - filter: invert(${arbitrary});
 */
export const invert_ = (arbitrary: string) => () => `  filter: invert(${arbitrary});`;
