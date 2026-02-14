import { describe, expect, it } from "vitest";
import {
  place_content_start,
  place_content_end,
  place_content_center,
  place_content_between,
  place_content_around,
  place_content_evenly,
  place_content_stretch,
  toCSS,
  merge,
} from "../src";

describe("place-content", () => {
  it("should create place_content_start", () => {
    expect(place_content_start()).toEqual({
      property: "place-content",
      value: "start",
    });
  });

  it("should create place_content_end", () => {
    expect(place_content_end()).toEqual({
      property: "place-content",
      value: "end",
    });
  });

  it("should create place_content_center", () => {
    expect(place_content_center()).toEqual({
      property: "place-content",
      value: "center",
    });
  });

  it("should create place_content_between", () => {
    expect(place_content_between()).toEqual({
      property: "place-content",
      value: "space-between",
    });
  });

  it("should create place_content_around", () => {
    expect(place_content_around()).toEqual({
      property: "place-content",
      value: "space-around",
    });
  });

  it("should create place_content_evenly", () => {
    expect(place_content_evenly()).toEqual({
      property: "place-content",
      value: "space-evenly",
    });
  });

  it("should create place_content_stretch", () => {
    expect(place_content_stretch()).toEqual({
      property: "place-content",
      value: "stretch",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with place-content start", () => {
      const css = toCSS(merge(place_content_start), ".element");
      expect(css).toContain("place-content: start;");
    });

    it("should generate CSS with place-content center", () => {
      const css = toCSS(merge(place_content_center), ".element");
      expect(css).toContain("place-content: center;");
    });

    it("should generate CSS with place-content space-between", () => {
      const css = toCSS(merge(place_content_between), ".element");
      expect(css).toContain("place-content: space-between;");
    });

    it("should generate CSS with place-content space-around", () => {
      const css = toCSS(merge(place_content_around), ".element");
      expect(css).toContain("place-content: space-around;");
    });

    it("should generate CSS with place-content space-evenly", () => {
      const css = toCSS(merge(place_content_evenly), ".element");
      expect(css).toContain("place-content: space-evenly;");
    });
  });
});