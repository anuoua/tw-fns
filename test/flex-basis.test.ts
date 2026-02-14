import { describe, expect, it } from "vitest";
import {
  basis_0,
  basis_1,
  basis_2,
  basis_3,
  basis_4,
  basis_11,
  basis_12,
  basis_1_2,
  basis_1_3,
  basis_1_4,
  basis_3xs,
  basis_sm,
  basis_auto,
  basis_full,
  basis,
  toCSS,
  merge,
} from "../src";

describe("flex-basis", () => {
  describe("spacing scale", () => {
    it("should create basis_0 with CSS variable", () => {
      expect(basis_0()).toEqual({
        property: "flex-basis",
        value: "var(--spacing-0, 0px)",
      });
    });

    it("should create basis_1 with CSS variable", () => {
      expect(basis_1()).toEqual({
        property: "flex-basis",
        value: "var(--spacing-1, 0.25rem)",
      });
    });

    it("should create basis_4 with CSS variable", () => {
      expect(basis_4()).toEqual({
        property: "flex-basis",
        value: "var(--spacing-4, 1rem)",
      });
    });

    it("should create basis_11 with CSS variable", () => {
      expect(basis_11()).toEqual({
        property: "flex-basis",
        value: "var(--spacing-11, 2.75rem)",
      });
    });
  });

  describe("fractions", () => {
    it("should create basis_1_2", () => {
      expect(basis_1_2()).toEqual({
        property: "flex-basis",
        value: "50%",
      });
    });

    it("should create basis_1_3", () => {
      expect(basis_1_3()).toEqual({
        property: "flex-basis",
        value: "33.333333%",
      });
    });

    it("should create basis_1_4", () => {
      expect(basis_1_4()).toEqual({
        property: "flex-basis",
        value: "25%",
      });
    });
  });

  describe("container widths", () => {
    it("should create basis_3xs with CSS variable", () => {
      expect(basis_3xs()).toEqual({
        property: "flex-basis",
        value: "var(--container-xs3, 16rem)",
      });
    });

    it("should create basis_sm with CSS variable", () => {
      expect(basis_sm()).toEqual({
        property: "flex-basis",
        value: "var(--container-sm, 24rem)",
      });
    });
  });

  describe("special values", () => {
    it("should create basis_auto", () => {
      expect(basis_auto()).toEqual({
        property: "flex-basis",
        value: "auto",
      });
    });

    it("should create basis_full", () => {
      expect(basis_full()).toEqual({
        property: "flex-basis",
        value: "100%",
      });
    });
  });

  describe("custom values", () => {
    it("should create custom basis", () => {
      expect(basis("200px")()).toEqual({
        property: "flex-basis",
        value: "200px",
      });
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with flex-basis", () => {
      const css = toCSS(merge(basis_4), ".element");
      expect(css).toContain("flex-basis: var(--spacing-4, 1rem);");
    });

    it("should generate CSS with custom flex-basis", () => {
      const css = toCSS(merge(basis("50%")), ".element");
      expect(css).toContain("flex-basis: 50%;");
    });
  });
});