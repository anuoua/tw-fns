/**
 * mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
 *
 * mask-composite: intersect;
 *
 * --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
 *
 * --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
 *
 * --tw-mask-bottom-to-color: var(--color-indigo-950);
 */
export const mask_b_to_indigo_950 = () => `
    mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
    mask-composite: intersect;
    --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
    --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
    --tw-mask-bottom-to-color: var(--color-indigo-950);
  `;
