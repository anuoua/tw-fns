/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-sky-600);
 */
export const divide_sky_600 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-sky-600);
    `;
