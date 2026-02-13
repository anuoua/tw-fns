import { describe, expect, it } from "vitest";
import { createVariantStyleFn } from "../src/core/variants";
import { createStyle } from "../src/core/style";
import type { VariantType } from "../src/core/types";

describe("variants", () => {
  describe("createVariantStyleFn", () => {
    it("should create a variant style function", () => {
      const styleFn = createStyle("color", "#fff");
      const variantStyleFn = createVariantStyleFn(styleFn, {
        type: "pseudo",
        value: "hover",
        selector: "&:hover",
      } as any);

      const result = variantStyleFn();

      expect(result.styles).toEqual({ property: "color", value: "#fff" });
      expect(result.variant).toEqual({
        type: "pseudo",
        value: "hover",
        selector: "&:hover",
      });
    });

    it("should create lazy variant function", () => {
      const styleFn = createStyle("color", "#fff");
      const hover = createVariantStyleFn(styleFn, {
        type: "pseudo",
        value: "hover",
        selector: "&:hover",
      } as any);

      const result1 = hover();
      const result2 = hover();

      expect(result1).toEqual(result2);
    });
  });

  describe("variant types", () => {
    it("should support media variants", () => {
      const styleFn = createStyle("color", "#fff");
      const media = createVariantStyleFn(styleFn, {
        type: "media",
        value: "sm",
        selector: "@media (min-width: 640px)",
      } as any);

      const result = media();

      expect(result.variant?.type).toBe("media");
      expect(result.variant?.value).toBe("sm");
    });

    it("should support pseudo variants", () => {
      const styleFn = createStyle("color", "#fff");
      const pseudo = createVariantStyleFn(styleFn, {
        type: "pseudo",
        value: "hover",
        selector: "&:hover",
      } as any);

      const result = pseudo();

      expect(result.variant?.type).toBe("pseudo");
      expect(result.variant?.value).toBe("hover");
    });

    it("should support container variants", () => {
      const styleFn = createStyle("color", "#fff");
      const container = createVariantStyleFn(styleFn, {
        type: "container",
        value: "sm",
        containerName: "sidebar",
        selector: "@container sidebar (min-width: 640px)",
      } as any);

      const result = container();

      expect(result.variant?.type).toBe("container");
      expect(result.variant?.value).toBe("sm");
      expect(result.variant?.containerName).toBe("sidebar");
    });

    it("should support group variants", () => {
      const styleFn = createStyle("color", "#fff");
      const group = createVariantStyleFn(styleFn, {
        type: "group",
        value: "hover",
        groupName: "item",
        selector: ".group-item:hover &",
      } as any);

      const result = group();

      expect(result.variant?.type).toBe("group");
      expect(result.variant?.value).toBe("hover");
      expect(result.variant?.groupName).toBe("item");
    });

    it("should support peer variants", () => {
      const styleFn = createStyle("color", "#fff");
      const peer = createVariantStyleFn(styleFn, {
        type: "peer",
        value: "checked",
        peerName: "email",
        selector: ".peer-email:checked &",
      } as any);

      const result = peer();

      expect(result.variant?.type).toBe("peer");
      expect(result.variant?.value).toBe("checked");
      expect(result.variant?.peerName).toBe("email");
    });

    it("should support attribute variants", () => {
      const styleFn = createStyle("color", "#fff");
      const attribute = createVariantStyleFn(styleFn, {
        type: "attribute",
        value: "data-active",
        selector: "&[data-active]",
      } as any);

      const result = attribute();

      expect(result.variant?.type).toBe("attribute");
      expect(result.variant?.value).toBe("data-active");
    });

    it("should support feature variants", () => {
      const styleFn = createStyle("color", "#fff");
      const feature = createVariantStyleFn(styleFn, {
        type: "feature",
        value: "(prefers-reduced-motion: reduce)",
        selector: "@media (prefers-reduced-motion: reduce)",
      } as any);

      const result = feature();

      expect(result.variant?.type).toBe("feature");
      expect(result.variant?.value).toBe("(prefers-reduced-motion: reduce)");
    });
  });
});
