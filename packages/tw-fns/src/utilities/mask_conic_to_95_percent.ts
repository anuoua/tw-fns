/**
 * mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
 *
 * mask-composite: intersect;
 *
 * --tw-mask-conic-stops: from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position);
 *
 * --tw-mask-conic: conic-gradient(var(--tw-mask-conic-stops));
 *
 * --tw-mask-conic-to-position: 95%;
 */
export const mask_conic_to_95_percent = () => `
    mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
    mask-composite: intersect;
    --tw-mask-conic-stops: from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position);
    --tw-mask-conic: conic-gradient(var(--tw-mask-conic-stops));
    --tw-mask-conic-to-position: 95%;
  `;
