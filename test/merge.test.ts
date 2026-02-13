import { describe, expect, it } from "vitest";
import { merge, createStyle } from "../src";
import type { StyleCollection, AnyStyle } from "../src/core/types";

describe("merge", () => {
  it("should merge multiple styles", () => {
    const style1 = createStyle("color", "#fff");
    const style2 = createStyle("background", "#000");
    const style3 = createStyle("padding", "1rem");

    const collection = merge(style1, style2, style3);
    const result = collection.map((fn) => fn());

    expect(result).toHaveLength(3);
    expect(result[0]).toEqual({ property: "color", value: "#fff" });
    expect(result[1]).toEqual({ property: "background", value: "#000" });
    expect(result[2]).toEqual({ property: "padding", value: "1rem" });
  });

  it("should filter null values", () => {
    const style1 = createStyle("color", "#fff");
    const style2 = null;
    const style3 = createStyle("padding", "1rem");

    const collection = merge(style1, style2, style3);

    expect(collection).toHaveLength(2);
  });

  it("should filter undefined values", () => {
    const style1 = createStyle("color", "#fff");
    const style2 = undefined;
    const style3 = createStyle("padding", "1rem");

    const collection = merge(style1, style2, style3);

    expect(collection).toHaveLength(2);
  });

  it("should filter false values", () => {
    const style1 = createStyle("color", "#fff");
    const style2 = false;
    const style3 = createStyle("padding", "1rem");

    const collection = merge(style1, style2, style3);

    expect(collection).toHaveLength(2);
  });

  it("should filter zero values", () => {
    const style1 = createStyle("color", "#fff");
    const style2 = 0 as unknown as AnyStyle;
    const style3 = createStyle("padding", "1rem");

    const collection = merge(style1, style2, style3);

    expect(collection).toHaveLength(2);
  });

  it("should merge variant styles", () => {
    const styleFn = createStyle("color", "#fff");
    const hoverStyleFn: any = () => ({
      styles: { property: "color", value: "#000" },
      variant: {
        type: "pseudo",
        value: "hover",
        selector: "&:hover",
      },
    });

    const collection = merge(styleFn, hoverStyleFn);
    const result = collection.map((fn) => fn());

    expect(result[0]).toEqual({ property: "color", value: "#fff" });
    expect(result[1]).toEqual({
      styles: { property: "color", value: "#000" },
      variant: {
        type: "pseudo",
        value: "hover",
        selector: "&:hover",
      },
    });
  });
});
