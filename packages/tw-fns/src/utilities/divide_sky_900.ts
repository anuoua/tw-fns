/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-sky-900);
 */
export const divide_sky_900 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-sky-900);
    `;
