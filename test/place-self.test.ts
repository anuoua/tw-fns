import { describe, expect, it } from "vitest";
import {
  place_self_auto,
  place_self_start,
  place_self_end,
  place_self_center,
  place_self_stretch,
  toCSS,
  merge,
} from "../src";

describe("place-self", () => {
  it("should create place_self_auto", () => {
    expect(place_self_auto()).toEqual({
      property: "place-self",
      value: "auto",
    });
  });

  it("should create place_self_start", () => {
    expect(place_self_start()).toEqual({
      property: "place-self",
      value: "start",
    });
  });

  it("should create place_self_end", () => {
    expect(place_self_end()).toEqual({
      property: "place-self",
      value: "end",
    });
  });

  it("should create place_self_center", () => {
    expect(place_self_center()).toEqual({
      property: "place-self",
      value: "center",
    });
  });

  it("should create place_self_stretch", () => {
    expect(place_self_stretch()).toEqual({
      property: "place-self",
      value: "stretch",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with place-self auto", () => {
      const css = toCSS(merge(place_self_auto), ".element");
      expect(css).toContain("place-self: auto;");
    });

    it("should generate CSS with place-self start", () => {
      const css = toCSS(merge(place_self_start), ".element");
      expect(css).toContain("place-self: start;");
    });

    it("should generate CSS with place-self end", () => {
      const css = toCSS(merge(place_self_end), ".element");
      expect(css).toContain("place-self: end;");
    });

    it("should generate CSS with place-self center", () => {
      const css = toCSS(merge(place_self_center), ".element");
      expect(css).toContain("place-self: center;");
    });

    it("should generate CSS with place-self stretch", () => {
      const css = toCSS(merge(place_self_stretch), ".element");
      expect(css).toContain("place-self: stretch;");
    });
  });
});