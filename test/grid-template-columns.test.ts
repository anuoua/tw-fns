import { describe, expect, it } from "vitest";
import {
  grid_cols_1,
  grid_cols_2,
  grid_cols_3,
  grid_cols_4,
  grid_cols_5,
  grid_cols_6,
  grid_cols_7,
  grid_cols_8,
  grid_cols_9,
  grid_cols_10,
  grid_cols_11,
  grid_cols_12,
  grid_cols_none,
  toCSS,
  merge,
} from "../src";

describe("grid-template-columns", () => {
  it("should create grid_cols_1", () => {
    expect(grid_cols_1()).toEqual({
      property: "grid-template-columns",
      value: "repeat(1, minmax(0, 1fr))",
    });
  });

  it("should create grid_cols_2", () => {
    expect(grid_cols_2()).toEqual({
      property: "grid-template-columns",
      value: "repeat(2, minmax(0, 1fr))",
    });
  });

  it("should create grid_cols_3", () => {
    expect(grid_cols_3()).toEqual({
      property: "grid-template-columns",
      value: "repeat(3, minmax(0, 1fr))",
    });
  });

  it("should create grid_cols_4", () => {
    expect(grid_cols_4()).toEqual({
      property: "grid-template-columns",
      value: "repeat(4, minmax(0, 1fr))",
    });
  });

  it("should create grid_cols_5", () => {
    expect(grid_cols_5()).toEqual({
      property: "grid-template-columns",
      value: "repeat(5, minmax(0, 1fr))",
    });
  });

  it("should create grid_cols_6", () => {
    expect(grid_cols_6()).toEqual({
      property: "grid-template-columns",
      value: "repeat(6, minmax(0, 1fr))",
    });
  });

  it("should create grid_cols_7", () => {
    expect(grid_cols_7()).toEqual({
      property: "grid-template-columns",
      value: "repeat(7, minmax(0, 1fr))",
    });
  });

  it("should create grid_cols_8", () => {
    expect(grid_cols_8()).toEqual({
      property: "grid-template-columns",
      value: "repeat(8, minmax(0, 1fr))",
    });
  });

  it("should create grid_cols_9", () => {
    expect(grid_cols_9()).toEqual({
      property: "grid-template-columns",
      value: "repeat(9, minmax(0, 1fr))",
    });
  });

  it("should create grid_cols_10", () => {
    expect(grid_cols_10()).toEqual({
      property: "grid-template-columns",
      value: "repeat(10, minmax(0, 1fr))",
    });
  });

  it("should create grid_cols_11", () => {
    expect(grid_cols_11()).toEqual({
      property: "grid-template-columns",
      value: "repeat(11, minmax(0, 1fr))",
    });
  });

  it("should create grid_cols_12", () => {
    expect(grid_cols_12()).toEqual({
      property: "grid-template-columns",
      value: "repeat(12, minmax(0, 1fr))",
    });
  });

  it("should create grid_cols_none", () => {
    expect(grid_cols_none()).toEqual({
      property: "grid-template-columns",
      value: "none",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with grid-template-columns repeat(1, minmax(0, 1fr))", () => {
      const css = toCSS(merge(grid_cols_1), ".element");
      expect(css).toContain("grid-template-columns: repeat(1, minmax(0, 1fr));");
    });

    it("should generate CSS with grid-template-columns repeat(6, minmax(0, 1fr))", () => {
      const css = toCSS(merge(grid_cols_6), ".element");
      expect(css).toContain("grid-template-columns: repeat(6, minmax(0, 1fr));");
    });

    it("should generate CSS with grid-template-columns repeat(12, minmax(0, 1fr))", () => {
      const css = toCSS(merge(grid_cols_12), ".element");
      expect(css).toContain("grid-template-columns: repeat(12, minmax(0, 1fr));");
    });

    it("should generate CSS with grid-template-columns none", () => {
      const css = toCSS(merge(grid_cols_none), ".element");
      expect(css).toContain("grid-template-columns: none;");
    });
  });
});