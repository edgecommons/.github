#!/usr/bin/env node
// Regenerate the "Components" tables in profile/README.md from the edgecommons component
// registry, so the org landing page stays in sync as components are added/changed.
//
// Usage: node scripts/generate-profile.mjs [registryJson] [readmeMd]
//   defaults: registry/components.json  profile/README.md
// The workflow checks out edgecommons/registry at ./registry and runs this; the tables between
// the COMPONENTS:START / COMPONENTS:END markers are replaced (the rest of the page is hand-authored).

import { readFileSync, writeFileSync } from "node:fs";

const registryPath = process.argv[2] || "registry/components.json";
const readmePath = process.argv[3] || "profile/README.md";

const LANG = { JAVA: "Java", PYTHON: "Python", RUST: "Rust", TYPESCRIPT: "TypeScript" };
const PLAT = { GREENGRASS: "Greengrass", HOST: "Host", KUBERNETES: "K8s" };

// Ordered category sections. `protocol: true` renders a Protocol column (adapters).
const SECTIONS = [
  { key: "adapter", label: "Adapters", blurb: "southbound, field-device & protocol ingestion", protocol: true },
  { key: "processor", label: "Processors", blurb: "edge compute & stream processing", protocol: false },
  { key: "sink", label: "Sinks", blurb: "northbound delivery", protocol: false },
];

const START =
  "<!-- COMPONENTS:START — generated from edgecommons/registry by scripts/generate-profile.mjs; do not edit by hand -->";
const END = "<!-- COMPONENTS:END -->";

const lang = (c) => LANG[c.language] || c.language;
const plats = (c) => (c.platforms || []).map((p) => PLAT[p] || p).join(" · ") || "—";
const link = (c) => `[**${c.name}**](https://github.com/${c.repo})`;
const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

function section(sec, comps) {
  const rows = comps.filter((c) => c.category === sec.key).sort((a, b) => a.name.localeCompare(b.name));
  if (rows.length === 0) return `*${sec.label} (${sec.blurb}) — coming soon.*`;
  const head = sec.protocol
    ? "| Component | Lang | Protocol | Platforms |\n|-----------|------|----------|-----------|"
    : "| Component | Lang | Platforms |\n|-----------|------|-----------|";
  const body = rows
    .map((c) =>
      sec.protocol
        ? `| ${link(c)} | ${lang(c)} | ${c.protocol || "—"} | ${plats(c)} |`
        : `| ${link(c)} | ${lang(c)} | ${plats(c)} |`,
    )
    .join("\n");
  return `**${sec.label}** — ${sec.blurb}\n\n${head}\n${body}`;
}

const reg = JSON.parse(readFileSync(registryPath, "utf8"));
const comps = reg.components || [];
const block = SECTIONS.map((s) => section(s, comps)).join("\n\n");
const generated = `${START}\n\n${block}\n\n${END}`;

const readme = readFileSync(readmePath, "utf8");
const re = new RegExp(`${escapeRe(START)}[\\s\\S]*?${escapeRe(END)}`);
if (!re.test(readme)) {
  console.error(`ERROR: markers not found in ${readmePath}. Add between the Components heading:\n${START}\n${END}`);
  process.exit(1);
}
const out = readme.replace(re, generated);
writeFileSync(readmePath, out);
console.log(`updated ${readmePath} from ${comps.length} component(s) in ${registryPath}`);
