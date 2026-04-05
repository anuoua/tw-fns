/**
 * - grid-column: span ${arbitrary} / span <value>;
 */
export const col_span_ = (arbitrary: string) => () => `  grid-column: span ${arbitrary} / span <value>;`;
