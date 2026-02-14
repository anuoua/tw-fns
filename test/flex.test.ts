import { describe, expect, it } from "vitest";
import {
  flex_1,
  flex_auto,
  flex_initial,
  flex_none,
  toCSS,
  merge,
} from "../src";

describe("flex", () => {
  it("should create flex_1", () => {
    expect(flex_1()).toEqual({
      property: "flex",
      value: "1 1 0%",
    });
  });

  it("should create flex_auto", () => {
    expect(flex_auto()).toEqual({
      property: "flex",
      value: "1 1 auto",
    });
  });

  it("should create flex_initial", () => {
    expect(flex_initial()).toEqual({
      property: "flex",
      value: "0 1 auto",
    });
  });

  it("should create flex_none", () => {
    expect(flex_none()).toEqual({
      property: "flex",
      value: "none",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with flex 1 1 0%", () => {
      const css = toCSS(merge(flex_1), ".element");
      expect(css).toContain("flex: 1 1 0%;");
    });

    it("should generate CSS with flex 1 1 auto", () => {
      const css = toCSS(merge(flex_auto), ".element");
      expect(css).toContain("flex: 1 1 auto;");
    });

    it("should generate CSS with flex 0 1 auto", () => {
      const css = toCSS(merge(flex_initial), ".element");
      expect(css).toContain("flex: 0 1 auto;");
    });

    it("should generate CSS with flex none", () => {
      const css = toCSS(merge(flex_none), ".element");
      expect(css).toContain("flex: none;");
    });
  });
});