import { describe, expect, it } from "vitest";
import {
  gap_0,
  gap_4,
  gap_8,
  gap_12,
  gap_x_0,
  gap_x_4,
  gap_x_8,
  gap_x_12,
  gap_y_0,
  gap_y_4,
  gap_y_8,
  gap_y_12,
  toCSS,
  merge,
} from "../src";

describe("gap", () => {
  it("should create gap_0", () => {
    expect(gap_0()).toEqual({
      property: "gap",
      value: "0",
    });
  });

  it("should create gap_4", () => {
    expect(gap_4()).toEqual({
      property: "gap",
      value: "1rem",
    });
  });

  it("should create gap_8", () => {
    expect(gap_8()).toEqual({
      property: "gap",
      value: "2rem",
    });
  });

  it("should create gap_12", () => {
    expect(gap_12()).toEqual({
      property: "gap",
      value: "3rem",
    });
  });

  it("should create gap_x_0", () => {
    expect(gap_x_0()).toEqual({
      property: "column-gap",
      value: "0",
    });
  });

  it("should create gap_x_4", () => {
    expect(gap_x_4()).toEqual({
      property: "column-gap",
      value: "1rem",
    });
  });

  it("should create gap_x_8", () => {
    expect(gap_x_8()).toEqual({
      property: "column-gap",
      value: "2rem",
    });
  });

  it("should create gap_x_12", () => {
    expect(gap_x_12()).toEqual({
      property: "column-gap",
      value: "3rem",
    });
  });

  it("should create gap_y_0", () => {
    expect(gap_y_0()).toEqual({
      property: "row-gap",
      value: "0",
    });
  });

  it("should create gap_y_4", () => {
    expect(gap_y_4()).toEqual({
      property: "row-gap",
      value: "1rem",
    });
  });

  it("should create gap_y_8", () => {
    expect(gap_y_8()).toEqual({
      property: "row-gap",
      value: "2rem",
    });
  });

  it("should create gap_y_12", () => {
    expect(gap_y_12()).toEqual({
      property: "row-gap",
      value: "3rem",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with gap 1rem", () => {
      const css = toCSS(merge(gap_4), ".element");
      expect(css).toContain("gap: 1rem;");
    });

    it("should generate CSS with gap 2rem", () => {
      const css = toCSS(merge(gap_8), ".element");
      expect(css).toContain("gap: 2rem;");
    });

    it("should generate CSS with column-gap 1rem", () => {
      const css = toCSS(merge(gap_x_4), ".element");
      expect(css).toContain("column-gap: 1rem;");
    });

    it("should generate CSS with row-gap 1rem", () => {
      const css = toCSS(merge(gap_y_4), ".element");
      expect(css).toContain("row-gap: 1rem;");
    });
  });
});