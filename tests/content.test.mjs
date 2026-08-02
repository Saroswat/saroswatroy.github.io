import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("portfolio metadata is complete", async () => {
  const [layout, home] = await Promise.all([readFile(new URL("app/layout.tsx", root), "utf8"), readFile(new URL("app/page.tsx", root), "utf8")]);
  assert.doesNotMatch(`${layout}\n${home}`, /lorem ipsum|coming soon|TBD/i);
  assert.match(layout, /application\/ld\+json/);
  assert.match(layout, /en-GB/);
});

test("all featured projects expose a source link and a result label", async () => {
  const source = await readFile(new URL("data/portfolio.ts", root), "utf8");
  const featured = [...source.matchAll(/featured: true/g)];
  const github = [...source.matchAll(/github: "https:\/\/github\.com\/Saroswat\//g)];
  const proof = [...source.matchAll(/proof: "/g)];
  assert.ok(featured.length >= 6);
  assert.ok(github.length >= featured.length);
  assert.ok(proof.length >= featured.length);
});

test("public pages contain finished copy", async () => {
  const files = await Promise.all([
    readFile(new URL("app/page.tsx", root), "utf8"),
    readFile(new URL("app/projects/page.tsx", root), "utf8"),
    readFile(new URL("app/projects/[slug]/page.tsx", root), "utf8"),
    readFile(new URL("app/resume/page.tsx", root), "utf8"),
    readFile(new URL("app/skills/page.tsx", root), "utf8"),
  ]);
  assert.doesNotMatch(files.join("\n"), /lorem ipsum|coming soon|TBD/i);
});

test("all project slugs have static case-study generation", async () => {
  const route = await readFile(new URL("app/projects/[slug]/page.tsx", root), "utf8");
  assert.match(route, /generateStaticParams/);
  assert.match(route, /generateMetadata/);
  assert.match(route, /notFound/);
});

test("certification archive contains the complete supplied record", async () => {
  const source = await readFile(new URL("data/portfolio.ts", root), "utf8");
  const certificationSection = source.slice(source.indexOf("const certificationRecords"));
  const records = [...certificationSection.matchAll(/^  \["/gm)];
  assert.equal(records.length, 99);
  assert.doesNotMatch(certificationSection, /status:/i);
  assert.match(certificationSection, /IBM Cybersecurity Analyst - Professional Certificate/);
  assert.match(certificationSection, /Cyber Ninja - Cyber Security Course/);
});
