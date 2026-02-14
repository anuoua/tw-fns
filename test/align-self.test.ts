import { describe, expect, it } from "vitest";
import {
  self_auto,
  self_start,
  self_end,
  self_center,
  self_stretch,
  self_baseline,
  toCSS,
  merge,
} from "../src";

describe("align-self", () => {
  it("should create self_auto", () => {
    expect(self_auto()).toEqual({
      property: "align-self",
      value: "auto",
    });
  });

  it("should create self_start", () => {
    expect(self_start()).toEqual({
      property: "align-self",
      value: "flex-start",
    });
  });

  it("should create self_end", () => {
    expect(self_end()).toEqual({
      property: "align-self",
      value: "flex-end",
    });
  });

  it("should create self_center", () => {
    expect(self_center()).toEqual({
      property: "align-self",
      value: "center",
    });
  });

  it("should create self_stretch", () => {
    expect(self_stretch()).toEqual({
      property: "align-self",
      value: "stretch",
    });
  });

  it("should create self_baseline", () => {
    expect(self_baseline()).toEqual({
      property: "align-self",
      value: "baseline",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with align-self auto", () => {
      const css = toCSS(merge(self_auto), ".element");
      expect(css).toContain("align-self: auto;");
    });

    it("should generate CSS with align-self flex-start", () => {
      const css = toCSS(merge(self_start), ".element");
      expect(css).toContain("align-self: flex-start;");
    });

    it("should generate CSS with align-self flex-end", () => {
      const css = toCSS(merge(self_end), ".element");
      expect(css).toContain("align-self: flex-end;");
    });

    it("should generate CSS with align-self center", () => {
      const css = toCSS(merge(self_center), ".element");
      expect(css).toContain("align-self: center;");
    });

    it("should generate CSS with align-self stretch", () => {
      const css = toCSS(merge(self_stretch), ".element");
      expect(css).toContain("align-self: stretch;");
    });

    it("should generate CSS with align-self baseline", () => {
      const css = toCSS(merge(self_baseline), ".element");
      expect(css).toContain("align-self: baseline;");
    });
  });
});