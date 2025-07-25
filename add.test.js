import { test, expect } from "vitest";

test("empty string adds to 0", () => {
  expect(add("")).toBe(0);
});
