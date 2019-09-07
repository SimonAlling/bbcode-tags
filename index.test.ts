import * as BB from "./src/index";

it("can create a simple start tag", () => {
  expect(BB.start("i")).toBe(`[i]`);
});

it("can create a parameterized start tag", () => {
  expect(BB.start("url", "https://example.com")).toBe(`[url="https://example.com"]`);
});

it("can create an end tag", () => {
  expect(BB.end("i")).toBe(`[/i]`);
});
