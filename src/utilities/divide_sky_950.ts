/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-sky-950);
 */
export const divide_sky_950 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-sky-950);
    `;
