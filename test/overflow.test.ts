import { describe, expect, it } from "vitest";
import {
  overflow_auto,
  overflow_hidden,
  overflow_clip,
  overflow_visible,
  overflow_scroll,
  overflow_x_auto,
  overflow_y_auto,
  toCSS,
  merge,
} from "../src";

describe("overflow", () => {
  it("should create overflow-auto", () => {
    expect(overflow_auto()).toEqual({
      property: "overflow",
      value: "auto",
    });
  });

  it("should create overflow-hidden", () => {
    expect(overflow_hidden()).toEqual({
      property: "overflow",
      value: "hidden",
    });
  });

  it("should create overflow-clip", () => {
    expect(overflow_clip()).toEqual({
      property: "overflow",
      value: "clip",
    });
  });

  it("should create overflow-visible", () => {
    expect(overflow_visible()).toEqual({
      property: "overflow",
      value: "visible",
    });
  });

  it("should create overflow-scroll", () => {
    expect(overflow_scroll()).toEqual({
      property: "overflow",
      value: "scroll",
    });
  });

  it("should create overflow-x-auto", () => {
    expect(overflow_x_auto()).toEqual({
      property: "overflow-x",
      value: "auto",
    });
  });

  it("should create overflow-y-auto", () => {
    expect(overflow_y_auto()).toEqual({
      property: "overflow-y",
      value: "auto",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with overflow-hidden", () => {
      const css = toCSS(merge(overflow_hidden), ".element");
      expect(css).toContain("overflow: hidden;");
    });
  });
});
