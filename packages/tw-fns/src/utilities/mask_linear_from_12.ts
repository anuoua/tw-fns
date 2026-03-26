/**
 * mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
 *
 * mask-composite: intersect;
 *
 * --tw-mask-linear-stops: var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position);
 *
 * --tw-mask-linear: linear-gradient(var(--tw-mask-linear-stops));
 *
 * --tw-mask-linear-from-position: calc(var(--spacing) * 12);
 */
export const mask_linear_from_12 = () => `
    mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
    mask-composite: intersect;
    --tw-mask-linear-stops: var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position);
    --tw-mask-linear: linear-gradient(var(--tw-mask-linear-stops));
    --tw-mask-linear-from-position: calc(var(--spacing) * 12);
  `;
