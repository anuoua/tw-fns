/**
 * - container-type: normal;
 * - container-name: ${name};
 */
export const at_container_normal = (name: string) => () => `  container-type: normal;
  container-name: ${name};`;
