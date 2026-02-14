import { describe, expect, it } from "vitest";
import {
  p_0,
  p_px,
  p_1,
  p_4,
  p_8,
  p_96,
  px_0,
  px_px,
  px_4,
  px_8,
  py_0,
  py_px,
  py_4,
  py_8,
  pt_0,
  pt_px,
  pt_4,
  pt_8,
  pr_0,
  pr_px,
  pr_4,
  pr_8,
  pb_0,
  pb_px,
  pb_4,
  pb_8,
  pl_0,
  pl_px,
  pl_4,
  pl_8,
  ps_0,
  ps_px,
  ps_4,
  ps_8,
  pe_0,
  pe_px,
  pe_4,
  pe_8,
  toCSS,
  merge,
} from "../src";

describe("padding", () => {
  describe("all sides (p)", () => {
    it("should create p_0", () => {
      expect(p_0()).toEqual({
        property: "padding",
        value: "0",
      });
    });

    it("should create p_px", () => {
      expect(p_px()).toEqual({
        property: "padding",
        value: "1px",
      });
    });

    it("should create p_1", () => {
      expect(p_1()).toEqual({
        property: "padding",
        value: "0.25rem",
      });
    });

    it("should create p_4", () => {
      expect(p_4()).toEqual({
        property: "padding",
        value: "1rem",
      });
    });

    it("should create p_8", () => {
      expect(p_8()).toEqual({
        property: "padding",
        value: "2rem",
      });
    });

    it("should create p_96", () => {
      expect(p_96()).toEqual({
        property: "padding",
        value: "24rem",
      });
    });
  });

  describe("horizontal (px)", () => {
    it("should create px_0", () => {
      expect(px_0()).toEqual([
        { property: "padding-left", value: "0" },
        { property: "padding-right", value: "0" },
      ]);
    });

    it("should create px_px", () => {
      expect(px_px()).toEqual([
        { property: "padding-left", value: "1px" },
        { property: "padding-right", value: "1px" },
      ]);
    });

    it("should create px_4", () => {
      expect(px_4()).toEqual([
        { property: "padding-left", value: "1rem" },
        { property: "padding-right", value: "1rem" },
      ]);
    });

    it("should create px_8", () => {
      expect(px_8()).toEqual([
        { property: "padding-left", value: "2rem" },
        { property: "padding-right", value: "2rem" },
      ]);
    });
  });

  describe("vertical (py)", () => {
    it("should create py_0", () => {
      expect(py_0()).toEqual([
        { property: "padding-top", value: "0" },
        { property: "padding-bottom", value: "0" },
      ]);
    });

    it("should create py_px", () => {
      expect(py_px()).toEqual([
        { property: "padding-top", value: "1px" },
        { property: "padding-bottom", value: "1px" },
      ]);
    });

    it("should create py_4", () => {
      expect(py_4()).toEqual([
        { property: "padding-top", value: "1rem" },
        { property: "padding-bottom", value: "1rem" },
      ]);
    });

    it("should create py_8", () => {
      expect(py_8()).toEqual([
        { property: "padding-top", value: "2rem" },
        { property: "padding-bottom", value: "2rem" },
      ]);
    });
  });

  describe("top (pt)", () => {
    it("should create pt_0", () => {
      expect(pt_0()).toEqual({
        property: "padding-top",
        value: "0",
      });
    });

    it("should create pt_px", () => {
      expect(pt_px()).toEqual({
        property: "padding-top",
        value: "1px",
      });
    });

    it("should create pt_4", () => {
      expect(pt_4()).toEqual({
        property: "padding-top",
        value: "1rem",
      });
    });

    it("should create pt_8", () => {
      expect(pt_8()).toEqual({
        property: "padding-top",
        value: "2rem",
      });
    });
  });

  describe("right (pr)", () => {
    it("should create pr_0", () => {
      expect(pr_0()).toEqual({
        property: "padding-right",
        value: "0",
      });
    });

    it("should create pr_px", () => {
      expect(pr_px()).toEqual({
        property: "padding-right",
        value: "1px",
      });
    });

    it("should create pr_4", () => {
      expect(pr_4()).toEqual({
        property: "padding-right",
        value: "1rem",
      });
    });

    it("should create pr_8", () => {
      expect(pr_8()).toEqual({
        property: "padding-right",
        value: "2rem",
      });
    });
  });

  describe("bottom (pb)", () => {
    it("should create pb_0", () => {
      expect(pb_0()).toEqual({
        property: "padding-bottom",
        value: "0",
      });
    });

    it("should create pb_px", () => {
      expect(pb_px()).toEqual({
        property: "padding-bottom",
        value: "1px",
      });
    });

    it("should create pb_4", () => {
      expect(pb_4()).toEqual({
        property: "padding-bottom",
        value: "1rem",
      });
    });

    it("should create pb_8", () => {
      expect(pb_8()).toEqual({
        property: "padding-bottom",
        value: "2rem",
      });
    });
  });

  describe("left (pl)", () => {
    it("should create pl_0", () => {
      expect(pl_0()).toEqual({
        property: "padding-left",
        value: "0",
      });
    });

    it("should create pl_px", () => {
      expect(pl_px()).toEqual({
        property: "padding-left",
        value: "1px",
      });
    });

    it("should create pl_4", () => {
      expect(pl_4()).toEqual({
        property: "padding-left",
        value: "1rem",
      });
    });

    it("should create pl_8", () => {
      expect(pl_8()).toEqual({
        property: "padding-left",
        value: "2rem",
      });
    });
  });

  describe("inline-start (ps)", () => {
    it("should create ps_0", () => {
      expect(ps_0()).toEqual({
        property: "padding-inline-start",
        value: "0",
      });
    });

    it("should create ps_px", () => {
      expect(ps_px()).toEqual({
        property: "padding-inline-start",
        value: "1px",
      });
    });

    it("should create ps_4", () => {
      expect(ps_4()).toEqual({
        property: "padding-inline-start",
        value: "1rem",
      });
    });

    it("should create ps_8", () => {
      expect(ps_8()).toEqual({
        property: "padding-inline-start",
        value: "2rem",
      });
    });
  });

  describe("inline-end (pe)", () => {
    it("should create pe_0", () => {
      expect(pe_0()).toEqual({
        property: "padding-inline-end",
        value: "0",
      });
    });

    it("should create pe_px", () => {
      expect(pe_px()).toEqual({
        property: "padding-inline-end",
        value: "1px",
      });
    });

    it("should create pe_4", () => {
      expect(pe_4()).toEqual({
        property: "padding-inline-end",
        value: "1rem",
      });
    });

    it("should create pe_8", () => {
      expect(pe_8()).toEqual({
        property: "padding-inline-end",
        value: "2rem",
      });
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with padding", () => {
      const css = toCSS(merge(p_4), ".element");
      expect(css).toContain("padding: 1rem;");
    });

    it("should generate CSS with px", () => {
      const css = toCSS(merge(px_4), ".element");
      expect(css).toContain("padding-left: 1rem;");
      expect(css).toContain("padding-right: 1rem;");
    });

    it("should generate CSS with py", () => {
      const css = toCSS(merge(py_4), ".element");
      expect(css).toContain("padding-top: 1rem;");
      expect(css).toContain("padding-bottom: 1rem;");
    });

    it("should generate CSS with pt", () => {
      const css = toCSS(merge(pt_4), ".element");
      expect(css).toContain("padding-top: 1rem;");
    });

    it("should generate CSS with pr", () => {
      const css = toCSS(merge(pr_4), ".element");
      expect(css).toContain("padding-right: 1rem;");
    });

    it("should generate CSS with pb", () => {
      const css = toCSS(merge(pb_4), ".element");
      expect(css).toContain("padding-bottom: 1rem;");
    });

    it("should generate CSS with pl", () => {
      const css = toCSS(merge(pl_4), ".element");
      expect(css).toContain("padding-left: 1rem;");
    });

    it("should generate CSS with ps", () => {
      const css = toCSS(merge(ps_4), ".element");
      expect(css).toContain("padding-inline-start: 1rem;");
    });

    it("should generate CSS with pe", () => {
      const css = toCSS(merge(pe_4), ".element");
      expect(css).toContain("padding-inline-end: 1rem;");
    });

    it("should generate CSS with p_px", () => {
      const css = toCSS(merge(p_px), ".element");
      expect(css).toContain("padding: 1px;");
    });

    it("should generate CSS with px_px", () => {
      const css = toCSS(merge(px_px), ".element");
      expect(css).toContain("padding-left: 1px;");
      expect(css).toContain("padding-right: 1px;");
    });

    it("should generate CSS with py_px", () => {
      const css = toCSS(merge(py_px), ".element");
      expect(css).toContain("padding-top: 1px;");
      expect(css).toContain("padding-bottom: 1px;");
    });

    it("should generate CSS with pt_px", () => {
      const css = toCSS(merge(pt_px), ".element");
      expect(css).toContain("padding-top: 1px;");
    });

    it("should generate CSS with pr_px", () => {
      const css = toCSS(merge(pr_px), ".element");
      expect(css).toContain("padding-right: 1px;");
    });

    it("should generate CSS with pb_px", () => {
      const css = toCSS(merge(pb_px), ".element");
      expect(css).toContain("padding-bottom: 1px;");
    });

    it("should generate CSS with pl_px", () => {
      const css = toCSS(merge(pl_px), ".element");
      expect(css).toContain("padding-left: 1px;");
    });

    it("should generate CSS with ps_px", () => {
      const css = toCSS(merge(ps_px), ".element");
      expect(css).toContain("padding-inline-start: 1px;");
    });

    it("should generate CSS with pe_px", () => {
      const css = toCSS(merge(pe_px), ".element");
      expect(css).toContain("padding-inline-end: 1px;");
    });
  });
});