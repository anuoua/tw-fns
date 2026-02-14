import { describe, expect, it } from "vitest";
import {
  shrink_0,
  shrink_1,
  shrink_2,
  shrink_3,
  shrink_4,
  shrink_5,
  shrink_6,
  shrink_7,
  shrink_8,
  shrink_9,
  shrink_10,
  shrink_11,
  shrink_12,
  shrink,
  toCSS,
  merge,
} from "../src";

describe("flex-shrink", () => {
  it("should create shrink_0", () => {
    expect(shrink_0()).toEqual({
      property: "flex-shrink",
      value: "0",
    });
  });

  it("should create shrink_1", () => {
    expect(shrink_1()).toEqual({
      property: "flex-shrink",
      value: "1",
    });
  });

  it("should create shrink_2", () => {
    expect(shrink_2()).toEqual({
      property: "flex-shrink",
      value: "2",
    });
  });

  it("should create shrink_3", () => {
    expect(shrink_3()).toEqual({
      property: "flex-shrink",
      value: "3",
    });
  });

  it("should create shrink_4", () => {
    expect(shrink_4()).toEqual({
      property: "flex-shrink",
      value: "4",
    });
  });

  it("should create shrink_5", () => {
    expect(shrink_5()).toEqual({
      property: "flex-shrink",
      value: "5",
    });
  });

  it("should create shrink_6", () => {
    expect(shrink_6()).toEqual({
      property: "flex-shrink",
      value: "6",
    });
  });

  it("should create shrink_7", () => {
    expect(shrink_7()).toEqual({
      property: "flex-shrink",
      value: "7",
    });
  });

  it("should create shrink_8", () => {
    expect(shrink_8()).toEqual({
      property: "flex-shrink",
      value: "8",
    });
  });

  it("should create shrink_9", () => {
    expect(shrink_9()).toEqual({
      property: "flex-shrink",
      value: "9",
    });
  });

  it("should create shrink_10", () => {
    expect(shrink_10()).toEqual({
      property: "flex-shrink",
      value: "10",
    });
  });

  it("should create shrink_11", () => {
    expect(shrink_11()).toEqual({
      property: "flex-shrink",
      value: "11",
    });
  });

  it("should create shrink_12", () => {
    expect(shrink_12()).toEqual({
      property: "flex-shrink",
      value: "12",
    });
  });

  it("should create shrink", () => {
    expect(shrink()).toEqual({
      property: "flex-shrink",
      value: "1",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with flex-shrink 0", () => {
      const css = toCSS(merge(shrink_0), ".element");
      expect(css).toContain("flex-shrink: 0;");
    });

    it("should generate CSS with flex-shrink 1", () => {
      const css = toCSS(merge(shrink_1), ".element");
      expect(css).toContain("flex-shrink: 1;");
    });

    it("should generate CSS with flex-shrink 6", () => {
      const css = toCSS(merge(shrink_6), ".element");
      expect(css).toContain("flex-shrink: 6;");
    });

    it("should generate CSS with flex-shrink 12", () => {
      const css = toCSS(merge(shrink_12), ".element");
      expect(css).toContain("flex-shrink: 12;");
    });
  });
});