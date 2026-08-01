import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("portfolio content contains no starter metadata or unfinished markers", async () => {
  const [layout, home] = await Promise.all([readFile(new URL("app/layout.tsx", root), "utf8"), readFile(new URL("app/page.tsx", root), "utf8")]);
  assert.doesNotMatch(`${layout}\n${home}`, /Starter Project|codex-preview|TODO|Your site is taking shape/i);
  assert.match(layout, /application\/ld\+json/);
  assert.match(layout, /en-GB/);
});

test("all featured projects expose a source link and an evidence note", async () => {
  const source = await readFile(new URL("data/portfolio.ts", root), "utf8");
  const featured = [...source.matchAll(/featured: true/g)];
  const github = [...source.matchAll(/github: "https:\/\/github\.com\/Saroswat\//g)];
  const evidence = [...source.matchAll(/evidence: "/g)];
  assert.ok(featured.length >= 6);
  assert.ok(github.length >= featured.length);
  assert.ok(evidence.length >= featured.length);
});

test("all project slugs have static case-study generation", async () => {
  const route = await readFile(new URL("app/projects/[slug]/page.tsx", root), "utf8");
  assert.match(route, /generateStaticParams/);
  assert.match(route, /generateMetadata/);
  assert.match(route, /notFound/);
});

test("starter preview directory is empty or removed", async () => {
  try { const entries = await readdir(new URL("app/_sites-preview/", root)); assert.equal(entries.length, 0); } catch (error) { assert.equal(error.code, "ENOENT"); }
});
