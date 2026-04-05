/**
 * - filter: brightness(${arbitrary});
 */
export const brightness_ = (arbitrary: string) => () => `  filter: brightness(${arbitrary});`;
