/**
 * - transform: skewX(${arbitrary}) skewY(<value>);
 */
export const skew_ = (arbitrary: string) => () => `  transform: skewX(${arbitrary}) skewY(<value>);`;
