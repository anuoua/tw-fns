import { describe, expect, it } from "vitest";
import {
  break_before_auto,
  break_before_avoid,
  break_before_all,
  break_before_avoid_page,
  break_before_page,
  break_before_left,
  break_before_right,
  break_before_column,
  toCSS,
  merge,
} from "../src";

describe("break-before", () => {
  it("should create break-before-auto", () => {
    expect(break_before_auto()).toEqual({
      property: "break-before",
      value: "auto",
    });
  });

  it("should create break-before-avoid", () => {
    expect(break_before_avoid()).toEqual({
      property: "break-before",
      value: "avoid",
    });
  });

  it("should create break-before-all", () => {
    expect(break_before_all()).toEqual({
      property: "break-before",
      value: "all",
    });
  });

  it("should create break-before-avoid-page", () => {
    expect(break_before_avoid_page()).toEqual({
      property: "break-before",
      value: "avoid-page",
    });
  });

  it("should create break-before-page", () => {
    expect(break_before_page()).toEqual({
      property: "break-before",
      value: "page",
    });
  });

  it("should create break-before-left", () => {
    expect(break_before_left()).toEqual({
      property: "break-before",
      value: "left",
    });
  });

  it("should create break-before-right", () => {
    expect(break_before_right()).toEqual({
      property: "break-before",
      value: "right",
    });
  });

  it("should create break-before-column", () => {
    expect(break_before_column()).toEqual({
      property: "break-before",
      value: "column",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with break-before-column", () => {
      const css = toCSS(merge(break_before_column), ".element");
      expect(css).toContain("break-before: column;");
    });

    it("should generate CSS with break-before-page", () => {
      const css = toCSS(merge(break_before_page), ".element");
      expect(css).toContain("break-before: page;");
    });

    it("should generate CSS with break-before-avoid", () => {
      const css = toCSS(merge(break_before_avoid), ".element");
      expect(css).toContain("break-before: avoid;");
    });
  });
});
