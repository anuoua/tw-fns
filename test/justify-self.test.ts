import { describe, expect, it } from "vitest";
import {
  justify_self_auto,
  justify_self_start,
  justify_self_end,
  justify_self_center,
  justify_self_stretch,
  toCSS,
  merge,
} from "../src";

describe("justify-self", () => {
  it("should create justify_self_auto", () => {
    expect(justify_self_auto()).toEqual({
      property: "justify-self",
      value: "auto",
    });
  });

  it("should create justify_self_start", () => {
    expect(justify_self_start()).toEqual({
      property: "justify-self",
      value: "start",
    });
  });

  it("should create justify_self_end", () => {
    expect(justify_self_end()).toEqual({
      property: "justify-self",
      value: "end",
    });
  });

  it("should create justify_self_center", () => {
    expect(justify_self_center()).toEqual({
      property: "justify-self",
      value: "center",
    });
  });

  it("should create justify_self_stretch", () => {
    expect(justify_self_stretch()).toEqual({
      property: "justify-self",
      value: "stretch",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with justify-self auto", () => {
      const css = toCSS(merge(justify_self_auto), ".element");
      expect(css).toContain("justify-self: auto;");
    });

    it("should generate CSS with justify-self start", () => {
      const css = toCSS(merge(justify_self_start), ".element");
      expect(css).toContain("justify-self: start;");
    });

    it("should generate CSS with justify-self end", () => {
      const css = toCSS(merge(justify_self_end), ".element");
      expect(css).toContain("justify-self: end;");
    });

    it("should generate CSS with justify-self center", () => {
      const css = toCSS(merge(justify_self_center), ".element");
      expect(css).toContain("justify-self: center;");
    });

    it("should generate CSS with justify-self stretch", () => {
      const css = toCSS(merge(justify_self_stretch), ".element");
      expect(css).toContain("justify-self: stretch;");
    });
  });
});