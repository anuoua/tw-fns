import { describe, expect, it } from "vitest";
import {
  grid_rows_1,
  grid_rows_2,
  grid_rows_3,
  grid_rows_4,
  grid_rows_5,
  grid_rows_6,
  grid_rows_none,
  toCSS,
  merge,
} from "../src";

describe("grid-template-rows", () => {
  it("should create grid_rows_1", () => {
    expect(grid_rows_1()).toEqual({
      property: "grid-template-rows",
      value: "repeat(1, minmax(0, 1fr))",
    });
  });

  it("should create grid_rows_2", () => {
    expect(grid_rows_2()).toEqual({
      property: "grid-template-rows",
      value: "repeat(2, minmax(0, 1fr))",
    });
  });

  it("should create grid_rows_3", () => {
    expect(grid_rows_3()).toEqual({
      property: "grid-template-rows",
      value: "repeat(3, minmax(0, 1fr))",
    });
  });

  it("should create grid_rows_4", () => {
    expect(grid_rows_4()).toEqual({
      property: "grid-template-rows",
      value: "repeat(4, minmax(0, 1fr))",
    });
  });

  it("should create grid_rows_5", () => {
    expect(grid_rows_5()).toEqual({
      property: "grid-template-rows",
      value: "repeat(5, minmax(0, 1fr))",
    });
  });

  it("should create grid_rows_6", () => {
    expect(grid_rows_6()).toEqual({
      property: "grid-template-rows",
      value: "repeat(6, minmax(0, 1fr))",
    });
  });

  it("should create grid_rows_none", () => {
    expect(grid_rows_none()).toEqual({
      property: "grid-template-rows",
      value: "none",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with grid-template-rows repeat(1, minmax(0, 1fr))", () => {
      const css = toCSS(merge(grid_rows_1), ".element");
      expect(css).toContain("grid-template-rows: repeat(1, minmax(0, 1fr));");
    });

    it("should generate CSS with grid-template-rows repeat(3, minmax(0, 1fr))", () => {
      const css = toCSS(merge(grid_rows_3), ".element");
      expect(css).toContain("grid-template-rows: repeat(3, minmax(0, 1fr));");
    });

    it("should generate CSS with grid-template-rows repeat(6, minmax(0, 1fr))", () => {
      const css = toCSS(merge(grid_rows_6), ".element");
      expect(css).toContain("grid-template-rows: repeat(6, minmax(0, 1fr));");
    });

    it("should generate CSS with grid-template-rows none", () => {
      const css = toCSS(merge(grid_rows_none), ".element");
      expect(css).toContain("grid-template-rows: none;");
    });
  });
});