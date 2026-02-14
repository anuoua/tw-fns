import { describe, expect, it } from "vitest";
import { generateThemeCSS, defaultTheme } from "../src";

describe("theme", () => {
  describe("generateThemeCSS", () => {
    it("should generate CSS variables for colors", () => {
      const css = generateThemeCSS();

      expect(css).toContain("--color-white: #fff");
      expect(css).toContain("--color-blue-500: oklch(62.3% 0.214 259.815)");
      expect(css).toContain("--color-blue-600: oklch(54.6% 0.245 262.881)");
      expect(css).toContain("--color-gray-500: oklch(55.1% 0.027 264.364)");
      expect(css).toContain("--color-gray-900: oklch(21% 0.034 264.665)");
    });

    it("should generate CSS variables for spacing", () => {
      const css = generateThemeCSS();

      expect(css).toContain("--spacing: 0.25rem");
    });

    it("should wrap in :root by default", () => {
      const css = generateThemeCSS();

      expect(css).toMatch(/^:root \{/);
      expect(css).toMatch(/\}$/);
    });

    it("should use custom selector", () => {
      const css = generateThemeCSS(":root[data-theme='dark']");

      expect(css).toMatch(/^:root\[data-theme='dark'\] \{/);
      expect(css).toMatch(/\}$/);
    });
  });

  describe("defaultTheme", () => {
    it("should have colors", () => {
      expect(defaultTheme.colors).toBeDefined();
      expect(defaultTheme.colors.blue).toBeDefined();
      expect(defaultTheme.colors.blue[500]).toBe("oklch(62.3% 0.214 259.815)");
    });

    it("should have spacing", () => {
      expect(defaultTheme.spacing).toBeDefined();
      expect(defaultTheme.spacing).toBe("0.25rem");
    });

    it("should have breakpoints", () => {
      expect(defaultTheme.breakpoints).toBeDefined();
      expect(defaultTheme.breakpoints.sm).toBe("40rem");
      expect(defaultTheme.breakpoints.md).toBe("48rem");
      expect(defaultTheme.breakpoints.lg).toBe("64rem");
    });

    it("should have radius", () => {
      expect(defaultTheme.radius).toBeDefined();
      expect(defaultTheme.radius.md).toBe("0.375rem");
      expect(defaultTheme.radius.lg).toBe("0.5rem");
    });

    it("should have shadow", () => {
      expect(defaultTheme.shadow).toBeDefined();
      expect(defaultTheme.shadow.sm).toContain(
        "0 1px 3px 0 rgb(0 0 0 / 0.1)",
      );
    });

    it("should have animate", () => {
      expect(defaultTheme.animate).toBeDefined();
      expect(defaultTheme.animate.spin).toBe("spin 1s linear infinite");
      expect(defaultTheme.animate.pulse).toBe(
        "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      );
    });

    it("should have keyframes", () => {
      expect(defaultTheme.keyframes).toBeDefined();
      expect(defaultTheme.keyframes.spin).toBeDefined();
      expect(defaultTheme.keyframes.spin.from).toBeDefined();
      expect(defaultTheme.keyframes.spin.to).toBeDefined();
    });
  });
});
