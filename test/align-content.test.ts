import { describe, expect, it } from "vitest";
import {
  content_start,
  content_end,
  content_center,
  content_between,
  content_around,
  content_evenly,
  content_stretch,
  toCSS,
  merge,
} from "../src";

describe("align-content", () => {
  it("should create content_start", () => {
    expect(content_start()).toEqual({
      property: "align-content",
      value: "flex-start",
    });
  });

  it("should create content_end", () => {
    expect(content_end()).toEqual({
      property: "align-content",
      value: "flex-end",
    });
  });

  it("should create content_center", () => {
    expect(content_center()).toEqual({
      property: "align-content",
      value: "center",
    });
  });

  it("should create content_between", () => {
    expect(content_between()).toEqual({
      property: "align-content",
      value: "space-between",
    });
  });

  it("should create content_around", () => {
    expect(content_around()).toEqual({
      property: "align-content",
      value: "space-around",
    });
  });

  it("should create content_evenly", () => {
    expect(content_evenly()).toEqual({
      property: "align-content",
      value: "space-evenly",
    });
  });

  it("should create content_stretch", () => {
    expect(content_stretch()).toEqual({
      property: "align-content",
      value: "stretch",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with align-content flex-start", () => {
      const css = toCSS(merge(content_start), ".element");
      expect(css).toContain("align-content: flex-start;");
    });

    it("should generate CSS with align-content center", () => {
      const css = toCSS(merge(content_center), ".element");
      expect(css).toContain("align-content: center;");
    });

    it("should generate CSS with align-content space-between", () => {
      const css = toCSS(merge(content_between), ".element");
      expect(css).toContain("align-content: space-between;");
    });

    it("should generate CSS with align-content space-around", () => {
      const css = toCSS(merge(content_around), ".element");
      expect(css).toContain("align-content: space-around;");
    });

    it("should generate CSS with align-content space-evenly", () => {
      const css = toCSS(merge(content_evenly), ".element");
      expect(css).toContain("align-content: space-evenly;");
    });
  });
});