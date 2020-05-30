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

/**
 * The official website of deno is: https://deno.land/
 * Website remote address: 172.67.163.168:443
 * The official website of Deno does not allow users to access content through IP addresses, 
 * but in some cases, I may need this method to test my personal server.
 */
Deno.test("deno remote address test", async (): Promise<void> => {
  assertEquals(await isUp("http://172.67.163.168:443"), true);
})
