import { describe, expect, it } from "vitest";
import {
  columns_1,
  columns_2,
  columns_3,
  columns_4,
  columns_5,
  columns_12,
  columns_xs3,
  columns_xs,
  columns_sm,
  columns_md,
  columns_lg,
  columns_xl,
  columns_xl2,
  columns_xl3,
  columns_xl4,
  columns_xl5,
  columns_xl6,
  columns_xl7,
  columns_auto,
  columns,
  toCSS,
  merge,
  generateThemeCSS,
} from "../src";

describe("columns", () => {
  describe("by number", () => {
    it("should create columns-1", () => {
      expect(columns_1()).toEqual({
        property: "columns",
        value: "1",
      });
    });

    it("should create columns-2", () => {
      expect(columns_2()).toEqual({
        property: "columns",
        value: "2",
      });
    });

    it("should create columns-3", () => {
      expect(columns_3()).toEqual({
        property: "columns",
        value: "3",
      });
    });

    it("should create columns-4", () => {
      expect(columns_4()).toEqual({
        property: "columns",
        value: "4",
      });
    });

    it("should create columns-5", () => {
      expect(columns_5()).toEqual({
        property: "columns",
        value: "5",
      });
    });

    it("should create columns-12", () => {
      expect(columns_12()).toEqual({
        property: "columns",
        value: "12",
      });
    });
  });

  describe("by width", () => {
    it("should create columns-xs3", () => {
      expect(columns_xs3()).toEqual({
        property: "columns",
        value: "var(--container-xs3, 16rem)",
      });
    });

    it("should create columns-xs", () => {
      expect(columns_xs()).toEqual({
        property: "columns",
        value: "var(--container-xs, 20rem)",
      });
    });

    it("should create columns-sm", () => {
      expect(columns_sm()).toEqual({
        property: "columns",
        value: "var(--container-sm, 24rem)",
      });
    });

    it("should create columns-md", () => {
      expect(columns_md()).toEqual({
        property: "columns",
        value: "var(--container-md, 28rem)",
      });
    });

    it("should create columns-lg", () => {
      expect(columns_lg()).toEqual({
        property: "columns",
        value: "var(--container-lg, 32rem)",
      });
    });

    it("should create columns-xl", () => {
      expect(columns_xl()).toEqual({
        property: "columns",
        value: "var(--container-xl, 36rem)",
      });
    });

    it("should create columns-xl2", () => {
      expect(columns_xl2()).toEqual({
        property: "columns",
        value: "var(--container-xl2, 42rem)",
      });
    });

    it("should create columns-xl3", () => {
      expect(columns_xl3()).toEqual({
        property: "columns",
        value: "var(--container-xl3, 48rem)",
      });
    });

    it("should create columns-xl4", () => {
      expect(columns_xl4()).toEqual({
        property: "columns",
        value: "var(--container-xl4, 56rem)",
      });
    });

    it("should create columns-xl5", () => {
      expect(columns_xl5()).toEqual({
        property: "columns",
        value: "var(--container-xl5, 64rem)",
      });
    });

    it("should create columns-xl6", () => {
      expect(columns_xl6()).toEqual({
        property: "columns",
        value: "var(--container-xl6, 72rem)",
      });
    });

    it("should create columns-xl7", () => {
      expect(columns_xl7()).toEqual({
        property: "columns",
        value: "var(--container-xl7, 80rem)",
      });
    });
  });

  describe("auto", () => {
    it("should create columns-auto", () => {
      expect(columns_auto()).toEqual({
        property: "columns",
        value: "auto",
      });
    });
  });

  describe("custom values", () => {
    it("should create custom column number", () => {
      const custom = columns("8");
      expect(custom()).toEqual({
        property: "columns",
        value: "8",
      });
    });

    it("should create custom column width with viewport unit", () => {
      const custom = columns("30vw");
      expect(custom()).toEqual({
        property: "columns",
        value: "30vw",
      });
    });

    it("should create custom column width with rem unit", () => {
      const custom = columns("25rem");
      expect(custom()).toEqual({
        property: "columns",
        value: "25rem",
      });
    });

    it("should create custom column width with CSS variable", () => {
      const custom = columns("var(--my-columns)");
      expect(custom()).toEqual({
        property: "columns",
        value: "var(--my-columns)",
      });
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with column number", () => {
      const css = toCSS(merge(columns_3), ".gallery");
      expect(css).toContain("columns: 3;");
    });

    it("should generate CSS with column width", () => {
      const css = toCSS(merge(columns_md), ".gallery");
      expect(css).toContain("columns: var(--container-md, 28rem);");
    });

    it("should generate CSS with auto", () => {
      const css = toCSS(merge(columns_auto), ".container");
      expect(css).toContain("columns: auto;");
    });

    it("should generate CSS with custom value", () => {
      const css = toCSS(merge(columns("30vw")), ".responsive");
      expect(css).toContain("columns: 30vw;");
    });
  });

  describe("theme", () => {
    it("should include container in theme CSS", () => {
      const css = generateThemeCSS();
      expect(css).toContain("--container-xs3: 16rem;");
      expect(css).toContain("--container-xs2: 18rem;");
      expect(css).toContain("--container-xs: 20rem;");
      expect(css).toContain("--container-sm: 24rem;");
      expect(css).toContain("--container-md: 28rem;");
      expect(css).toContain("--container-lg: 32rem;");
      expect(css).toContain("--container-xl: 36rem;");
      expect(css).toContain("--container-xl2: 42rem;");
      expect(css).toContain("--container-xl3: 48rem;");
      expect(css).toContain("--container-xl4: 56rem;");
      expect(css).toContain("--container-xl5: 64rem;");
      expect(css).toContain("--container-xl6: 72rem;");
      expect(css).toContain("--container-xl7: 80rem;");
    });
  });
});
