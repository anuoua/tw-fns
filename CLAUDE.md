# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**jstw** is a native CSS runtime library that provides a Tailwind-like API but generates native CSS output instead of class names. It's written in TypeScript and designed for dynamic, runtime style generation in JavaScript applications.

## Commands

### Build and Development
- `pnpm run dev` - Watch mode for development (uses tsdown)
- `pnpm run build` - Build the project
- `pnpm test` - Run tests with vitest

## Architecture

### Core Design

The library separates style declaration from output conversion:

1. **JstwBuilder** ([`src/core/JstwBuilder.ts`](src/core/JstwBuilder.ts)) - Core builder that manages style declarations using a fluent, chainable API. It maintains internal state with style rules (base, media queries, container queries, pseudo-classes) and uses a variant stack to track responsive states.

2. **Converters** ([`src/converters/`](src/converters/)) - Transform the Builder's internal state into various output formats:
   - `toStyle.ts` - Returns React/Vue style objects (camelCase properties)
   - `toCSS.ts` - Returns CSS string with media queries and selectors
   - `toInline.ts` - Returns inline style string

3. **Mappings** ([`mappings/`](mappings/)) - Value mappings for spacing, colors, breakpoints, and typography

4. **Utils** ([`src/utils/`](src/utils/)) - Utilities including `merge()` for combining multiple style builders with conditional logic support

### Key Data Structures

```typescript
type StyleSheet = {
  baseStyles: StyleRule[]
  mediaQueries: MediaQueryRule[]
  containerQueries: ContainerQueryRule[]
  pseudoClasses: PseudoClassRule[]
}
```

### API Design Principles

- **Standard properties**: Use underscore-connected property access (e.g., `p_4`, `bg_blue_500`)
- **Arbitrary values**: Use function calls (e.g., `p('14px')`, `w('300px')`)
- **Variants**: Use getter properties (e.g., `sm`, `md`, `hover`, `focus`)
- **Negative values**: Prefix with `_` (e.g., `_m_4` for negative margin)
- **Container queries**: Use `at()` to enter container query mode, `container()` to declare containers

### Build Tool

Uses **tsdown** as the build tool with ES modules (`"type": "module"` in package.json). The main entry point exports to `./dist/index.mjs`.

### Language Notes

The codebase contains Chinese comments and documentation. The design document ([`design/design.md`](design/design.md)) is in Chinese and provides comprehensive API documentation and architecture details.
