import { describe, expect, it } from "vitest";
import {
  max_h_0,
  max_h_none,
  max_h_px,
  max_h_full,
  max_h_min,
  max_h_max,
  max_h_fit,
  max_h_screen,
  max_h_1,
  max_h_4,
  max_h_8,
  max_h_96,
  max_h_1_2,
  max_h_2_3,
  max_h_3_4,
  max_h_11_12,
  max_h_dvh,
  max_h_lvh,
  max_h_svh,
  toCSS,
  merge,
} from "../src";

describe("max-height", () => {
  describe("basic values", () => {
    it("should create max_h_0", () => {
      expect(max_h_0()).toEqual({
        property: "max-height",
        value: "0",
      });
    });

    it("should create max_h_none", () => {
      expect(max_h_none()).toEqual({
        property: "max-height",
        value: "none",
      });
    });

    it("should create max_h_px", () => {
      expect(max_h_px()).toEqual({
        property: "max-height",
        value: "1px",
      });
    });

    it("should create max_h_full", () => {
      expect(max_h_full()).toEqual({
        property: "max-height",
        value: "100%",
      });
    });

    it("should create max_h_min", () => {
      expect(max_h_min()).toEqual({
        property: "max-height",
        value: "min-content",
      });
    });

    it("should create max_h_max", () => {
      expect(max_h_max()).toEqual({
        property: "max-height",
        value: "max-content",
      });
    });

    it("should create max_h_fit", () => {
      expect(max_h_fit()).toEqual({
        property: "max-height",
        value: "fit-content",
      });
    });

    it("should create max_h_screen", () => {
      expect(max_h_screen()).toEqual({
        property: "max-height",
        value: "100vh",
      });
    });
  });

  describe("spacing scale values", () => {
    it("should create max_h_1", () => {
      expect(max_h_1()).toEqual({
        property: "max-height",
        value: "0.25rem",
      });
    });

    it("should create max_h_4", () => {
      expect(max_h_4()).toEqual({
        property: "max-height",
        value: "1rem",
      });
    });

    it("should create max_h_8", () => {
      expect(max_h_8()).toEqual({
        property: "max-height",
        value: "2rem",
      });
    });

    it("should create max_h_96", () => {
      expect(max_h_96()).toEqual({
        property: "max-height",
        value: "24rem",
      });
    });
  });

  describe("fraction values", () => {
    it("should create max_h_1_2", () => {
      expect(max_h_1_2()).toEqual({
        property: "max-height",
        value: "50%",
      });
    });

    it("should create max_h_2_3", () => {
      expect(max_h_2_3()).toEqual({
        property: "max-height",
        value: "66.666667%",
      });
    });

    it("should create max_h_3_4", () => {
      expect(max_h_3_4()).toEqual({
        property: "max-height",
        value: "75%",
      });
    });

    it("should create max_h_11_12", () => {
      expect(max_h_11_12()).toEqual({
        property: "max-height",
        value: "91.666667%",
      });
    });
  });

  describe("dynamic viewport height units", () => {
    it("should create max_h_dvh", () => {
      expect(max_h_dvh()).toEqual({
        property: "max-height",
        value: "100dvh",
      });
    });

    it("should create max_h_lvh", () => {
      expect(max_h_lvh()).toEqual({
        property: "max-height",
        value: "100lvh",
      });
    });

    it("should create max_h_svh", () => {
      expect(max_h_svh()).toEqual({
        property: "max-height",
        value: "100svh",
      });
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with max_h_4", () => {
      const css = toCSS(merge(max_h_4), ".element");
      expect(css).toContain("max-height: 1rem;");
    });

    it("should generate CSS with max_h_none", () => {
      const css = toCSS(merge(max_h_none), ".element");
      expect(css).toContain("max-height: none;");
    });

    it("should generate CSS with max_h_full", () => {
      const css = toCSS(merge(max_h_full), ".element");
      expect(css).toContain("max-height: 100%;");
    });

    it("should generate CSS with max_h_screen", () => {
      const css = toCSS(merge(max_h_screen), ".element");
      expect(css).toContain("max-height: 100vh;");
    });

    it("should generate CSS with max_h_1_2", () => {
      const css = toCSS(merge(max_h_1_2), ".element");
      expect(css).toContain("max-height: 50%;");
    });

    it("should generate CSS with max_h_2_3", () => {
      const css = toCSS(merge(max_h_2_3), ".element");
      expect(css).toContain("max-height: 66.666667%;");
    });

    it("should generate CSS with max_h_dvh", () => {
      const css = toCSS(merge(max_h_dvh), ".element");
      expect(css).toContain("max-height: 100dvh;");
    });

    it("should generate CSS with max_h_px", () => {
      const css = toCSS(merge(max_h_px), ".element");
      expect(css).toContain("max-height: 1px;");
    });

    it("should generate CSS with max_h_0", () => {
      const css = toCSS(merge(max_h_0), ".element");
      expect(css).toContain("max-height: 0;");
    });
  });
});