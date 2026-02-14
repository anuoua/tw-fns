import { describe, expect, it } from "vitest";
import {
  box_decoration_clone,
  box_decoration_slice,
  toCSS,
  merge,
} from "../src";

describe("box-decoration-break", () => {
  it("should create box-decoration-clone", () => {
    expect(box_decoration_clone()).toEqual({
      property: "box-decoration-break",
      value: "clone",
    });
  });

  it("should create box-decoration-slice", () => {
    expect(box_decoration_slice()).toEqual({
      property: "box-decoration-break",
      value: "slice",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with box-decoration-clone", () => {
      const css = toCSS(merge(box_decoration_clone), ".element");
      expect(css).toContain("box-decoration-break: clone;");
    });
  });
});
