import { describe, expect, it } from "vitest";
import {
  min_w_0,
  min_w_px,
  min_w_full,
  min_w_min,
  min_w_max,
  min_w_fit,
  min_w_1,
  min_w_4,
  min_w_8,
  min_w_96,
  min_w_screen,
  toCSS,
  merge,
} from "../src";

describe("min-width", () => {
  describe("basic values", () => {
    it("should create min_w_0", () => {
      expect(min_w_0()).toEqual({
        property: "min-width",
        value: "0",
      });
    });

    it("should create min_w_px", () => {
      expect(min_w_px()).toEqual({
        property: "min-width",
        value: "1px",
      });
    });

    it("should create min_w_full", () => {
      expect(min_w_full()).toEqual({
        property: "min-width",
        value: "100%",
      });
    });

    it("should create min_w_min", () => {
      expect(min_w_min()).toEqual({
        property: "min-width",
        value: "min-content",
      });
    });

    it("should create min_w_max", () => {
      expect(min_w_max()).toEqual({
        property: "min-width",
        value: "max-content",
      });
    });

    it("should create min_w_fit", () => {
      expect(min_w_fit()).toEqual({
        property: "min-width",
        value: "fit-content",
      });
    });
  });

  describe("spacing scale values", () => {
    it("should create min_w_1", () => {
      expect(min_w_1()).toEqual({
        property: "min-width",
        value: "0.25rem",
      });
    });

    it("should create min_w_4", () => {
      expect(min_w_4()).toEqual({
        property: "min-width",
        value: "1rem",
      });
    });

    it("should create min_w_8", () => {
      expect(min_w_8()).toEqual({
        property: "min-width",
        value: "2rem",
      });
    });

    it("should create min_w_96", () => {
      expect(min_w_96()).toEqual({
        property: "min-width",
        value: "24rem",
      });
    });
  });

  describe("screen viewport", () => {
    it("should create min_w_screen", () => {
      expect(min_w_screen()).toEqual({
        property: "min-width",
        value: "100vw",
      });
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with min_w_4", () => {
      const css = toCSS(merge(min_w_4), ".element");
      expect(css).toContain("min-width: 1rem;");
    });

    it("should generate CSS with min_w_full", () => {
      const css = toCSS(merge(min_w_full), ".element");
      expect(css).toContain("min-width: 100%;");
    });

    it("should generate CSS with min_w_min", () => {
      const css = toCSS(merge(min_w_min), ".element");
      expect(css).toContain("min-width: min-content;");
    });

    it("should generate CSS with min_w_max", () => {
      const css = toCSS(merge(min_w_max), ".element");
      expect(css).toContain("min-width: max-content;");
    });

    it("should generate CSS with min_w_fit", () => {
      const css = toCSS(merge(min_w_fit), ".element");
      expect(css).toContain("min-width: fit-content;");
    });

    it("should generate CSS with min_w_screen", () => {
      const css = toCSS(merge(min_w_screen), ".element");
      expect(css).toContain("min-width: 100vw;");
    });

    it("should generate CSS with min_w_px", () => {
      const css = toCSS(merge(min_w_px), ".element");
      expect(css).toContain("min-width: 1px;");
    });

    it("should generate CSS with min_w_0", () => {
      const css = toCSS(merge(min_w_0), ".element");
      expect(css).toContain("min-width: 0;");
    });
  });
});