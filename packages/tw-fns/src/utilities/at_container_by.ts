/**
 * - container-type: inline-size;
 * - container-name: ${name};
 */
export const at_container_by = (name: string) => () => `  container-type: inline-size;
  container-name: ${name};`;
