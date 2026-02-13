import { describe, expect, it } from "vitest";
import {
  StyleFn,
  VariantStyleFn,
  StyleRule,
  VariantInfo,
  StyleCollection,
} from "../src/core/types";

describe("types", () => {
  describe("StyleRule", () => {
    it("should create a valid style rule", () => {
      const rule: StyleRule = { property: "color", value: "#fff" };
      expect(rule.property).toBe("color");
      expect(rule.value).toBe("#fff");
    });
  });

  describe("StyleFn", () => {
    it("should return a style rule when called", () => {
      const styleFn: StyleFn = () => ({ property: "color", value: "#fff" });
      const result = styleFn();
      expect(result).toEqual({ property: "color", value: "#fff" });
    });
  });

  describe("VariantStyleFn", () => {
    it("should return styles and variant info", () => {
      const variantStyleFn: VariantStyleFn = () => ({
        styles: { property: "color", value: "#fff" },
        variant: {
          type: "pseudo",
          value: "hover",
          selector: "&:hover",
        } as VariantInfo,
      });

      const result = variantStyleFn();
      expect(result.styles).toEqual({ property: "color", value: "#fff" });
      expect(result.variant).toEqual({
        type: "pseudo",
        value: "hover",
        selector: "&:hover",
      });
    });

    it("should return optional variant", () => {
      const variantStyleFn: VariantStyleFn = () => ({
        styles: { property: "color", value: "#fff" },
      });

      const result = variantStyleFn();
      expect(result.styles).toEqual({ property: "color", value: "#fff" });
      expect(result.variant).toBeUndefined();
    });
  });

  describe("StyleCollection", () => {
    it("should be an array of style functions", () => {
      const collection: StyleCollection = [
        () => ({ property: "color", value: "#fff" }),
        () => ({ property: "background", value: "#000" }),
      ];

      expect(Array.isArray(collection)).toBe(true);
      expect(collection).toHaveLength(2);
    });
  });
});
