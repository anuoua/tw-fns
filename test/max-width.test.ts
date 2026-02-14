import { describe, expect, it } from "vitest";
import {
  max_w_0,
  max_w_none,
  max_w_px,
  max_w_full,
  max_w_min,
  max_w_max,
  max_w_fit,
  max_w_prose,
  max_w_1,
  max_w_4,
  max_w_8,
  max_w_96,
  max_w_screen,
  max_w_1_2,
  max_w_2_3,
  max_w_3_4,
  max_w_11_12,
  max_w_xs,
  max_w_sm,
  max_w_md,
  max_w_lg,
  max_w_xl,
  max_w_2xl,
  max_w_3xl,
  max_w_4xl,
  max_w_5xl,
  max_w_6xl,
  max_w_7xl,
  toCSS,
  merge,
} from "../src";

describe("max-width", () => {
  describe("basic values", () => {
    it("should create max_w_0", () => {
      expect(max_w_0()).toEqual({
        property: "max-width",
        value: "0",
      });
    });

    it("should create max_w_none", () => {
      expect(max_w_none()).toEqual({
        property: "max-width",
        value: "none",
      });
    });

    it("should create max_w_px", () => {
      expect(max_w_px()).toEqual({
        property: "max-width",
        value: "1px",
      });
    });

    it("should create max_w_full", () => {
      expect(max_w_full()).toEqual({
        property: "max-width",
        value: "100%",
      });
    });

    it("should create max_w_min", () => {
      expect(max_w_min()).toEqual({
        property: "max-width",
        value: "min-content",
      });
    });

    it("should create max_w_max", () => {
      expect(max_w_max()).toEqual({
        property: "max-width",
        value: "max-content",
      });
    });

    it("should create max_w_fit", () => {
      expect(max_w_fit()).toEqual({
        property: "max-width",
        value: "fit-content",
      });
    });

    it("should create max_w_prose", () => {
      expect(max_w_prose()).toEqual({
        property: "max-width",
        value: "65ch",
      });
    });
  });

  describe("spacing scale values", () => {
    it("should create max_w_1", () => {
      expect(max_w_1()).toEqual({
        property: "max-width",
        value: "0.25rem",
      });
    });

    it("should create max_w_4", () => {
      expect(max_w_4()).toEqual({
        property: "max-width",
        value: "1rem",
      });
    });

    it("should create max_w_8", () => {
      expect(max_w_8()).toEqual({
        property: "max-width",
        value: "2rem",
      });
    });

    it("should create max_w_96", () => {
      expect(max_w_96()).toEqual({
        property: "max-width",
        value: "24rem",
      });
    });
  });

  describe("screen viewport", () => {
    it("should create max_w_screen", () => {
      expect(max_w_screen()).toEqual({
        property: "max-width",
        value: "100vw",
      });
    });
  });

  describe("fraction values", () => {
    it("should create max_w_1_2", () => {
      expect(max_w_1_2()).toEqual({
        property: "max-width",
        value: "50%",
      });
    });

    it("should create max_w_2_3", () => {
      expect(max_w_2_3()).toEqual({
        property: "max-width",
        value: "66.666667%",
      });
    });

    it("should create max_w_3_4", () => {
      expect(max_w_3_4()).toEqual({
        property: "max-width",
        value: "75%",
      });
    });

    it("should create max_w_11_12", () => {
      expect(max_w_11_12()).toEqual({
        property: "max-width",
        value: "91.666667%",
      });
    });
  });

  describe("common breakpoint max-widths", () => {
    it("should create max_w_xs", () => {
      expect(max_w_xs()).toEqual({
        property: "max-width",
        value: "20rem",
      });
    });

    it("should create max_w_sm", () => {
      expect(max_w_sm()).toEqual({
        property: "max-width",
        value: "24rem",
      });
    });

    it("should create max_w_md", () => {
      expect(max_w_md()).toEqual({
        property: "max-width",
        value: "28rem",
      });
    });

    it("should create max_w_lg", () => {
      expect(max_w_lg()).toEqual({
        property: "max-width",
        value: "32rem",
      });
    });

    it("should create max_w_xl", () => {
      expect(max_w_xl()).toEqual({
        property: "max-width",
        value: "36rem",
      });
    });

    it("should create max_w_2xl", () => {
      expect(max_w_2xl()).toEqual({
        property: "max-width",
        value: "42rem",
      });
    });

    it("should create max_w_3xl", () => {
      expect(max_w_3xl()).toEqual({
        property: "max-width",
        value: "48rem",
      });
    });

    it("should create max_w_4xl", () => {
      expect(max_w_4xl()).toEqual({
        property: "max-width",
        value: "56rem",
      });
    });

    it("should create max_w_5xl", () => {
      expect(max_w_5xl()).toEqual({
        property: "max-width",
        value: "64rem",
      });
    });

    it("should create max_w_6xl", () => {
      expect(max_w_6xl()).toEqual({
        property: "max-width",
        value: "72rem",
      });
    });

    it("should create max_w_7xl", () => {
      expect(max_w_7xl()).toEqual({
        property: "max-width",
        value: "80rem",
      });
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with max_w_4", () => {
      const css = toCSS(merge(max_w_4), ".element");
      expect(css).toContain("max-width: 1rem;");
    });

    it("should generate CSS with max_w_none", () => {
      const css = toCSS(merge(max_w_none), ".element");
      expect(css).toContain("max-width: none;");
    });

    it("should generate CSS with max_w_full", () => {
      const css = toCSS(merge(max_w_full), ".element");
      expect(css).toContain("max-width: 100%;");
    });

    it("should generate CSS with max_w_screen", () => {
      const css = toCSS(merge(max_w_screen), ".element");
      expect(css).toContain("max-width: 100vw;");
    });

    it("should generate CSS with max_w_prose", () => {
      const css = toCSS(merge(max_w_prose), ".element");
      expect(css).toContain("max-width: 65ch;");
    });

    it("should generate CSS with max_w_1_2", () => {
      const css = toCSS(merge(max_w_1_2), ".element");
      expect(css).toContain("max-width: 50%;");
    });

    it("should generate CSS with max_w_2xl", () => {
      const css = toCSS(merge(max_w_2xl), ".element");
      expect(css).toContain("max-width: 42rem;");
    });

    it("should generate CSS with max_w_px", () => {
      const css = toCSS(merge(max_w_px), ".element");
      expect(css).toContain("max-width: 1px;");
    });

    it("should generate CSS with max_w_0", () => {
      const css = toCSS(merge(max_w_0), ".element");
      expect(css).toContain("max-width: 0;");
    });
  });
});