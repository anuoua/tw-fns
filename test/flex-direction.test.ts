import { describe, expect, it } from "vitest";
import {
  flex_row,
  flex_row_reverse,
  flex_col,
  flex_col_reverse,
  toCSS,
  merge,
} from "../src";

describe("flex-direction", () => {
  it("should create flex_row", () => {
    expect(flex_row()).toEqual({
      property: "flex-direction",
      value: "row",
    });
  });

  it("should create flex_row_reverse", () => {
    expect(flex_row_reverse()).toEqual({
      property: "flex-direction",
      value: "row-reverse",
    });
  });

  it("should create flex_col", () => {
    expect(flex_col()).toEqual({
      property: "flex-direction",
      value: "column",
    });
  });

  it("should create flex_col_reverse", () => {
    expect(flex_col_reverse()).toEqual({
      property: "flex-direction",
      value: "column-reverse",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with flex-direction row", () => {
      const css = toCSS(merge(flex_row), ".element");
      expect(css).toContain("flex-direction: row;");
    });

    it("should generate CSS with flex-direction column", () => {
      const css = toCSS(merge(flex_col), ".element");
      expect(css).toContain("flex-direction: column;");
    });

    it("should generate CSS with flex-direction row-reverse", () => {
      const css = toCSS(merge(flex_row_reverse), ".element");
      expect(css).toContain("flex-direction: row-reverse;");
    });

    it("should generate CSS with flex-direction column-reverse", () => {
      const css = toCSS(merge(flex_col_reverse), ".element");
      expect(css).toContain("flex-direction: column-reverse;");
    });
  });
});