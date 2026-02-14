import { describe, expect, it } from "vitest";
import {
  break_inside_auto,
  break_inside_avoid,
  break_inside_avoid_page,
  break_inside_avoid_column,
  toCSS,
  merge,
} from "../src";

describe("break-inside", () => {
  it("should create break-inside-auto", () => {
    expect(break_inside_auto()).toEqual({
      property: "break-inside",
      value: "auto",
    });
  });

  it("should create break-inside-avoid", () => {
    expect(break_inside_avoid()).toEqual({
      property: "break-inside",
      value: "avoid",
    });
  });

  it("should create break-inside-avoid-page", () => {
    expect(break_inside_avoid_page()).toEqual({
      property: "break-inside",
      value: "avoid-page",
    });
  });

  it("should create break-inside-avoid-column", () => {
    expect(break_inside_avoid_column()).toEqual({
      property: "break-inside",
      value: "avoid-column",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with break-inside-avoid", () => {
      const css = toCSS(merge(break_inside_avoid), ".element");
      expect(css).toContain("break-inside: avoid;");
    });
  });
});
