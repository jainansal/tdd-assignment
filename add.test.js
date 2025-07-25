import { test, expect } from "vitest";
import { add } from "./add";

test("empty string adds to 0", () => {
  expect(add("")).toBe(0);
});

test("single number returns number itself", () => {
  expect(add("1")).toBe(1);
});
