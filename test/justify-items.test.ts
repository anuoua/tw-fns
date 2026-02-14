import { describe, expect, it } from "vitest";
import {
  justify_items_start,
  justify_items_end,
  justify_items_center,
  justify_items_stretch,
  toCSS,
  merge,
} from "../src";

describe("justify-items", () => {
  it("should create justify_items_start", () => {
    expect(justify_items_start()).toEqual({
      property: "justify-items",
      value: "start",
    });
  });

  it("should create justify_items_end", () => {
    expect(justify_items_end()).toEqual({
      property: "justify-items",
      value: "end",
    });
  });

  it("should create justify_items_center", () => {
    expect(justify_items_center()).toEqual({
      property: "justify-items",
      value: "center",
    });
  });

  it("should create justify_items_stretch", () => {
    expect(justify_items_stretch()).toEqual({
      property: "justify-items",
      value: "stretch",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with justify-items start", () => {
      const css = toCSS(merge(justify_items_start), ".element");
      expect(css).toContain("justify-items: start;");
    });

    it("should generate CSS with justify-items end", () => {
      const css = toCSS(merge(justify_items_end), ".element");
      expect(css).toContain("justify-items: end;");
    });

    it("should generate CSS with justify-items center", () => {
      const css = toCSS(merge(justify_items_center), ".element");
      expect(css).toContain("justify-items: center;");
    });

    it("should generate CSS with justify-items stretch", () => {
      const css = toCSS(merge(justify_items_stretch), ".element");
      expect(css).toContain("justify-items: stretch;");
    });
  });
});