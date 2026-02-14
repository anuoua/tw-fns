import { describe, expect, it } from "vitest";
import {
  flex_nowrap,
  flex_wrap,
  flex_wrap_reverse,
  toCSS,
  merge,
} from "../src";

describe("flex-wrap", () => {
  it("should create flex_nowrap", () => {
    expect(flex_nowrap()).toEqual({
      property: "flex-wrap",
      value: "nowrap",
    });
  });

  it("should create flex_wrap", () => {
    expect(flex_wrap()).toEqual({
      property: "flex-wrap",
      value: "wrap",
    });
  });

  it("should create flex_wrap_reverse", () => {
    expect(flex_wrap_reverse()).toEqual({
      property: "flex-wrap",
      value: "wrap-reverse",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with flex-wrap nowrap", () => {
      const css = toCSS(merge(flex_nowrap), ".element");
      expect(css).toContain("flex-wrap: nowrap;");
    });

    it("should generate CSS with flex-wrap wrap", () => {
      const css = toCSS(merge(flex_wrap), ".element");
      expect(css).toContain("flex-wrap: wrap;");
    });

    it("should generate CSS with flex-wrap wrap-reverse", () => {
      const css = toCSS(merge(flex_wrap_reverse), ".element");
      expect(css).toContain("flex-wrap: wrap-reverse;");
    });
  });
});