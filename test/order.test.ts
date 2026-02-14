import { describe, expect, it } from "vitest";
import {
  order_1,
  order_2,
  order_3,
  order_4,
  order_5,
  order_6,
  order_7,
  order_8,
  order_9,
  order_10,
  order_11,
  order_12,
  order_first,
  order_last,
  order_none,
  toCSS,
  merge,
} from "../src";

describe("order", () => {
  it("should create order_1", () => {
    expect(order_1()).toEqual({
      property: "order",
      value: "1",
    });
  });

  it("should create order_2", () => {
    expect(order_2()).toEqual({
      property: "order",
      value: "2",
    });
  });

  it("should create order_3", () => {
    expect(order_3()).toEqual({
      property: "order",
      value: "3",
    });
  });

  it("should create order_4", () => {
    expect(order_4()).toEqual({
      property: "order",
      value: "4",
    });
  });

  it("should create order_5", () => {
    expect(order_5()).toEqual({
      property: "order",
      value: "5",
    });
  });

  it("should create order_6", () => {
    expect(order_6()).toEqual({
      property: "order",
      value: "6",
    });
  });

  it("should create order_7", () => {
    expect(order_7()).toEqual({
      property: "order",
      value: "7",
    });
  });

  it("should create order_8", () => {
    expect(order_8()).toEqual({
      property: "order",
      value: "8",
    });
  });

  it("should create order_9", () => {
    expect(order_9()).toEqual({
      property: "order",
      value: "9",
    });
  });

  it("should create order_10", () => {
    expect(order_10()).toEqual({
      property: "order",
      value: "10",
    });
  });

  it("should create order_11", () => {
    expect(order_11()).toEqual({
      property: "order",
      value: "11",
    });
  });

  it("should create order_12", () => {
    expect(order_12()).toEqual({
      property: "order",
      value: "12",
    });
  });

  it("should create order_first", () => {
    expect(order_first()).toEqual({
      property: "order",
      value: "-9999",
    });
  });

  it("should create order_last", () => {
    expect(order_last()).toEqual({
      property: "order",
      value: "9999",
    });
  });

  it("should create order_none", () => {
    expect(order_none()).toEqual({
      property: "order",
      value: "0",
    });
  });

  describe("CSS generation", () => {
    it("should generate CSS with order 1", () => {
      const css = toCSS(merge(order_1), ".element");
      expect(css).toContain("order: 1;");
    });

    it("should generate CSS with order 12", () => {
      const css = toCSS(merge(order_12), ".element");
      expect(css).toContain("order: 12;");
    });

    it("should generate CSS with order first", () => {
      const css = toCSS(merge(order_first), ".element");
      expect(css).toContain("order: -9999;");
    });

    it("should generate CSS with order last", () => {
      const css = toCSS(merge(order_last), ".element");
      expect(css).toContain("order: 9999;");
    });

    it("should generate CSS with order none", () => {
      const css = toCSS(merge(order_none), ".element");
      expect(css).toContain("order: 0;");
    });
  });
});