import { describe, expect, it } from "vitest";
import {
  items_start,
  items_end,
  items_center,
  items_baseline,
  items_stretch,
  toCSS,
  merge,
} from "../src";

describe("align-items", () => {
  it("should create items_start", () => {
    expect(items_start()).toEqual({
      property: "align-items",
      value: "flex-start",
    });
  });

  it("should create items_end", () => {
    expect(items_end()).toEqual({
      property: "align-items",
      value: "flex-end",
    });
  });

  it("should create items_center", () => {
    expect(items_center()).toEqual({
      property: "align-items",
      value: "center",
    });
  });

  it("should create items_baseline", () => {
    expect(items_baseline()).toEqual({
      property: "align-items",
      value: "baseline",
    });
  });

  it("should create items_stretch", () => {
    expect(items_stretch()).toEqual({
      property: "align-items",
      value: "stretch",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with align-items flex-start", () => {
      const css = toCSS(merge(items_start), ".element");
      expect(css).toContain("align-items: flex-start;");
    });

    it("should generate CSS with align-items flex-end", () => {
      const css = toCSS(merge(items_end), ".element");
      expect(css).toContain("align-items: flex-end;");
    });

    it("should generate CSS with align-items center", () => {
      const css = toCSS(merge(items_center), ".element");
      expect(css).toContain("align-items: center;");
    });

    it("should generate CSS with align-items baseline", () => {
      const css = toCSS(merge(items_baseline), ".element");
      expect(css).toContain("align-items: baseline;");
    });

    it("should generate CSS with align-items stretch", () => {
      const css = toCSS(merge(items_stretch), ".element");
      expect(css).toContain("align-items: stretch;");
    });
  });
});