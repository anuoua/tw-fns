import { describe, expect, it } from "vitest";
import {
  overscroll_auto,
  overscroll_contain,
  overscroll_none,
  overscroll_x_auto,
  overscroll_y_auto,
  toCSS,
  merge,
} from "../src";

describe("overscroll-behavior", () => {
  it("should create overscroll-auto", () => {
    expect(overscroll_auto()).toEqual({
      property: "overscroll-behavior",
      value: "auto",
    });
  });

  it("should create overscroll-contain", () => {
    expect(overscroll_contain()).toEqual({
      property: "overscroll-behavior",
      value: "contain",
    });
  });

  it("should create overscroll-none", () => {
    expect(overscroll_none()).toEqual({
      property: "overscroll-behavior",
      value: "none",
    });
  });

  it("should create overscroll-x-auto", () => {
    expect(overscroll_x_auto()).toEqual({
      property: "overscroll-behavior-x",
      value: "auto",
    });
  });

  it("should create overscroll-y-auto", () => {
    expect(overscroll_y_auto()).toEqual({
      property: "overscroll-behavior-y",
      value: "auto",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with overscroll-contain", () => {
      const css = toCSS(merge(overscroll_contain), ".element");
      expect(css).toContain("overscroll-behavior: contain;");
    });
  });
});
