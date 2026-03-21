/**
 * --tw-text-shadow-color: oklch(26.2% 0.051 172.552);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-emerald-950) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_emerald_950 = () => `
    --tw-text-shadow-color: oklch(26.2% 0.051 172.552);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-emerald-950) var(--tw-text-shadow-alpha), transparent);
    `;
