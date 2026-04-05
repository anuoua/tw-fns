/**
 * - mask-image: linear-gradient(to right, black var(--tw-mask-right-from), transparent ${arbitrary}),linear-gradient(to left, black var(--tw-mask-left-from), transparent <value>);
 * - mask-composite: intersect;
 */
export const mask_x_to_ = (arbitrary: string) => () => `  mask-image: linear-gradient(to right, black var(--tw-mask-right-from), transparent ${arbitrary}),linear-gradient(to left, black var(--tw-mask-left-from), transparent <value>);
  mask-composite: intersect;`;
