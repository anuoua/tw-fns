import { describe, expect, it } from "vitest";
import {
  grow_0,
  grow_1,
  grow_2,
  grow_3,
  grow_4,
  grow_5,
  grow_6,
  grow_7,
  grow_8,
  grow_9,
  grow_10,
  grow_11,
  grow_12,
  grow,
  toCSS,
  merge,
} from "../src";

describe("flex-grow", () => {
  it("should create grow_0", () => {
    expect(grow_0()).toEqual({
      property: "flex-grow",
      value: "0",
    });
  });

  it("should create grow_1", () => {
    expect(grow_1()).toEqual({
      property: "flex-grow",
      value: "1",
    });
  });

  it("should create grow_2", () => {
    expect(grow_2()).toEqual({
      property: "flex-grow",
      value: "2",
    });
  });

  it("should create grow_3", () => {
    expect(grow_3()).toEqual({
      property: "flex-grow",
      value: "3",
    });
  });

  it("should create grow_4", () => {
    expect(grow_4()).toEqual({
      property: "flex-grow",
      value: "4",
    });
  });

  it("should create grow_5", () => {
    expect(grow_5()).toEqual({
      property: "flex-grow",
      value: "5",
    });
  });

  it("should create grow_6", () => {
    expect(grow_6()).toEqual({
      property: "flex-grow",
      value: "6",
    });
  });

  it("should create grow_7", () => {
    expect(grow_7()).toEqual({
      property: "flex-grow",
      value: "7",
    });
  });

  it("should create grow_8", () => {
    expect(grow_8()).toEqual({
      property: "flex-grow",
      value: "8",
    });
  });

  it("should create grow_9", () => {
    expect(grow_9()).toEqual({
      property: "flex-grow",
      value: "9",
    });
  });

  it("should create grow_10", () => {
    expect(grow_10()).toEqual({
      property: "flex-grow",
      value: "10",
    });
  });

  it("should create grow_11", () => {
    expect(grow_11()).toEqual({
      property: "flex-grow",
      value: "11",
    });
  });

  it("should create grow_12", () => {
    expect(grow_12()).toEqual({
      property: "flex-grow",
      value: "12",
    });
  });

  it("should create grow", () => {
    expect(grow()).toEqual({
      property: "flex-grow",
      value: "1",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with flex-grow 0", () => {
      const css = toCSS(merge(grow_0), ".element");
      expect(css).toContain("flex-grow: 0;");
    });

    it("should generate CSS with flex-grow 1", () => {
      const css = toCSS(merge(grow_1), ".element");
      expect(css).toContain("flex-grow: 1;");
    });

    it("should generate CSS with flex-grow 6", () => {
      const css = toCSS(merge(grow_6), ".element");
      expect(css).toContain("flex-grow: 6;");
    });

    it("should generate CSS with flex-grow 12", () => {
      const css = toCSS(merge(grow_12), ".element");
      expect(css).toContain("flex-grow: 12;");
    });
  });
});