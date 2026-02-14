import { describe, expect, it } from "vitest";
import {
  position_static,
  fixed,
  absolute,
  relative,
  sticky,
  toCSS,
  merge,
} from "../src";

describe("position", () => {
  it("should create position_static", () => {
    expect(position_static()).toEqual({
      property: "position",
      value: "static",
    });
  });

  it("should create fixed", () => {
    expect(fixed()).toEqual({
      property: "position",
      value: "fixed",
    });
  });

  it("should create absolute", () => {
    expect(absolute()).toEqual({
      property: "position",
      value: "absolute",
    });
  });

  it("should create relative", () => {
    expect(relative()).toEqual({
      property: "position",
      value: "relative",
    });
  });

  it("should create sticky", () => {
    expect(sticky()).toEqual({
      property: "position",
      value: "sticky",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with relative", () => {
      const css = toCSS(merge(relative), ".element");
      expect(css).toContain("position: relative;");
    });
  });
});
