import { describe, expect, it } from "vitest";
import { box_border, box_content, toCSS, merge } from "../src";

describe("box-sizing", () => {
  it("should create box-border", () => {
    expect(box_border()).toEqual({
      property: "box-sizing",
      value: "border-box",
    });
  });

  it("should create box-content", () => {
    expect(box_content()).toEqual({
      property: "box-sizing",
      value: "content-box",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with box-border", () => {
      const css = toCSS(merge(box_border), ".element");
      expect(css).toContain("box-sizing: border-box;");
    });
  });
});
