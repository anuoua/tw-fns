import { describe, expect, it } from "vitest";
import {
  aspect_auto,
  aspect_square,
  aspect_video,
  aspect_3_2,
  aspect_4_3,
  aspect_16_9,
  aspect,
  toCSS,
  merge,
  generateThemeCSS,
} from "../src";

describe("aspect-ratio", () => {
  describe("basic utilities", () => {
    it("should create aspect-auto", () => {
      expect(aspect_auto()).toEqual({
        property: "aspect-ratio",
        value: "auto",
      });
    });

    it("should create aspect-square", () => {
      expect(aspect_square()).toEqual({
        property: "aspect-ratio",
        value: "1 / 1",
      });
    });

    it("should create aspect-video", () => {
      expect(aspect_video()).toEqual({
        property: "aspect-ratio",
        value: "var(--aspect-video, 16 / 9)",
      });
    });

    it("should create aspect-3/2", () => {
      expect(aspect_3_2()).toEqual({
        property: "aspect-ratio",
        value: "3 / 2",
      });
    });

    it("should create aspect-4/3", () => {
      expect(aspect_4_3()).toEqual({
        property: "aspect-ratio",
        value: "4 / 3",
      });
    });

    it("should create aspect-16/9", () => {
      expect(aspect_16_9()).toEqual({
        property: "aspect-ratio",
        value: "16 / 9",
      });
    });
  });

  describe("custom values", () => {
    it("should create custom aspect ratio", () => {
      const custom = aspect("5 / 2");
      expect(custom()).toEqual({
        property: "aspect-ratio",
        value: "5 / 2",
      });
    });

    it("should create aspect ratio with calc", () => {
      const custom = aspect("calc(4*3+1)/3");
      expect(custom()).toEqual({
        property: "aspect-ratio",
        value: "calc(4*3+1)/3",
      });
    });

    it("should create aspect ratio with CSS variable", () => {
      const custom = aspect("var(--my-aspect-ratio)");
      expect(custom()).toEqual({
        property: "aspect-ratio",
        value: "var(--my-aspect-ratio)",
      });
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with aspect ratio", () => {
      const css = toCSS(merge(aspect_square, aspect_16_9), ".video");
      expect(css).toContain("aspect-ratio: 1 / 1;");
      expect(css).toContain("aspect-ratio: 16 / 9;");
    });

    it("should generate CSS with custom aspect ratio", () => {
      const css = toCSS(merge(aspect("3 / 2")), ".image");
      expect(css).toContain("aspect-ratio: 3 / 2;");
    });
  });

  describe("theme", () => {
    it("should include aspect-ratio in theme CSS", () => {
      const css = generateThemeCSS();
      expect(css).toContain("--aspect-auto: auto;");
      expect(css).toContain("--aspect-square: 1 / 1;");
      expect(css).toContain("--aspect-video: 16 / 9;");
      expect(css).toContain("--aspect-3-2: 3 / 2;");
      expect(css).toContain("--aspect-4-3: 4 / 3;");
    });
  });
});
