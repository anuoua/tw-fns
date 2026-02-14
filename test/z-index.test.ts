import { describe, expect, it } from "vitest";
import {
  z_0,
  z_10,
  z_20,
  z_30,
  z_40,
  z_50,
  z_auto,
  toCSS,
  merge,
} from "../src";

describe("z-index", () => {
  it("should create z-0", () => {
    expect(z_0()).toEqual({
      property: "z-index",
      value: "0",
    });
  });

  it("should create z-10", () => {
    expect(z_10()).toEqual({
      property: "z-index",
      value: "10",
    });
  });

  it("should create z-20", () => {
    expect(z_20()).toEqual({
      property: "z-index",
      value: "20",
    });
  });

  it("should create z-30", () => {
    expect(z_30()).toEqual({
      property: "z-index",
      value: "30",
    });
  });

  it("should create z-40", () => {
    expect(z_40()).toEqual({
      property: "z-index",
      value: "40",
    });
  });

  it("should create z-50", () => {
    expect(z_50()).toEqual({
      property: "z-index",
      value: "50",
    });
  });

  it("should create z-auto", () => {
    expect(z_auto()).toEqual({
      property: "z-index",
      value: "auto",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with z-10", () => {
      const css = toCSS(merge(z_10), ".element");
      expect(css).toContain("z-index: 10;");
    });
  });
});
