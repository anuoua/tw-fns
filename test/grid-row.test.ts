import { describe, expect, it } from "vitest";
import {
  row_auto,
  row_span_1,
  row_span_2,
  row_span_3,
  row_span_4,
  row_span_5,
  row_span_6,
  row_span_full,
  row_start_1,
  row_start_2,
  row_start_3,
  row_start_4,
  row_start_5,
  row_start_6,
  row_start_7,
  row_start_auto,
  row_end_1,
  row_end_2,
  row_end_3,
  row_end_4,
  row_end_5,
  row_end_6,
  row_end_7,
  row_end_auto,
  toCSS,
  merge,
} from "../src";

describe("grid-row", () => {
  it("should create row_auto", () => {
    expect(row_auto()).toEqual({
      property: "grid-row",
      value: "auto",
    });
  });

  it("should create row_span_1", () => {
    expect(row_span_1()).toEqual({
      property: "grid-row",
      value: "span 1 / span 1",
    });
  });

  it("should create row_span_6", () => {
    expect(row_span_6()).toEqual({
      property: "grid-row",
      value: "span 6 / span 6",
    });
  });

  it("should create row_span_full", () => {
    expect(row_span_full()).toEqual({
      property: "grid-row",
      value: "1 / -1",
    });
  });

  it("should create row_start_1", () => {
    expect(row_start_1()).toEqual({
      property: "grid-row-start",
      value: "1",
    });
  });

  it("should create row_start_6", () => {
    expect(row_start_6()).toEqual({
      property: "grid-row-start",
      value: "6",
    });
  });

  it("should create row_start_7", () => {
    expect(row_start_7()).toEqual({
      property: "grid-row-start",
      value: "7",
    });
  });

  it("should create row_start_auto", () => {
    expect(row_start_auto()).toEqual({
      property: "grid-row-start",
      value: "auto",
    });
  });

  it("should create row_end_1", () => {
    expect(row_end_1()).toEqual({
      property: "grid-row-end",
      value: "1",
    });
  });

  it("should create row_end_6", () => {
    expect(row_end_6()).toEqual({
      property: "grid-row-end",
      value: "6",
    });
  });

  it("should create row_end_7", () => {
    expect(row_end_7()).toEqual({
      property: "grid-row-end",
      value: "7",
    });
  });

  it("should create row_end_auto", () => {
    expect(row_end_auto()).toEqual({
      property: "grid-row-end",
      value: "auto",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with grid-row auto", () => {
      const css = toCSS(merge(row_auto), ".element");
      expect(css).toContain("grid-row: auto;");
    });

    it("should generate CSS with grid-row span 6", () => {
      const css = toCSS(merge(row_span_6), ".element");
      expect(css).toContain("grid-row: span 6 / span 6;");
    });

    it("should generate CSS with grid-row full", () => {
      const css = toCSS(merge(row_span_full), ".element");
      expect(css).toContain("grid-row: 1 / -1;");
    });

    it("should generate CSS with grid-row-start 6", () => {
      const css = toCSS(merge(row_start_6), ".element");
      expect(css).toContain("grid-row-start: 6;");
    });

    it("should generate CSS with grid-row-end 6", () => {
      const css = toCSS(merge(row_end_6), ".element");
      expect(css).toContain("grid-row-end: 6;");
    });
  });
});