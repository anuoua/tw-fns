import { describe, expect, it } from "vitest";
import {
  m_0,
  m_px,
  m_auto,
  m_1,
  m_4,
  m_8,
  m_96,
  m_neg_0,
  m_neg_px,
  m_neg_1,
  m_neg_4,
  m_neg_8,
  m_neg_96,
  mx_0,
  mx_px,
  mx_auto,
  mx_4,
  mx_8,
  mx_neg_0,
  mx_neg_px,
  mx_neg_4,
  mx_neg_8,
  my_0,
  my_px,
  my_auto,
  my_4,
  my_8,
  my_neg_0,
  my_neg_px,
  my_neg_4,
  my_neg_8,
  mt_0,
  mt_px,
  mt_auto,
  mt_4,
  mt_8,
  mt_neg_0,
  mt_neg_px,
  mt_neg_4,
  mt_neg_8,
  mr_0,
  mr_px,
  mr_auto,
  mr_4,
  mr_8,
  mr_neg_0,
  mr_neg_px,
  mr_neg_4,
  mr_neg_8,
  mb_0,
  mb_px,
  mb_auto,
  mb_4,
  mb_8,
  mb_neg_0,
  mb_neg_px,
  mb_neg_4,
  mb_neg_8,
  ml_0,
  ml_px,
  ml_auto,
  ml_4,
  ml_8,
  ml_neg_0,
  ml_neg_px,
  ml_neg_4,
  ml_neg_8,
  ms_0,
  ms_px,
  ms_auto,
  ms_4,
  ms_8,
  ms_neg_0,
  ms_neg_px,
  ms_neg_4,
  ms_neg_8,
  me_0,
  me_px,
  me_auto,
  me_4,
  me_8,
  me_neg_0,
  me_neg_px,
  me_neg_4,
  me_neg_8,
  toCSS,
  merge,
} from "../src";

describe("margin", () => {
  describe("all sides (m)", () => {
    it("should create m_0", () => {
      expect(m_0()).toEqual({
        property: "margin",
        value: "0",
      });
    });

    it("should create m_px", () => {
      expect(m_px()).toEqual({
        property: "margin",
        value: "1px",
      });
    });

    it("should create m_auto", () => {
      expect(m_auto()).toEqual({
        property: "margin",
        value: "auto",
      });
    });

    it("should create m_1", () => {
      expect(m_1()).toEqual({
        property: "margin",
        value: "0.25rem",
      });
    });

    it("should create m_4", () => {
      expect(m_4()).toEqual({
        property: "margin",
        value: "1rem",
      });
    });

    it("should create m_8", () => {
      expect(m_8()).toEqual({
        property: "margin",
        value: "2rem",
      });
    });

    it("should create m_96", () => {
      expect(m_96()).toEqual({
        property: "margin",
        value: "24rem",
      });
    });

    it("should create m_neg_0", () => {
      expect(m_neg_0()).toEqual({
        property: "margin",
        value: "0",
      });
    });

    it("should create m_neg_px", () => {
      expect(m_neg_px()).toEqual({
        property: "margin",
        value: "-1px",
      });
    });

    it("should create m_neg_1", () => {
      expect(m_neg_1()).toEqual({
        property: "margin",
        value: "-0.25rem",
      });
    });

    it("should create m_neg_4", () => {
      expect(m_neg_4()).toEqual({
        property: "margin",
        value: "-1rem",
      });
    });

    it("should create m_neg_8", () => {
      expect(m_neg_8()).toEqual({
        property: "margin",
        value: "-2rem",
      });
    });

    it("should create m_neg_96", () => {
      expect(m_neg_96()).toEqual({
        property: "margin",
        value: "-24rem",
      });
    });
  });

  describe("horizontal (mx)", () => {
    it("should create mx_0", () => {
      expect(mx_0()).toEqual([
        { property: "margin-left", value: "0" },
        { property: "margin-right", value: "0" },
      ]);
    });

    it("should create mx_px", () => {
      expect(mx_px()).toEqual([
        { property: "margin-left", value: "1px" },
        { property: "margin-right", value: "1px" },
      ]);
    });

    it("should create mx_auto", () => {
      expect(mx_auto()).toEqual([
        { property: "margin-left", value: "auto" },
        { property: "margin-right", value: "auto" },
      ]);
    });

    it("should create mx_4", () => {
      expect(mx_4()).toEqual([
        { property: "margin-left", value: "1rem" },
        { property: "margin-right", value: "1rem" },
      ]);
    });

    it("should create mx_8", () => {
      expect(mx_8()).toEqual([
        { property: "margin-left", value: "2rem" },
        { property: "margin-right", value: "2rem" },
      ]);
    });

    it("should create mx_neg_0", () => {
      expect(mx_neg_0()).toEqual([
        { property: "margin-left", value: "0" },
        { property: "margin-right", value: "0" },
      ]);
    });

    it("should create mx_neg_px", () => {
      expect(mx_neg_px()).toEqual([
        { property: "margin-left", value: "-1px" },
        { property: "margin-right", value: "-1px" },
      ]);
    });

    it("should create mx_neg_4", () => {
      expect(mx_neg_4()).toEqual([
        { property: "margin-left", value: "-1rem" },
        { property: "margin-right", value: "-1rem" },
      ]);
    });

    it("should create mx_neg_8", () => {
      expect(mx_neg_8()).toEqual([
        { property: "margin-left", value: "-2rem" },
        { property: "margin-right", value: "-2rem" },
      ]);
    });
  });

  describe("vertical (my)", () => {
    it("should create my_0", () => {
      expect(my_0()).toEqual([
        { property: "margin-top", value: "0" },
        { property: "margin-bottom", value: "0" },
      ]);
    });

    it("should create my_px", () => {
      expect(my_px()).toEqual([
        { property: "margin-top", value: "1px" },
        { property: "margin-bottom", value: "1px" },
      ]);
    });

    it("should create my_auto", () => {
      expect(my_auto()).toEqual([
        { property: "margin-top", value: "auto" },
        { property: "margin-bottom", value: "auto" },
      ]);
    });

    it("should create my_4", () => {
      expect(my_4()).toEqual([
        { property: "margin-top", value: "1rem" },
        { property: "margin-bottom", value: "1rem" },
      ]);
    });

    it("should create my_8", () => {
      expect(my_8()).toEqual([
        { property: "margin-top", value: "2rem" },
        { property: "margin-bottom", value: "2rem" },
      ]);
    });

    it("should create my_neg_0", () => {
      expect(my_neg_0()).toEqual([
        { property: "margin-top", value: "0" },
        { property: "margin-bottom", value: "0" },
      ]);
    });

    it("should create my_neg_px", () => {
      expect(my_neg_px()).toEqual([
        { property: "margin-top", value: "-1px" },
        { property: "margin-bottom", value: "-1px" },
      ]);
    });

    it("should create my_neg_4", () => {
      expect(my_neg_4()).toEqual([
        { property: "margin-top", value: "-1rem" },
        { property: "margin-bottom", value: "-1rem" },
      ]);
    });

    it("should create my_neg_8", () => {
      expect(my_neg_8()).toEqual([
        { property: "margin-top", value: "-2rem" },
        { property: "margin-bottom", value: "-2rem" },
      ]);
    });
  });

  describe("top (mt)", () => {
    it("should create mt_0", () => {
      expect(mt_0()).toEqual({
        property: "margin-top",
        value: "0",
      });
    });

    it("should create mt_px", () => {
      expect(mt_px()).toEqual({
        property: "margin-top",
        value: "1px",
      });
    });

    it("should create mt_auto", () => {
      expect(mt_auto()).toEqual({
        property: "margin-top",
        value: "auto",
      });
    });

    it("should create mt_4", () => {
      expect(mt_4()).toEqual({
        property: "margin-top",
        value: "1rem",
      });
    });

    it("should create mt_8", () => {
      expect(mt_8()).toEqual({
        property: "margin-top",
        value: "2rem",
      });
    });

    it("should create mt_neg_0", () => {
      expect(mt_neg_0()).toEqual({
        property: "margin-top",
        value: "0",
      });
    });

    it("should create mt_neg_px", () => {
      expect(mt_neg_px()).toEqual({
        property: "margin-top",
        value: "-1px",
      });
    });

    it("should create mt_neg_4", () => {
      expect(mt_neg_4()).toEqual({
        property: "margin-top",
        value: "-1rem",
      });
    });

    it("should create mt_neg_8", () => {
      expect(mt_neg_8()).toEqual({
        property: "margin-top",
        value: "-2rem",
      });
    });
  });

  describe("right (mr)", () => {
    it("should create mr_0", () => {
      expect(mr_0()).toEqual({
        property: "margin-right",
        value: "0",
      });
    });

    it("should create mr_px", () => {
      expect(mr_px()).toEqual({
        property: "margin-right",
        value: "1px",
      });
    });

    it("should create mr_auto", () => {
      expect(mr_auto()).toEqual({
        property: "margin-right",
        value: "auto",
      });
    });

    it("should create mr_4", () => {
      expect(mr_4()).toEqual({
        property: "margin-right",
        value: "1rem",
      });
    });

    it("should create mr_8", () => {
      expect(mr_8()).toEqual({
        property: "margin-right",
        value: "2rem",
      });
    });

    it("should create mr_neg_0", () => {
      expect(mr_neg_0()).toEqual({
        property: "margin-right",
        value: "0",
      });
    });

    it("should create mr_neg_px", () => {
      expect(mr_neg_px()).toEqual({
        property: "margin-right",
        value: "-1px",
      });
    });

    it("should create mr_neg_4", () => {
      expect(mr_neg_4()).toEqual({
        property: "margin-right",
        value: "-1rem",
      });
    });

    it("should create mr_neg_8", () => {
      expect(mr_neg_8()).toEqual({
        property: "margin-right",
        value: "-2rem",
      });
    });
  });

  describe("bottom (mb)", () => {
    it("should create mb_0", () => {
      expect(mb_0()).toEqual({
        property: "margin-bottom",
        value: "0",
      });
    });

    it("should create mb_px", () => {
      expect(mb_px()).toEqual({
        property: "margin-bottom",
        value: "1px",
      });
    });

    it("should create mb_auto", () => {
      expect(mb_auto()).toEqual({
        property: "margin-bottom",
        value: "auto",
      });
    });

    it("should create mb_4", () => {
      expect(mb_4()).toEqual({
        property: "margin-bottom",
        value: "1rem",
      });
    });

    it("should create mb_8", () => {
      expect(mb_8()).toEqual({
        property: "margin-bottom",
        value: "2rem",
      });
    });

    it("should create mb_neg_0", () => {
      expect(mb_neg_0()).toEqual({
        property: "margin-bottom",
        value: "0",
      });
    });

    it("should create mb_neg_px", () => {
      expect(mb_neg_px()).toEqual({
        property: "margin-bottom",
        value: "-1px",
      });
    });

    it("should create mb_neg_4", () => {
      expect(mb_neg_4()).toEqual({
        property: "margin-bottom",
        value: "-1rem",
      });
    });

    it("should create mb_neg_8", () => {
      expect(mb_neg_8()).toEqual({
        property: "margin-bottom",
        value: "-2rem",
      });
    });
  });

  describe("left (ml)", () => {
    it("should create ml_0", () => {
      expect(ml_0()).toEqual({
        property: "margin-left",
        value: "0",
      });
    });

    it("should create ml_px", () => {
      expect(ml_px()).toEqual({
        property: "margin-left",
        value: "1px",
      });
    });

    it("should create ml_auto", () => {
      expect(ml_auto()).toEqual({
        property: "margin-left",
        value: "auto",
      });
    });

    it("should create ml_4", () => {
      expect(ml_4()).toEqual({
        property: "margin-left",
        value: "1rem",
      });
    });

    it("should create ml_8", () => {
      expect(ml_8()).toEqual({
        property: "margin-left",
        value: "2rem",
      });
    });

    it("should create ml_neg_0", () => {
      expect(ml_neg_0()).toEqual({
        property: "margin-left",
        value: "0",
      });
    });

    it("should create ml_neg_px", () => {
      expect(ml_neg_px()).toEqual({
        property: "margin-left",
        value: "-1px",
      });
    });

    it("should create ml_neg_4", () => {
      expect(ml_neg_4()).toEqual({
        property: "margin-left",
        value: "-1rem",
      });
    });

    it("should create ml_neg_8", () => {
      expect(ml_neg_8()).toEqual({
        property: "margin-left",
        value: "-2rem",
      });
    });
  });

  describe("inline-start (ms)", () => {
    it("should create ms_0", () => {
      expect(ms_0()).toEqual({
        property: "margin-inline-start",
        value: "0",
      });
    });

    it("should create ms_px", () => {
      expect(ms_px()).toEqual({
        property: "margin-inline-start",
        value: "1px",
      });
    });

    it("should create ms_auto", () => {
      expect(ms_auto()).toEqual({
        property: "margin-inline-start",
        value: "auto",
      });
    });

    it("should create ms_4", () => {
      expect(ms_4()).toEqual({
        property: "margin-inline-start",
        value: "1rem",
      });
    });

    it("should create ms_8", () => {
      expect(ms_8()).toEqual({
        property: "margin-inline-start",
        value: "2rem",
      });
    });

    it("should create ms_neg_0", () => {
      expect(ms_neg_0()).toEqual({
        property: "margin-inline-start",
        value: "0",
      });
    });

    it("should create ms_neg_px", () => {
      expect(ms_neg_px()).toEqual({
        property: "margin-inline-start",
        value: "-1px",
      });
    });

    it("should create ms_neg_4", () => {
      expect(ms_neg_4()).toEqual({
        property: "margin-inline-start",
        value: "-1rem",
      });
    });

    it("should create ms_neg_8", () => {
      expect(ms_neg_8()).toEqual({
        property: "margin-inline-start",
        value: "-2rem",
      });
    });
  });

  describe("inline-end (me)", () => {
    it("should create me_0", () => {
      expect(me_0()).toEqual({
        property: "margin-inline-end",
        value: "0",
      });
    });

    it("should create me_px", () => {
      expect(me_px()).toEqual({
        property: "margin-inline-end",
        value: "1px",
      });
    });

    it("should create me_auto", () => {
      expect(me_auto()).toEqual({
        property: "margin-inline-end",
        value: "auto",
      });
    });

    it("should create me_4", () => {
      expect(me_4()).toEqual({
        property: "margin-inline-end",
        value: "1rem",
      });
    });

    it("should create me_8", () => {
      expect(me_8()).toEqual({
        property: "margin-inline-end",
        value: "2rem",
      });
    });

    it("should create me_neg_0", () => {
      expect(me_neg_0()).toEqual({
        property: "margin-inline-end",
        value: "0",
      });
    });

    it("should create me_neg_px", () => {
      expect(me_neg_px()).toEqual({
        property: "margin-inline-end",
        value: "-1px",
      });
    });

    it("should create me_neg_4", () => {
      expect(me_neg_4()).toEqual({
        property: "margin-inline-end",
        value: "-1rem",
      });
    });

    it("should create me_neg_8", () => {
      expect(me_neg_8()).toEqual({
        property: "margin-inline-end",
        value: "-2rem",
      });
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with margin", () => {
      const css = toCSS(merge(m_4), ".element");
      expect(css).toContain("margin: 1rem;");
    });

    it("should generate CSS with m_auto", () => {
      const css = toCSS(merge(m_auto), ".element");
      expect(css).toContain("margin: auto;");
    });

    it("should generate CSS with m_neg_4", () => {
      const css = toCSS(merge(m_neg_4), ".element");
      expect(css).toContain("margin: -1rem;");
    });

    it("should generate CSS with mx", () => {
      const css = toCSS(merge(mx_4), ".element");
      expect(css).toContain("margin-left: 1rem;");
      expect(css).toContain("margin-right: 1rem;");
    });

    it("should generate CSS with mx_auto", () => {
      const css = toCSS(merge(mx_auto), ".element");
      expect(css).toContain("margin-left: auto;");
      expect(css).toContain("margin-right: auto;");
    });

    it("should generate CSS with mx_neg_4", () => {
      const css = toCSS(merge(mx_neg_4), ".element");
      expect(css).toContain("margin-left: -1rem;");
      expect(css).toContain("margin-right: -1rem;");
    });

    it("should generate CSS with my", () => {
      const css = toCSS(merge(my_4), ".element");
      expect(css).toContain("margin-top: 1rem;");
      expect(css).toContain("margin-bottom: 1rem;");
    });

    it("should generate CSS with my_auto", () => {
      const css = toCSS(merge(my_auto), ".element");
      expect(css).toContain("margin-top: auto;");
      expect(css).toContain("margin-bottom: auto;");
    });

    it("should generate CSS with my_neg_4", () => {
      const css = toCSS(merge(my_neg_4), ".element");
      expect(css).toContain("margin-top: -1rem;");
      expect(css).toContain("margin-bottom: -1rem;");
    });

    it("should generate CSS with mt", () => {
      const css = toCSS(merge(mt_4), ".element");
      expect(css).toContain("margin-top: 1rem;");
    });

    it("should generate CSS with mt_auto", () => {
      const css = toCSS(merge(mt_auto), ".element");
      expect(css).toContain("margin-top: auto;");
    });

    it("should generate CSS with mt_neg_4", () => {
      const css = toCSS(merge(mt_neg_4), ".element");
      expect(css).toContain("margin-top: -1rem;");
    });

    it("should generate CSS with mr", () => {
      const css = toCSS(merge(mr_4), ".element");
      expect(css).toContain("margin-right: 1rem;");
    });

    it("should generate CSS with mr_auto", () => {
      const css = toCSS(merge(mr_auto), ".element");
      expect(css).toContain("margin-right: auto;");
    });

    it("should generate CSS with mr_neg_4", () => {
      const css = toCSS(merge(mr_neg_4), ".element");
      expect(css).toContain("margin-right: -1rem;");
    });

    it("should generate CSS with mb", () => {
      const css = toCSS(merge(mb_4), ".element");
      expect(css).toContain("margin-bottom: 1rem;");
    });

    it("should generate CSS with mb_auto", () => {
      const css = toCSS(merge(mb_auto), ".element");
      expect(css).toContain("margin-bottom: auto;");
    });

    it("should generate CSS with mb_neg_4", () => {
      const css = toCSS(merge(mb_neg_4), ".element");
      expect(css).toContain("margin-bottom: -1rem;");
    });

    it("should generate CSS with ml", () => {
      const css = toCSS(merge(ml_4), ".element");
      expect(css).toContain("margin-left: 1rem;");
    });

    it("should generate CSS with ml_auto", () => {
      const css = toCSS(merge(ml_auto), ".element");
      expect(css).toContain("margin-left: auto;");
    });

    it("should generate CSS with ml_neg_4", () => {
      const css = toCSS(merge(ml_neg_4), ".element");
      expect(css).toContain("margin-left: -1rem;");
    });

    it("should generate CSS with ms", () => {
      const css = toCSS(merge(ms_4), ".element");
      expect(css).toContain("margin-inline-start: 1rem;");
    });

    it("should generate CSS with ms_auto", () => {
      const css = toCSS(merge(ms_auto), ".element");
      expect(css).toContain("margin-inline-start: auto;");
    });

    it("should generate CSS with ms_neg_4", () => {
      const css = toCSS(merge(ms_neg_4), ".element");
      expect(css).toContain("margin-inline-start: -1rem;");
    });

    it("should generate CSS with me", () => {
      const css = toCSS(merge(me_4), ".element");
      expect(css).toContain("margin-inline-end: 1rem;");
    });

    it("should generate CSS with me_auto", () => {
      const css = toCSS(merge(me_auto), ".element");
      expect(css).toContain("margin-inline-end: auto;");
    });

    it("should generate CSS with me_neg_4", () => {
      const css = toCSS(merge(me_neg_4), ".element");
      expect(css).toContain("margin-inline-end: -1rem;");
    });

    it("should generate CSS with m_px", () => {
      const css = toCSS(merge(m_px), ".element");
      expect(css).toContain("margin: 1px;");
    });

    it("should generate CSS with m_neg_px", () => {
      const css = toCSS(merge(m_neg_px), ".element");
      expect(css).toContain("margin: -1px;");
    });

    it("should generate CSS with mx_px", () => {
      const css = toCSS(merge(mx_px), ".element");
      expect(css).toContain("margin-left: 1px;");
      expect(css).toContain("margin-right: 1px;");
    });

    it("should generate CSS with mx_neg_px", () => {
      const css = toCSS(merge(mx_neg_px), ".element");
      expect(css).toContain("margin-left: -1px;");
      expect(css).toContain("margin-right: -1px;");
    });

    it("should generate CSS with my_px", () => {
      const css = toCSS(merge(my_px), ".element");
      expect(css).toContain("margin-top: 1px;");
      expect(css).toContain("margin-bottom: 1px;");
    });

    it("should generate CSS with my_neg_px", () => {
      const css = toCSS(merge(my_neg_px), ".element");
      expect(css).toContain("margin-top: -1px;");
      expect(css).toContain("margin-bottom: -1px;");
    });

    it("should generate CSS with mt_px", () => {
      const css = toCSS(merge(mt_px), ".element");
      expect(css).toContain("margin-top: 1px;");
    });

    it("should generate CSS with mt_neg_px", () => {
      const css = toCSS(merge(mt_neg_px), ".element");
      expect(css).toContain("margin-top: -1px;");
    });

    it("should generate CSS with mr_px", () => {
      const css = toCSS(merge(mr_px), ".element");
      expect(css).toContain("margin-right: 1px;");
    });

    it("should generate CSS with mr_neg_px", () => {
      const css = toCSS(merge(mr_neg_px), ".element");
      expect(css).toContain("margin-right: -1px;");
    });

    it("should generate CSS with mb_px", () => {
      const css = toCSS(merge(mb_px), ".element");
      expect(css).toContain("margin-bottom: 1px;");
    });

    it("should generate CSS with mb_neg_px", () => {
      const css = toCSS(merge(mb_neg_px), ".element");
      expect(css).toContain("margin-bottom: -1px;");
    });

    it("should generate CSS with ml_px", () => {
      const css = toCSS(merge(ml_px), ".element");
      expect(css).toContain("margin-left: 1px;");
    });

    it("should generate CSS with ml_neg_px", () => {
      const css = toCSS(merge(ml_neg_px), ".element");
      expect(css).toContain("margin-left: -1px;");
    });

    it("should generate CSS with ms_px", () => {
      const css = toCSS(merge(ms_px), ".element");
      expect(css).toContain("margin-inline-start: 1px;");
    });

    it("should generate CSS with ms_neg_px", () => {
      const css = toCSS(merge(ms_neg_px), ".element");
      expect(css).toContain("margin-inline-start: -1px;");
    });

    it("should generate CSS with me_px", () => {
      const css = toCSS(merge(me_px), ".element");
      expect(css).toContain("margin-inline-end: 1px;");
    });

    it("should generate CSS with me_neg_px", () => {
      const css = toCSS(merge(me_neg_px), ".element");
      expect(css).toContain("margin-inline-end: -1px;");
    });
  });
});