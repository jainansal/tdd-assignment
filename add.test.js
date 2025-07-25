import { test, expect } from "vitest";
import { add } from "./add";

test("empty string adds to 0", () => {
  expect(add("")).toBe(0);
});

test("single number returns number itself", () => {
  expect(add("1")).toBe(1);
});

test("passing (3,7) returns 10", () => {
  expect(add("3,7")).toBe(10);
});

test("addition of multiple numbers. 1,4,5 = 10", () => {
  expect(add("1,4,5")).toBe(10);
});

test("addition of multiple numbers. 10,4,1,9,3,8 = 35", () => {
  expect(add("10,4,1,9,3,8")).toBe(35);
});

test("addition of new lines returns the sum of the numbers. '1\n2' should return 3", () => {
  expect(add("1\n2")).toBe(3);
});

test("numbers separated with a combination of new line and comma returns their sum. '1\n2,4,7\n1' should return 15", () => {
  expect(add("1\n2,4,7\n1")).toBe(15);
});

test("numbers separated with a combination of multiple new lines and comma returns their sum. '1\n\n2,7\n1' should return 11", () => {
  expect(add("1\n\n2,7\n1")).toBe(11);
});

test("passing a delimiter in the given format should return the sum of numbers. '//;\n1;4;3' should return 8", () => {
  expect(add("//;\n1;4;3")).toBe(8);
});

test("passing a negative number throws an exception in the format 'negative numbers not allowed <list_of_numbers>'", () => {
  expect(add("1,-1")).toThrowError("negative numbers not allowed");
});

test("passing a negative number throws an exception in the format 'negative numbers not allowed <list_of_numbers>' (2)", () => {
  expect(add("//;\n1;45;-10")).toThrowError("negative numbers not allowed");
});
