import { describe, expect, it } from "vitest";
import {
  createStyle,
  createMultiStyle,
  createStyleWithValue,
  createMappedStyle,
} from "../src/core/style";

describe("style", () => {
  describe("createStyle", () => {
    it("should create a style function that returns a style rule", () => {
      const styleFn = createStyle("color", "#fff");
      const result = styleFn();

      expect(result).toEqual({ property: "color", value: "#fff" });
    });

    it("should create lazy style function", () => {
      const styleFn = createStyle("color", "#fff");
      let result;

      result = styleFn();
      expect(result).toEqual({ property: "color", value: "#fff" });
    });
  });

  describe("createMultiStyle", () => {
    it("should create a style function that returns multiple style rules", () => {
      const styleFn = createMultiStyle([
        { property: "padding-left", value: "1rem" },
        { property: "padding-right", value: "1rem" },
      ]);
      const result = styleFn();

      expect(result).toHaveLength(2);
      expect(result[0]).toEqual({ property: "padding-left", value: "1rem" });
      expect(result[1]).toEqual({ property: "padding-right", value: "1rem" });
    });
  });

  describe("createStyleWithValue", () => {
    it("should create a style function that accepts value", () => {
      const p = createStyleWithValue("padding");
      const styleFn = p("2rem");
      const result = styleFn();

      expect(result).toEqual({ property: "padding", value: "2rem" });
    });

    it("should create style functions with different values", () => {
      const p = createStyleWithValue("padding");
      const style1 = p("1rem");
      const style2 = p("2rem");

      const result1 = style1();
      const result2 = style2();

      expect(result1).toEqual({ property: "padding", value: "1rem" });
      expect(result2).toEqual({ property: "padding", value: "2rem" });
    });
  });

  describe("createMappedStyle", () => {
    it("should create a style function using mapping", () => {
      const mapping = { sm: "0.25rem", md: "0.5rem", lg: "1rem" };
      const p = createMappedStyle("padding", "md", mapping);
      const result = p();

      expect(result).toEqual({ property: "padding", value: "0.5rem" });
    });

    it("should use value from mapping", () => {
      const mapping = { 1: "0.25rem", 2: "0.5rem", 4: "1rem" };
      const p_4 = createMappedStyle("padding", "4", mapping);
      const result = p_4();

      expect(result).toEqual({ property: "padding", value: "1rem" });
    });

    it("should fall back to key if not in mapping", () => {
      const mapping = { sm: "0.25rem", md: "0.5rem" };
      const p_8 = createMappedStyle("padding", "8", mapping);
      const result = p_8();

      expect(result).toEqual({ property: "padding", value: "8" });
    });
  });
});
