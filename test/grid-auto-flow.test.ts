import { describe, expect, it } from "vitest";
import {
  grid_flow_row,
  grid_flow_col,
  grid_flow_row_dense,
  grid_flow_col_dense,
  toCSS,
  merge,
} from "../src";

describe("grid-auto-flow", () => {
  it("should create grid_flow_row", () => {
    expect(grid_flow_row()).toEqual({
      property: "grid-auto-flow",
      value: "row",
    });
  });

  it("should create grid_flow_col", () => {
    expect(grid_flow_col()).toEqual({
      property: "grid-auto-flow",
      value: "column",
    });
  });

  it("should create grid_flow_row_dense", () => {
    expect(grid_flow_row_dense()).toEqual({
      property: "grid-auto-flow",
      value: "row dense",
    });
  });

  it("should create grid_flow_col_dense", () => {
    expect(grid_flow_col_dense()).toEqual({
      property: "grid-auto-flow",
      value: "column dense",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with grid-auto-flow row", () => {
      const css = toCSS(merge(grid_flow_row), ".element");
      expect(css).toContain("grid-auto-flow: row;");
    });

    it("should generate CSS with grid-auto-flow column", () => {
      const css = toCSS(merge(grid_flow_col), ".element");
      expect(css).toContain("grid-auto-flow: column;");
    });

    it("should generate CSS with grid-auto-flow row dense", () => {
      const css = toCSS(merge(grid_flow_row_dense), ".element");
      expect(css).toContain("grid-auto-flow: row dense;");
    });

    it("should generate CSS with grid-auto-flow column dense", () => {
      const css = toCSS(merge(grid_flow_col_dense), ".element");
      expect(css).toContain("grid-auto-flow: column dense;");
    });
  });
});