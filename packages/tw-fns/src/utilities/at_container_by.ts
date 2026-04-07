/**
 * - container-type: inline-size;
 * - container-name: ${name};
 */
export const at_container = (name: string) => () => `  container-type: inline-size;
  container-name: ${name};`;
