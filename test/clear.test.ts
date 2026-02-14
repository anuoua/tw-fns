import { describe, expect, it } from "vitest";
import {
  clear_left,
  clear_right,
  clear_both,
  clear_start,
  clear_end,
  clear_none,
  toCSS,
  merge,
} from "../src";

describe("clear", () => {
  it("should create clear-left", () => {
    expect(clear_left()).toEqual({
      property: "clear",
      value: "left",
    });
  });

  it("should create clear-right", () => {
    expect(clear_right()).toEqual({
      property: "clear",
      value: "right",
    });
  });

  it("should create clear-both", () => {
    expect(clear_both()).toEqual({
      property: "clear",
      value: "both",
    });
  });

  it("should create clear-start", () => {
    expect(clear_start()).toEqual({
      property: "clear",
      value: "inline-start",
    });
  });

  it("should create clear-end", () => {
    expect(clear_end()).toEqual({
      property: "clear",
      value: "inline-end",
    });
  });

  it("should create clear-none", () => {
    expect(clear_none()).toEqual({
      property: "clear",
      value: "none",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with clear-both", () => {
      const css = toCSS(merge(clear_both), ".element");
      expect(css).toContain("clear: both;");
    });
  });
});
