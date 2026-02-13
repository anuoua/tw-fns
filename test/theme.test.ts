import { describe, expect, it } from "vitest";
import { generateThemeCSS, defaultTheme } from "../src";

describe("theme", () => {
  describe("generateThemeCSS", () => {
    it("should generate CSS variables for colors", () => {
      const css = generateThemeCSS();

      expect(css).toContain("--color-white: #ffffff");
      expect(css).toContain("--color-blue-500: #3b82f6");
      expect(css).toContain("--color-blue-600: #2563eb");
      expect(css).toContain("--color-gray-500: #6b7280");
      expect(css).toContain("--color-gray-900: #111827");
    });

    it("should generate CSS variables for spacing", () => {
      const css = generateThemeCSS();

      expect(css).toContain("--spacing-0: 0px");
      expect(css).toContain("--spacing-1: 0.25rem");
      expect(css).toContain("--spacing-4: 1rem");
      expect(css).toContain("--spacing-6: 1.5rem");
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
      expect(defaultTheme.colors.blue[500]).toBe("#3b82f6");
    });

    it("should have spacing", () => {
      expect(defaultTheme.spacing).toBeDefined();
      expect(defaultTheme.spacing[4]).toBe("1rem");
      expect(defaultTheme.spacing[6]).toBe("1.5rem");
    });

    it("should have breakpoints", () => {
      expect(defaultTheme.breakpoints).toBeDefined();
      expect(defaultTheme.breakpoints.sm).toBe("640px");
      expect(defaultTheme.breakpoints.md).toBe("768px");
      expect(defaultTheme.breakpoints.lg).toBe("1024px");
    });

    it("should have borderRadius", () => {
      expect(defaultTheme.borderRadius).toBeDefined();
      expect(defaultTheme.borderRadius.md).toBe("0.375rem");
      expect(defaultTheme.borderRadius.lg).toBe("0.5rem");
    });

    it("should have boxShadow", () => {
      expect(defaultTheme.boxShadow).toBeDefined();
      expect(defaultTheme.boxShadow.sm).toContain(
        "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      );
    });

    it("should have transition", () => {
      expect(defaultTheme.transition).toBeDefined();
      expect(defaultTheme.transition.all).toBe("all 0.15s ease-in-out");
    });

    it("should have animation", () => {
      expect(defaultTheme.animation).toBeDefined();
      expect(defaultTheme.animation.spin).toBe("spin 1s linear infinite");
      expect(defaultTheme.animation.pulse).toBe(
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
