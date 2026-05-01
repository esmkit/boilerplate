import { expect, test } from "bun:test";

import { add } from "../src/index";

test("add returns the sum of two numbers", () => {
  expect(add(1, 2)).toBe(3);
});
