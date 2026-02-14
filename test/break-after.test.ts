import { describe, expect, it } from "vitest";
import {
  break_after_auto,
  break_after_avoid,
  break_after_all,
  break_after_avoid_page,
  break_after_page,
  break_after_left,
  break_after_right,
  break_after_column,
  toCSS,
  merge,
} from "../src";

describe("break-after", () => {
  it("should create break-after-auto", () => {
    expect(break_after_auto()).toEqual({
      property: "break-after",
      value: "auto",
    });
  });

  it("should create break-after-avoid", () => {
    expect(break_after_avoid()).toEqual({
      property: "break-after",
      value: "avoid",
    });
  });

  it("should create break-after-all", () => {
    expect(break_after_all()).toEqual({
      property: "break-after",
      value: "all",
    });
  });

  it("should create break-after-avoid-page", () => {
    expect(break_after_avoid_page()).toEqual({
      property: "break-after",
      value: "avoid-page",
    });
  });

  it("should create break-after-page", () => {
    expect(break_after_page()).toEqual({
      property: "break-after",
      value: "page",
    });
  });

  it("should create break-after-left", () => {
    expect(break_after_left()).toEqual({
      property: "break-after",
      value: "left",
    });
  });

  it("should create break-after-right", () => {
    expect(break_after_right()).toEqual({
      property: "break-after",
      value: "right",
    });
  });

  it("should create break-after-column", () => {
    expect(break_after_column()).toEqual({
      property: "break-after",
      value: "column",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with break-after-column", () => {
      const css = toCSS(merge(break_after_column), ".element");
      expect(css).toContain("break-after: column;");
    });

    it("should generate CSS with break-after-page", () => {
      const css = toCSS(merge(break_after_page), ".element");
      expect(css).toContain("break-after: page;");
    });

    it("should generate CSS with break-after-avoid", () => {
      const css = toCSS(merge(break_after_avoid), ".element");
      expect(css).toContain("break-after: avoid;");
    });
  });
});
