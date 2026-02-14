import { describe, expect, it } from "vitest";
import {
  object_contain,
  object_cover,
  object_fill,
  object_none,
  object_scale_down,
  toCSS,
  merge,
} from "../src";

describe("object-fit", () => {
  it("should create object-contain", () => {
    expect(object_contain()).toEqual({
      property: "object-fit",
      value: "contain",
    });
  });

  it("should create object-cover", () => {
    expect(object_cover()).toEqual({
      property: "object-fit",
      value: "cover",
    });
  });

  it("should create object-fill", () => {
    expect(object_fill()).toEqual({
      property: "object-fit",
      value: "fill",
    });
  });

  it("should create object-none", () => {
    expect(object_none()).toEqual({
      property: "object-fit",
      value: "none",
    });
  });

  it("should create object-scale-down", () => {
    expect(object_scale_down()).toEqual({
      property: "object-fit",
      value: "scale-down",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with object-cover", () => {
      const css = toCSS(merge(object_cover), ".element");
      expect(css).toContain("object-fit: cover;");
    });
  });
});
