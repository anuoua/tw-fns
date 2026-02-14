import { describe, expect, it } from "vitest";
import {
  object_top_left,
  object_top,
  object_top_right,
  object_left,
  object_center,
  object_right,
  object_bottom_left,
  object_bottom,
  object_bottom_right,
  toCSS,
  merge,
} from "../src";

describe("object-position", () => {
  it("should create object-top-left", () => {
    expect(object_top_left()).toEqual({
      property: "object-position",
      value: "top left",
    });
  });

  it("should create object-top", () => {
    expect(object_top()).toEqual({
      property: "object-position",
      value: "top",
    });
  });

  it("should create object-center", () => {
    expect(object_center()).toEqual({
      property: "object-position",
      value: "center",
    });
  });

  it("should create object-bottom-right", () => {
    expect(object_bottom_right()).toEqual({
      property: "object-position",
      value: "bottom right",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with object-center", () => {
      const css = toCSS(merge(object_center), ".element");
      expect(css).toContain("object-position: center;");
    });
  });
});
