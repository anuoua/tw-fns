import { describe, expect, it } from "vitest";
import {
  col_auto,
  col_span_1,
  col_span_2,
  col_span_3,
  col_span_4,
  col_span_5,
  col_span_6,
  col_span_7,
  col_span_8,
  col_span_9,
  col_span_10,
  col_span_11,
  col_span_12,
  col_span_full,
  col_start_1,
  col_start_2,
  col_start_3,
  col_start_4,
  col_start_5,
  col_start_6,
  col_start_7,
  col_start_8,
  col_start_9,
  col_start_10,
  col_start_11,
  col_start_12,
  col_start_13,
  col_start_auto,
  col_end_1,
  col_end_2,
  col_end_3,
  col_end_4,
  col_end_5,
  col_end_6,
  col_end_7,
  col_end_8,
  col_end_9,
  col_end_10,
  col_end_11,
  col_end_12,
  col_end_13,
  col_end_auto,
  toCSS,
  merge,
} from "../src";

describe("grid-column", () => {
  it("should create col_auto", () => {
    expect(col_auto()).toEqual({
      property: "grid-column",
      value: "auto",
    });
  });

  it("should create col_span_1", () => {
    expect(col_span_1()).toEqual({
      property: "grid-column",
      value: "span 1 / span 1",
    });
  });

  it("should create col_span_6", () => {
    expect(col_span_6()).toEqual({
      property: "grid-column",
      value: "span 6 / span 6",
    });
  });

  it("should create col_span_12", () => {
    expect(col_span_12()).toEqual({
      property: "grid-column",
      value: "span 12 / span 12",
    });
  });

  it("should create col_span_full", () => {
    expect(col_span_full()).toEqual({
      property: "grid-column",
      value: "1 / -1",
    });
  });

  it("should create col_start_1", () => {
    expect(col_start_1()).toEqual({
      property: "grid-column-start",
      value: "1",
    });
  });

  it("should create col_start_6", () => {
    expect(col_start_6()).toEqual({
      property: "grid-column-start",
      value: "6",
    });
  });

  it("should create col_start_13", () => {
    expect(col_start_13()).toEqual({
      property: "grid-column-start",
      value: "13",
    });
  });

  it("should create col_start_auto", () => {
    expect(col_start_auto()).toEqual({
      property: "grid-column-start",
      value: "auto",
    });
  });

  it("should create col_end_1", () => {
    expect(col_end_1()).toEqual({
      property: "grid-column-end",
      value: "1",
    });
  });

  it("should create col_end_6", () => {
    expect(col_end_6()).toEqual({
      property: "grid-column-end",
      value: "6",
    });
  });

  it("should create col_end_13", () => {
    expect(col_end_13()).toEqual({
      property: "grid-column-end",
      value: "13",
    });
  });

  it("should create col_end_auto", () => {
    expect(col_end_auto()).toEqual({
      property: "grid-column-end",
      value: "auto",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with grid-column auto", () => {
      const css = toCSS(merge(col_auto), ".element");
      expect(css).toContain("grid-column: auto;");
    });

    it("should generate CSS with grid-column span 6", () => {
      const css = toCSS(merge(col_span_6), ".element");
      expect(css).toContain("grid-column: span 6 / span 6;");
    });

    it("should generate CSS with grid-column full", () => {
      const css = toCSS(merge(col_span_full), ".element");
      expect(css).toContain("grid-column: 1 / -1;");
    });

    it("should generate CSS with grid-column-start 6", () => {
      const css = toCSS(merge(col_start_6), ".element");
      expect(css).toContain("grid-column-start: 6;");
    });

    it("should generate CSS with grid-column-end 6", () => {
      const css = toCSS(merge(col_end_6), ".element");
      expect(css).toContain("grid-column-end: 6;");
    });
  });
});