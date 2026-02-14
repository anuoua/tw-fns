import { describe, expect, it } from "vitest";
import {
  visible,
  invisible,
  collapse,
  toCSS,
  merge,
} from "../src";

describe("visibility", () => {
  it("should create visible", () => {
    expect(visible()).toEqual({
      property: "visibility",
      value: "visible",
    });
  });

  it("should create invisible", () => {
    expect(invisible()).toEqual({
      property: "visibility",
      value: "hidden",
    });
  });

  it("should create collapse", () => {
    expect(collapse()).toEqual({
      property: "visibility",
      value: "collapse",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with invisible", () => {
      const css = toCSS(merge(invisible), ".element");
      expect(css).toContain("visibility: hidden;");
    });
  });
});
