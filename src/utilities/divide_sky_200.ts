/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-sky-200);
 */
export const divide_sky_200 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-sky-200);
    `;
