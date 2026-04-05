/**
 * - mask-image: linear-gradient(to top, black ${arbitrary}, transparent var(--tw-mask-top-to)), linear-gradient(to bottom, black <value>, transparent var(--tw-mask-bottom-to));
 * - mask-composite: intersect;
 */
export const mask_y_from_ = (arbitrary: string) => () => `  mask-image: linear-gradient(to top, black ${arbitrary}, transparent var(--tw-mask-top-to)), linear-gradient(to bottom, black <value>, transparent var(--tw-mask-bottom-to));
  mask-composite: intersect;`;
