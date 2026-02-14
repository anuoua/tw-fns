import { describe, expect, it } from "vitest";
import { isolate, isolation_auto, toCSS, merge } from "../src";

describe("isolation", () => {
  it("should create isolate", () => {
    expect(isolate()).toEqual({
      property: "isolation",
      value: "isolate",
    });
  });

  it("should create isolation-auto", () => {
    expect(isolation_auto()).toEqual({
      property: "isolation",
      value: "auto",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with isolate", () => {
      const css = toCSS(merge(isolate), ".element");
      expect(css).toContain("isolation: isolate;");
    });
  });
});
