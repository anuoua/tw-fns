import { describe, expect, it } from "vitest";
import {
  auto_cols_auto,
  auto_cols_min,
  auto_cols_max,
  auto_cols_fr,
  toCSS,
  merge,
} from "../src";

describe("grid-auto-columns", () => {
  it("should create auto_cols_auto", () => {
    expect(auto_cols_auto()).toEqual({
      property: "grid-auto-columns",
      value: "auto",
    });
  });

  it("should create auto_cols_min", () => {
    expect(auto_cols_min()).toEqual({
      property: "grid-auto-columns",
      value: "min-content",
    });
  });

  it("should create auto_cols_max", () => {
    expect(auto_cols_max()).toEqual({
      property: "grid-auto-columns",
      value: "max-content",
    });
  });

  it("should create auto_cols_fr", () => {
    expect(auto_cols_fr()).toEqual({
      property: "grid-auto-columns",
      value: "minmax(0, 1fr)",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with grid-auto-columns auto", () => {
      const css = toCSS(merge(auto_cols_auto), ".element");
      expect(css).toContain("grid-auto-columns: auto;");
    });

    it("should generate CSS with grid-auto-columns min-content", () => {
      const css = toCSS(merge(auto_cols_min), ".element");
      expect(css).toContain("grid-auto-columns: min-content;");
    });

    it("should generate CSS with grid-auto-columns max-content", () => {
      const css = toCSS(merge(auto_cols_max), ".element");
      expect(css).toContain("grid-auto-columns: max-content;");
    });

    it("should generate CSS with grid-auto-columns minmax(0, 1fr)", () => {
      const css = toCSS(merge(auto_cols_fr), ".element");
      expect(css).toContain("grid-auto-columns: minmax(0, 1fr);");
    });
  });
});