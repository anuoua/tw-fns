import { createResponsiveVariant } from "../core/variants";
import { defaultTheme } from "../theme";

const sm = createResponsiveVariant(defaultTheme.breakpoints.sm);
const md = createResponsiveVariant(defaultTheme.breakpoints.md);
const lg = createResponsiveVariant(defaultTheme.breakpoints.lg);
const xl = createResponsiveVariant(defaultTheme.breakpoints.xl);
const xxl = createResponsiveVariant(defaultTheme.breakpoints.xxl);

export { sm, md, lg, xl, xxl };
