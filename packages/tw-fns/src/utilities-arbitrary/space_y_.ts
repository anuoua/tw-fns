/**
 * - & > :not(:last-child) {
 * -   --tw-space-y-reverse: 0;
 * -   margin-block-start: calc(${arbitrary} * var(--tw-space-y-reverse));
 * -   margin-block-end: calc(<value> * calc(1 - var(--tw-space-y-reverse)));
 * - };
 */
export const space_y_ = (arbitrary: string) => () => `  & > :not(:last-child) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(${arbitrary} * var(--tw-space-y-reverse));
    margin-block-end: calc(<value> * calc(1 - var(--tw-space-y-reverse)));
  };`;
