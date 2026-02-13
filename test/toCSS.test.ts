import { describe, expect, it } from "vitest";
import { toCSS, merge, createStyle, createVariantStyleFn } from "../src";

describe("toCSS", () => {
  it("should generate CSS from style collection", () => {
    const style1 = createStyle("color", "#fff");
    const style2 = createStyle("background", "#000");

    const collection = merge(style1, style2);
    const css = toCSS(collection, ".my-class");

    expect(css).toContain(".my-class {");
    expect(css).toContain("color: #fff;");
    expect(css).toContain("background: #000;");
  });

  it("should generate CSS with selector", () => {
    const style1 = createStyle("color", "#fff");

    const collection = merge(style1);
    const css = toCSS(collection, ".button");

    expect(css).toContain(".button {");
    expect(css).toContain("color: #fff;");
  });

  it("should generate CSS without selector", () => {
    const style1 = createStyle("color", "#fff");

    const collection = merge(style1);
    const css = toCSS(collection);

    expect(css).not.toContain(".button {");
    expect(css).toContain("color: #fff;");
  });

  it("should handle variant styles", () => {
    const styleFn = createStyle("color", "#fff");
    const hoverFn = (style: any) => ({
      styles: createStyle("color", "#000")(),
      variant: {
        type: "variant" as any,
        value: "hover",
        selector: "&:hover",
      },
    });

    const collection = merge(styleFn, hoverFn as any);
    const css = toCSS(collection, ".button");

    expect(css).toContain(".button {");
    expect(css).toContain("color: #fff;");
    expect(css).toContain(".button:hover {");
    expect(css).toContain("color: #000;");
  });

  it("should handle multiple variants", () => {
    const styleFn = createStyle("color", "#fff");
    const hoverFn = (style: any) => ({
      styles: createStyle("color", "#000")(),
      variant: {
        type: "variant" as any,
        value: "hover",
        selector: "&:hover",
      },
    });
    const focusFn = (style: any) => ({
      styles: createStyle("background", "#333")(),
      variant: {
        type: "variant" as any,
        value: "focus",
        selector: "&:focus",
      },
    });

    const collection = merge(styleFn, hoverFn as any, focusFn as any);
    const css = toCSS(collection, ".button");

    expect(css).toContain(".button {");
    expect(css).toContain(".button:hover {");
    expect(css).toContain(".button:focus {");
  });

  it("should handle multi-value styles", () => {
    const multiStyleFn = () => [
      { property: "padding-left", value: "1rem" },
      { property: "padding-right", value: "1rem" },
    ];

    const collection = merge(multiStyleFn);
    const css = toCSS(collection, ".box");

    expect(css).toContain(".box {");
    expect(css).toContain("padding-left: 1rem;");
    expect(css).toContain("padding-right: 1rem;");
  });
});
