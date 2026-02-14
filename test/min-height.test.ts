import { describe, expect, it } from "vitest";
import {
  min_h_0,
  min_h_px,
  min_h_full,
  min_h_min,
  min_h_max,
  min_h_fit,
  min_h_1,
  min_h_4,
  min_h_8,
  min_h_96,
  min_h_screen,
  min_h_dvh,
  min_h_lvh,
  min_h_svh,
  toCSS,
  merge,
} from "../src";

describe("min-height", () => {
  describe("basic values", () => {
    it("should create min_h_0", () => {
      expect(min_h_0()).toEqual({
        property: "min-height",
        value: "0",
      });
    });

    it("should create min_h_px", () => {
      expect(min_h_px()).toEqual({
        property: "min-height",
        value: "1px",
      });
    });

    it("should create min_h_full", () => {
      expect(min_h_full()).toEqual({
        property: "min-height",
        value: "100%",
      });
    });

    it("should create min_h_min", () => {
      expect(min_h_min()).toEqual({
        property: "min-height",
        value: "min-content",
      });
    });

    it("should create min_h_max", () => {
      expect(min_h_max()).toEqual({
        property: "min-height",
        value: "max-content",
      });
    });

    it("should create min_h_fit", () => {
      expect(min_h_fit()).toEqual({
        property: "min-height",
        value: "fit-content",
      });
    });
  });

  describe("spacing scale values", () => {
    it("should create min_h_1", () => {
      expect(min_h_1()).toEqual({
        property: "min-height",
        value: "0.25rem",
      });
    });

    it("should create min_h_4", () => {
      expect(min_h_4()).toEqual({
        property: "min-height",
        value: "1rem",
      });
    });

    it("should create min_h_8", () => {
      expect(min_h_8()).toEqual({
        property: "min-height",
        value: "2rem",
      });
    });

    it("should create min_h_96", () => {
      expect(min_h_96()).toEqual({
        property: "min-height",
        value: "24rem",
      });
    });
  });

  describe("screen viewport", () => {
    it("should create min_h_screen", () => {
      expect(min_h_screen()).toEqual({
        property: "min-height",
        value: "100vh",
      });
    });
  });

  describe("dynamic viewport height units", () => {
    it("should create min_h_dvh", () => {
      expect(min_h_dvh()).toEqual({
        property: "min-height",
        value: "100dvh",
      });
    });

    it("should create min_h_lvh", () => {
      expect(min_h_lvh()).toEqual({
        property: "min-height",
        value: "100lvh",
      });
    });

    it("should create min_h_svh", () => {
      expect(min_h_svh()).toEqual({
        property: "min-height",
        value: "100svh",
      });
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with min_h_4", () => {
      const css = toCSS(merge(min_h_4), ".element");
      expect(css).toContain("min-height: 1rem;");
    });

    it("should generate CSS with min_h_full", () => {
      const css = toCSS(merge(min_h_full), ".element");
      expect(css).toContain("min-height: 100%;");
    });

    it("should generate CSS with min_h_min", () => {
      const css = toCSS(merge(min_h_min), ".element");
      expect(css).toContain("min-height: min-content;");
    });

    it("should generate CSS with min_h_max", () => {
      const css = toCSS(merge(min_h_max), ".element");
      expect(css).toContain("min-height: max-content;");
    });

    it("should generate CSS with min_h_fit", () => {
      const css = toCSS(merge(min_h_fit), ".element");
      expect(css).toContain("min-height: fit-content;");
    });

    it("should generate CSS with min_h_screen", () => {
      const css = toCSS(merge(min_h_screen), ".element");
      expect(css).toContain("min-height: 100vh;");
    });

    it("should generate CSS with min_h_dvh", () => {
      const css = toCSS(merge(min_h_dvh), ".element");
      expect(css).toContain("min-height: 100dvh;");
    });

    it("should generate CSS with min_h_px", () => {
      const css = toCSS(merge(min_h_px), ".element");
      expect(css).toContain("min-height: 1px;");
    });

    it("should generate CSS with min_h_0", () => {
      const css = toCSS(merge(min_h_0), ".element");
      expect(css).toContain("min-height: 0;");
    });
  });
});