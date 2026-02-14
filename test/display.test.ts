import { describe, expect, it } from "vitest";
import {
  block,
  inline_block,
  inline,
  flex,
  inline_flex,
  grid,
  inline_grid,
  hidden,
  toCSS,
  merge,
} from "../src";

describe("display", () => {
  it("should create block", () => {
    expect(block()).toEqual({
      property: "display",
      value: "block",
    });
  });

  it("should create inline-block", () => {
    expect(inline_block()).toEqual({
      property: "display",
      value: "inline-block",
    });
  });

  it("should create inline", () => {
    expect(inline()).toEqual({
      property: "display",
      value: "inline",
    });
  });

  it("should create flex", () => {
    expect(flex()).toEqual({
      property: "display",
      value: "flex",
    });
  });

  it("should create inline-flex", () => {
    expect(inline_flex()).toEqual({
      property: "display",
      value: "inline-flex",
    });
  });

  it("should create grid", () => {
    expect(grid()).toEqual({
      property: "display",
      value: "grid",
    });
  });

  it("should create inline-grid", () => {
    expect(inline_grid()).toEqual({
      property: "display",
      value: "inline-grid",
    });
  });

  it("should create hidden", () => {
    expect(hidden()).toEqual({
      property: "display",
      value: "none",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with flex", () => {
      const css = toCSS(merge(flex), ".element");
      expect(css).toContain("display: flex;");
    });
  });
});
