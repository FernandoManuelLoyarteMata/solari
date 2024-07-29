// @ts-check
import { test, expect } from "@playwright/test";

const LOCALHOST = "http://localhost:5173";

test("shows fact and image", async ({ page }) => {
  await page.goto(LOCALHOST);
  const text = await page.getByRole("paragraph");
  const image = await page.getByRole("img");

  await expect(text).toBeVisible();
  await expect(image).toBeVisible();
});
