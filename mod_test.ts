import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { isUp } from "./mod.ts";

Deno.test("should be up", async (): Promise<void> => {
  assertEquals(await isUp("https://google.com"), true);
});
Deno.test("should be down", async (): Promise<void> => {
  assertEquals(
    await isUp(`https://43rj90oq${Math.random().toString()}.com`),
    false,
  );
});
