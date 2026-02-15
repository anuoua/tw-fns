import { describe, expect, it } from "vitest";
import {
  font_sans,
  font_serif,
  font_mono,
  text_base,
  text_xl,
  text_2xl,
  font_bold,
  font_normal,
  leading_normal,
  leading_relaxed,
  tracking_normal,
  tracking_wider,
  text_center,
  text_left,
  uppercase,
  capitalize,
  italic,
  not_italic,
  underline,
  no_underline,
  truncate,
  toCSS,
  merge,
} from "../src";

describe("Typography", () => {
  describe("font-family", () => {
    it("should create font_sans", () => {
      expect(font_sans()).toEqual({
        property: "font-family",
        value: "var(--font-sans, ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\")",
      });
    });

    it("should create font_serif", () => {
      expect(font_serif()).toEqual({
        property: "font-family",
        value: "var(--font-serif, ui-serif, Georgia, Cambria, \"Times New Roman\", Times, serif)",
      });
    });

    it("should create font_mono", () => {
      expect(font_mono()).toEqual({
        property: "font-family",
        value: "var(--font-mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace)",
      });
    });
  });

  describe("font-size", () => {
    it("should create text_base", () => {
      const result = text_base();
      expect(result).toEqual([
        { property: "font-size", value: "1rem" },
        { property: "line-height", value: "1.5rem" },
      ]);
    });

    it("should create text_xl", () => {
      const result = text_xl();
      expect(result).toEqual([
        { property: "font-size", value: "1.25rem" },
        { property: "line-height", value: "1.75rem" },
      ]);
    });

    it("should create text_2xl", () => {
      const result = text_2xl();
      expect(result).toEqual([
        { property: "font-size", value: "1.5rem" },
        { property: "line-height", value: "2rem" },
      ]);
    });
  });

  describe("font-weight", () => {
    it("should create font_bold", () => {
      expect(font_bold()).toEqual({
        property: "font-weight",
        value: "700",
      });
    });

    it("should create font_normal", () => {
      expect(font_normal()).toEqual({
        property: "font-weight",
        value: "400",
      });
    });
  });

  describe("line-height", () => {
    it("should create leading_normal", () => {
      expect(leading_normal()).toEqual({
        property: "line-height",
        value: "1.5",
      });
    });

    it("should create leading_relaxed", () => {
      expect(leading_relaxed()).toEqual({
        property: "line-height",
        value: "1.625",
      });
    });
  });

  describe("letter-spacing", () => {
    it("should create tracking_normal", () => {
      expect(tracking_normal()).toEqual({
        property: "letter-spacing",
        value: "0em",
      });
    });

    it("should create tracking_wider", () => {
      expect(tracking_wider()).toEqual({
        property: "letter-spacing",
        value: "0.05em",
      });
    });
  });

  describe("text-align", () => {
    it("should create text_center", () => {
      expect(text_center()).toEqual({
        property: "text-align",
        value: "center",
      });
    });

    it("should create text_left", () => {
      expect(text_left()).toEqual({
        property: "text-align",
        value: "left",
      });
    });
  });

  describe("text-transform", () => {
    it("should create uppercase", () => {
      expect(uppercase()).toEqual({
        property: "text-transform",
        value: "uppercase",
      });
    });

    it("should create capitalize", () => {
      expect(capitalize()).toEqual({
        property: "text-transform",
        value: "capitalize",
      });
    });
  });

  describe("font-style", () => {
    it("should create italic", () => {
      expect(italic()).toEqual({
        property: "font-style",
        value: "italic",
      });
    });

    it("should create not_italic", () => {
      expect(not_italic()).toEqual({
        property: "font-style",
        value: "normal",
      });
    });
  });

  describe("text-decoration", () => {
    it("should create underline", () => {
      expect(underline()).toEqual({
        property: "text-decoration-line",
        value: "underline",
      });
    });

    it("should create no_underline", () => {
      expect(no_underline()).toEqual({
        property: "text-decoration-line",
        value: "none",
      });
    });
  });

  describe("text-overflow", () => {
    it("should create truncate", () => {
      expect(truncate()).toEqual({
        property: "text-overflow",
        value: "ellipsis",
      });
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with text_base", () => {
      const css = toCSS(merge(text_base), ".element");
      expect(css).toContain("font-size: 1rem;");
      expect(css).toContain("line-height: 1.5rem;");
    });

    it("should generate CSS with font_bold", () => {
      const css = toCSS(merge(font_bold), ".element");
      expect(css).toContain("font-weight: 700;");
    });

    it("should generate CSS with text_center", () => {
      const css = toCSS(merge(text_center), ".element");
      expect(css).toContain("text-align: center;");
    });

    it("should generate CSS with uppercase", () => {
      const css = toCSS(merge(uppercase), ".element");
      expect(css).toContain("text-transform: uppercase;");
    });
  });
});
