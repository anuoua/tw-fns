import { describe, expect, it } from "vitest";
import {
  auto_rows_auto,
  auto_rows_min,
  auto_rows_max,
  auto_rows_fr,
  toCSS,
  merge,
} from "../src";

describe("grid-auto-rows", () => {
  it("should create auto_rows_auto", () => {
    expect(auto_rows_auto()).toEqual({
      property: "grid-auto-rows",
      value: "auto",
    });
  });

  it("should create auto_rows_min", () => {
    expect(auto_rows_min()).toEqual({
      property: "grid-auto-rows",
      value: "min-content",
    });
  });

  it("should create auto_rows_max", () => {
    expect(auto_rows_max()).toEqual({
      property: "grid-auto-rows",
      value: "max-content",
    });
  });

  it("should create auto_rows_fr", () => {
    expect(auto_rows_fr()).toEqual({
      property: "grid-auto-rows",
      value: "minmax(0, 1fr)",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with grid-auto-rows auto", () => {
      const css = toCSS(merge(auto_rows_auto), ".element");
      expect(css).toContain("grid-auto-rows: auto;");
    });

    it("should generate CSS with grid-auto-rows min-content", () => {
      const css = toCSS(merge(auto_rows_min), ".element");
      expect(css).toContain("grid-auto-rows: min-content;");
    });

    it("should generate CSS with grid-auto-rows max-content", () => {
      const css = toCSS(merge(auto_rows_max), ".element");
      expect(css).toContain("grid-auto-rows: max-content;");
    });

    it("should generate CSS with grid-auto-rows minmax(0, 1fr)", () => {
      const css = toCSS(merge(auto_rows_fr), ".element");
      expect(css).toContain("grid-auto-rows: minmax(0, 1fr);");
    });
  });
});