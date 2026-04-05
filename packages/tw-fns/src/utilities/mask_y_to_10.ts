/**
 * - mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
 * - mask-composite: intersect;
 * - --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
 * - --tw-mask-top: linear-gradient(to top, var(--tw-mask-top-from-color) var(--tw-mask-top-from-position), var(--tw-mask-top-to-color) var(--tw-mask-top-to-position));
 * - --tw-mask-top-to-position: calc(var(--spacing) * 10);
 * - --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
 * - --tw-mask-bottom-to-position: calc(var(--spacing) * 10);
 */
export const mask_y_to_10 = () => `  mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
  mask-composite: intersect;
  --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
  --tw-mask-top: linear-gradient(to top, var(--tw-mask-top-from-color) var(--tw-mask-top-from-position), var(--tw-mask-top-to-color) var(--tw-mask-top-to-position));
  --tw-mask-top-to-position: calc(var(--spacing) * 10);
  --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
  --tw-mask-bottom-to-position: calc(var(--spacing) * 10);`;
