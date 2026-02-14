import { createResponsiveVariant } from "../core/variants";
import { defaultTheme } from "../theme";

const sm = createResponsiveVariant(defaultTheme.breakpoints.sm);
const md = createResponsiveVariant(defaultTheme.breakpoints.md);
const lg = createResponsiveVariant(defaultTheme.breakpoints.lg);
const xl = createResponsiveVariant(defaultTheme.breakpoints.xl);
const xl2 = createResponsiveVariant(defaultTheme.breakpoints.xl2);

export { sm, md, lg, xl, xl2 };
