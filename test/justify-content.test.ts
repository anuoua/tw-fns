import { describe, expect, it } from "vitest";
import {
  justify_start,
  justify_end,
  justify_center,
  justify_between,
  justify_around,
  justify_evenly,
  justify_stretch,
  toCSS,
  merge,
} from "../src";

describe("justify-content", () => {
  it("should create justify_start", () => {
    expect(justify_start()).toEqual({
      property: "justify-content",
      value: "flex-start",
    });
  });

  it("should create justify_end", () => {
    expect(justify_end()).toEqual({
      property: "justify-content",
      value: "flex-end",
    });
  });

  it("should create justify_center", () => {
    expect(justify_center()).toEqual({
      property: "justify-content",
      value: "center",
    });
  });

  it("should create justify_between", () => {
    expect(justify_between()).toEqual({
      property: "justify-content",
      value: "space-between",
    });
  });

  it("should create justify_around", () => {
    expect(justify_around()).toEqual({
      property: "justify-content",
      value: "space-around",
    });
  });

  it("should create justify_evenly", () => {
    expect(justify_evenly()).toEqual({
      property: "justify-content",
      value: "space-evenly",
    });
  });

  it("should create justify_stretch", () => {
    expect(justify_stretch()).toEqual({
      property: "justify-content",
      value: "stretch",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with justify-content flex-start", () => {
      const css = toCSS(merge(justify_start), ".element");
      expect(css).toContain("justify-content: flex-start;");
    });

    it("should generate CSS with justify-content center", () => {
      const css = toCSS(merge(justify_center), ".element");
      expect(css).toContain("justify-content: center;");
    });

    it("should generate CSS with justify-content space-between", () => {
      const css = toCSS(merge(justify_between), ".element");
      expect(css).toContain("justify-content: space-between;");
    });

    it("should generate CSS with justify-content space-around", () => {
      const css = toCSS(merge(justify_around), ".element");
      expect(css).toContain("justify-content: space-around;");
    });

    it("should generate CSS with justify-content space-evenly", () => {
      const css = toCSS(merge(justify_evenly), ".element");
      expect(css).toContain("justify-content: space-evenly;");
    });
  });
});