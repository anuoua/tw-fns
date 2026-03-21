/**
 * mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
 *
 * mask-composite: intersect;
 *
 * --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
 *
 * --tw-mask-right: linear-gradient(to right, var(--tw-mask-right-from-color) var(--tw-mask-right-from-position), var(--tw-mask-right-to-color) var(--tw-mask-right-to-position));
 *
 * --tw-mask-right-from-color: var(--color-violet-700);
 */
export const mask_r_from_violet_700 = () => `
    mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
    mask-composite: intersect;
    --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
    --tw-mask-right: linear-gradient(to right, var(--tw-mask-right-from-color) var(--tw-mask-right-from-position), var(--tw-mask-right-to-color) var(--tw-mask-right-to-position));
    --tw-mask-right-from-color: var(--color-violet-700);
  `;
