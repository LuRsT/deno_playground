import { add } from "./adder.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("add", () => {
  assertEquals(add(3, 5), 8);
});
