import { describe, expect, it } from "vitest";
import {
  float_right,
  float_left,
  float_start,
  float_end,
  float_none,
  toCSS,
  merge,
} from "../src";

describe("float", () => {
  it("should create float-right", () => {
    expect(float_right()).toEqual({
      property: "float",
      value: "right",
    });
  });

  it("should create float-left", () => {
    expect(float_left()).toEqual({
      property: "float",
      value: "left",
    });
  });

  it("should create float-start", () => {
    expect(float_start()).toEqual({
      property: "float",
      value: "inline-start",
    });
  });

  it("should create float-end", () => {
    expect(float_end()).toEqual({
      property: "float",
      value: "inline-end",
    });
  });

  it("should create float-none", () => {
    expect(float_none()).toEqual({
      property: "float",
      value: "none",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with float-right", () => {
      const css = toCSS(merge(float_right), ".element");
      expect(css).toContain("float: right;");
    });
  });
});
