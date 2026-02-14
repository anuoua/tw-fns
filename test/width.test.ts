import { describe, expect, it } from "vitest";
import {
  w_0,
  w_px,
  w_auto,
  w_1,
  w_4,
  w_8,
  w_96,
  w_full,
  w_screen,
  w_min,
  w_max,
  w_fit,
  w_1_2,
  w_1_3,
  w_2_3,
  w_3_4,
  w_11_12,
  w_inline,
  w_block,
  toCSS,
  merge,
} from "../src";

describe("width", () => {
  describe("basic values", () => {
    it("should create w_0", () => {
      expect(w_0()).toEqual({
        property: "width",
        value: "0",
      });
    });

    it("should create w_px", () => {
      expect(w_px()).toEqual({
        property: "width",
        value: "1px",
      });
    });

    it("should create w_auto", () => {
      expect(w_auto()).toEqual({
        property: "width",
        value: "auto",
      });
    });
  });

  describe("spacing scale values", () => {
    it("should create w_1", () => {
      expect(w_1()).toEqual({
        property: "width",
        value: "0.25rem",
      });
    });

    it("should create w_4", () => {
      expect(w_4()).toEqual({
        property: "width",
        value: "1rem",
      });
    });

    it("should create w_8", () => {
      expect(w_8()).toEqual({
        property: "width",
        value: "2rem",
      });
    });

    it("should create w_96", () => {
      expect(w_96()).toEqual({
        property: "width",
        value: "24rem",
      });
    });
  });

  describe("special values", () => {
    it("should create w_full", () => {
      expect(w_full()).toEqual({
        property: "width",
        value: "100%",
      });
    });

    it("should create w_screen", () => {
      expect(w_screen()).toEqual({
        property: "width",
        value: "100vw",
      });
    });

    it("should create w_min", () => {
      expect(w_min()).toEqual({
        property: "width",
        value: "min-content",
      });
    });

    it("should create w_max", () => {
      expect(w_max()).toEqual({
        property: "width",
        value: "max-content",
      });
    });

    it("should create w_fit", () => {
      expect(w_fit()).toEqual({
        property: "width",
        value: "fit-content",
      });
    });
  });

  describe("fraction values", () => {
    it("should create w_1_2", () => {
      expect(w_1_2()).toEqual({
        property: "width",
        value: "50%",
      });
    });

    it("should create w_1_3", () => {
      expect(w_1_3()).toEqual({
        property: "width",
        value: "33.333333%",
      });
    });

    it("should create w_2_3", () => {
      expect(w_2_3()).toEqual({
        property: "width",
        value: "66.666667%",
      });
    });

    it("should create w_3_4", () => {
      expect(w_3_4()).toEqual({
        property: "width",
        value: "75%",
      });
    });

    it("should create w_11_12", () => {
      expect(w_11_12()).toEqual({
        property: "width",
        value: "91.666667%",
      });
    });
  });

  describe("logical properties", () => {
    it("should create w_inline", () => {
      expect(w_inline()).toEqual({
        property: "width",
        value: "min-content",
      });
    });

    it("should create w_block", () => {
      expect(w_block()).toEqual({
        property: "width",
        value: "100%",
      });
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with w_4", () => {
      const css = toCSS(merge(w_4), ".element");
      expect(css).toContain("width: 1rem;");
    });

    it("should generate CSS with w_auto", () => {
      const css = toCSS(merge(w_auto), ".element");
      expect(css).toContain("width: auto;");
    });

    it("should generate CSS with w_full", () => {
      const css = toCSS(merge(w_full), ".element");
      expect(css).toContain("width: 100%;");
    });

    it("should generate CSS with w_screen", () => {
      const css = toCSS(merge(w_screen), ".element");
      expect(css).toContain("width: 100vw;");
    });

    it("should generate CSS with w_min", () => {
      const css = toCSS(merge(w_min), ".element");
      expect(css).toContain("width: min-content;");
    });

    it("should generate CSS with w_max", () => {
      const css = toCSS(merge(w_max), ".element");
      expect(css).toContain("width: max-content;");
    });

    it("should generate CSS with w_fit", () => {
      const css = toCSS(merge(w_fit), ".element");
      expect(css).toContain("width: fit-content;");
    });

    it("should generate CSS with w_1_2", () => {
      const css = toCSS(merge(w_1_2), ".element");
      expect(css).toContain("width: 50%;");
    });

    it("should generate CSS with w_2_3", () => {
      const css = toCSS(merge(w_2_3), ".element");
      expect(css).toContain("width: 66.666667%;");
    });

    it("should generate CSS with w_px", () => {
      const css = toCSS(merge(w_px), ".element");
      expect(css).toContain("width: 1px;");
    });

    it("should generate CSS with w_0", () => {
      const css = toCSS(merge(w_0), ".element");
      expect(css).toContain("width: 0;");
    });
  });
});