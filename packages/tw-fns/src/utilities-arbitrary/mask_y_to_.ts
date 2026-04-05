/**
 * - mask-image: linear-gradient(to top, black var(--tw-mask-top-from), transparent ${arbitrary}),linear-gradient(to bottom, black var(--tw-mask-bottom-from), transparent <value>);
 * - mask-composite: intersect;
 */
export const mask_y_to_ = (arbitrary: string) => () => `  mask-image: linear-gradient(to top, black var(--tw-mask-top-from), transparent ${arbitrary}),linear-gradient(to bottom, black var(--tw-mask-bottom-from), transparent <value>);
  mask-composite: intersect;`;
