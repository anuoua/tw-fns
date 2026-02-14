import { describe, expect, it } from "vitest";
import {
  place_items_start,
  place_items_end,
  place_items_center,
  place_items_stretch,
  toCSS,
  merge,
} from "../src";

describe("place-items", () => {
  it("should create place_items_start", () => {
    expect(place_items_start()).toEqual({
      property: "place-items",
      value: "start",
    });
  });

  it("should create place_items_end", () => {
    expect(place_items_end()).toEqual({
      property: "place-items",
      value: "end",
    });
  });

  it("should create place_items_center", () => {
    expect(place_items_center()).toEqual({
      property: "place-items",
      value: "center",
    });
  });

  it("should create place_items_stretch", () => {
    expect(place_items_stretch()).toEqual({
      property: "place-items",
      value: "stretch",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with place-items start", () => {
      const css = toCSS(merge(place_items_start), ".element");
      expect(css).toContain("place-items: start;");
    });

    it("should generate CSS with place-items end", () => {
      const css = toCSS(merge(place_items_end), ".element");
      expect(css).toContain("place-items: end;");
    });

    it("should generate CSS with place-items center", () => {
      const css = toCSS(merge(place_items_center), ".element");
      expect(css).toContain("place-items: center;");
    });

    it("should generate CSS with place-items stretch", () => {
      const css = toCSS(merge(place_items_stretch), ".element");
      expect(css).toContain("place-items: stretch;");
    });
  });
});