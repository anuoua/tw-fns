import { describe, expect, it } from "vitest";
import {
  top_0,
  top_auto,
  top_full,
  right_0,
  bottom_0,
  left_0,
  inset_0,
  inset_auto,
  toCSS,
  merge,
} from "../src";

describe("inset", () => {
  it("should create top-0", () => {
    expect(top_0()).toEqual({
      property: "top",
      value: "0",
    });
  });

  it("should create top-auto", () => {
    expect(top_auto()).toEqual({
      property: "top",
      value: "auto",
    });
  });

  it("should create right-0", () => {
    expect(right_0()).toEqual({
      property: "right",
      value: "0",
    });
  });

  it("should create bottom-0", () => {
    expect(bottom_0()).toEqual({
      property: "bottom",
      value: "0",
    });
  });

  it("should create left-0", () => {
    expect(left_0()).toEqual({
      property: "left",
      value: "0",
    });
  });

  it("should create inset-0", () => {
    expect(inset_0()).toEqual({
      property: "inset",
      value: "0",
    });
  });

  it("should create inset-auto", () => {
    expect(inset_auto()).toEqual({
      property: "inset",
      value: "auto",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with top-0", () => {
      const css = toCSS(merge(top_0), ".element");
      expect(css).toContain("top: 0;");
    });
  });
});
