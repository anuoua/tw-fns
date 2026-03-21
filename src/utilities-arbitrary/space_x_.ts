export const space_x_ = (arbitrary: string) => () => `& > :not(:last-child) {
  --tw-space-x-reverse: 0;
  margin-inline-start: calc(${arbitrary} * var(--tw-space-x-reverse));
  margin-inline-end: calc(<value> * calc(1 - var(--tw-space-x-reverse)));
};`;
