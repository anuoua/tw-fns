/**
 * mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
 *
 * mask-composite: intersect;
 *
 * --tw-mask-linear-stops: var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position);
 *
 * --tw-mask-linear: linear-gradient(var(--tw-mask-linear-stops));
 *
 * --tw-mask-linear-from-color: var(--color-red-500);
 */
export const mask_linear_from_red_500 = () => `
    mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
    mask-composite: intersect;
    --tw-mask-linear-stops: var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position);
    --tw-mask-linear: linear-gradient(var(--tw-mask-linear-stops));
    --tw-mask-linear-from-color: var(--color-red-500);
  `;
