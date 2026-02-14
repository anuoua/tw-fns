import { describe, expect, it } from "vitest";
import {
  h_0,
  h_px,
  h_auto,
  h_1,
  h_4,
  h_8,
  h_96,
  h_full,
  h_screen,
  h_min,
  h_max,
  h_fit,
  h_1_2,
  h_1_3,
  h_2_3,
  h_3_4,
  h_11_12,
  h_dvh,
  h_lvh,
  h_svh,
  h_inline,
  h_block,
  toCSS,
  merge,
} from "../src";

describe("height", () => {
  describe("basic values", () => {
    it("should create h_0", () => {
      expect(h_0()).toEqual({
        property: "height",
        value: "0",
      });
    });

    it("should create h_px", () => {
      expect(h_px()).toEqual({
        property: "height",
        value: "1px",
      });
    });

    it("should create h_auto", () => {
      expect(h_auto()).toEqual({
        property: "height",
        value: "auto",
      });
    });
  });

  describe("spacing scale values", () => {
    it("should create h_1", () => {
      expect(h_1()).toEqual({
        property: "height",
        value: "0.25rem",
      });
    });

    it("should create h_4", () => {
      expect(h_4()).toEqual({
        property: "height",
        value: "1rem",
      });
    });

    it("should create h_8", () => {
      expect(h_8()).toEqual({
        property: "height",
        value: "2rem",
      });
    });

    it("should create h_96", () => {
      expect(h_96()).toEqual({
        property: "height",
        value: "24rem",
      });
    });
  });

  describe("special values", () => {
    it("should create h_full", () => {
      expect(h_full()).toEqual({
        property: "height",
        value: "100%",
      });
    });

    it("should create h_screen", () => {
      expect(h_screen()).toEqual({
        property: "height",
        value: "100vh",
      });
    });

    it("should create h_min", () => {
      expect(h_min()).toEqual({
        property: "height",
        value: "min-content",
      });
    });

    it("should create h_max", () => {
      expect(h_max()).toEqual({
        property: "height",
        value: "max-content",
      });
    });

    it("should create h_fit", () => {
      expect(h_fit()).toEqual({
        property: "height",
        value: "fit-content",
      });
    });
  });

  describe("fraction values", () => {
    it("should create h_1_2", () => {
      expect(h_1_2()).toEqual({
        property: "height",
        value: "50%",
      });
    });

    it("should create h_1_3", () => {
      expect(h_1_3()).toEqual({
        property: "height",
        value: "33.333333%",
      });
    });

    it("should create h_2_3", () => {
      expect(h_2_3()).toEqual({
        property: "height",
        value: "66.666667%",
      });
    });

    it("should create h_3_4", () => {
      expect(h_3_4()).toEqual({
        property: "height",
        value: "75%",
      });
    });

    it("should create h_11_12", () => {
      expect(h_11_12()).toEqual({
        property: "height",
        value: "91.666667%",
      });
    });
  });

  describe("dynamic viewport height units", () => {
    it("should create h_dvh", () => {
      expect(h_dvh()).toEqual({
        property: "height",
        value: "100dvh",
      });
    });

    it("should create h_lvh", () => {
      expect(h_lvh()).toEqual({
        property: "height",
        value: "100lvh",
      });
    });

    it("should create h_svh", () => {
      expect(h_svh()).toEqual({
        property: "height",
        value: "100svh",
      });
    });
  });

  describe("logical properties", () => {
    it("should create h_inline", () => {
      expect(h_inline()).toEqual({
        property: "height",
        value: "min-content",
      });
    });

    it("should create h_block", () => {
      expect(h_block()).toEqual({
        property: "height",
        value: "100%",
      });
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with h_4", () => {
      const css = toCSS(merge(h_4), ".element");
      expect(css).toContain("height: 1rem;");
    });

    it("should generate CSS with h_auto", () => {
      const css = toCSS(merge(h_auto), ".element");
      expect(css).toContain("height: auto;");
    });

    it("should generate CSS with h_full", () => {
      const css = toCSS(merge(h_full), ".element");
      expect(css).toContain("height: 100%;");
    });

    it("should generate CSS with h_screen", () => {
      const css = toCSS(merge(h_screen), ".element");
      expect(css).toContain("height: 100vh;");
    });

    it("should generate CSS with h_min", () => {
      const css = toCSS(merge(h_min), ".element");
      expect(css).toContain("height: min-content;");
    });

    it("should generate CSS with h_max", () => {
      const css = toCSS(merge(h_max), ".element");
      expect(css).toContain("height: max-content;");
    });

    it("should generate CSS with h_fit", () => {
      const css = toCSS(merge(h_fit), ".element");
      expect(css).toContain("height: fit-content;");
    });

    it("should generate CSS with h_1_2", () => {
      const css = toCSS(merge(h_1_2), ".element");
      expect(css).toContain("height: 50%;");
    });

    it("should generate CSS with h_2_3", () => {
      const css = toCSS(merge(h_2_3), ".element");
      expect(css).toContain("height: 66.666667%;");
    });

    it("should generate CSS with h_dvh", () => {
      const css = toCSS(merge(h_dvh), ".element");
      expect(css).toContain("height: 100dvh;");
    });

    it("should generate CSS with h_px", () => {
      const css = toCSS(merge(h_px), ".element");
      expect(css).toContain("height: 1px;");
    });

    it("should generate CSS with h_0", () => {
      const css = toCSS(merge(h_0), ".element");
      expect(css).toContain("height: 0;");
    });
  });
});