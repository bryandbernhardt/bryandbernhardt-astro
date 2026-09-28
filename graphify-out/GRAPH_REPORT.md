# Graph Report - bryandbernhardt  (2026-09-27)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 48 nodes · 49 edges · 10 communities (7 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- BaseLayout.astro
- Header.astro
- package.json
- scripts
- tsconfig.json
- astro.config.mjs
- dependencies
- devDependencies
- allowScripts
- engines

## God Nodes (most connected - your core abstractions)
1. `scripts` - 6 edges
2. `toggleMenu()` - 3 edges
3. `closeMenu()` - 2 edges
4. `openMenu()` - 2 edges
5. `setActiveLink()` - 2 edges
6. `syncActiveWithURL()` - 2 edges
7. `astro` - 2 edges
8. `@astrojs/sitemap` - 2 edges
9. `allowScripts` - 2 edges
10. `engines` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (10 total, 3 thin omitted)

### Community 0 - "BaseLayout.astro"
Cohesion: 0.18
Nodes (5): canonicalURL, imageURL, socialLinks, stackHighlights, src_styles_global

### Community 1 - "Header.astro"
Cohesion: 0.43
Nodes (6): closeMenu(), navItems, openMenu(), setActiveLink(), syncActiveWithURL(), toggleMenu()

### Community 2 - "package.json"
Cohesion: 0.33
Nodes (5): name, type, version, @astrojs/check, typescript

### Community 3 - "scripts"
Cohesion: 0.33
Nodes (6): scripts, astro, build, check, dev, preview

### Community 4 - "tsconfig.json"
Cohesion: 0.40
Nodes (4): astro/tsconfigs/strict, exclude, extends, include

### Community 6 - "dependencies"
Cohesion: 0.67
Nodes (3): dependencies, astro, @astrojs/sitemap

### Community 7 - "devDependencies"
Cohesion: 0.67
Nodes (3): devDependencies, @astrojs/check, typescript

## Knowledge Gaps
- **25 isolated node(s):** `canonicalURL`, `imageURL`, `socialLinks`, `stackHighlights`, `navItems` (+20 more)
  These have ≤1 connection - possible missing edges. (Counts symbols only; 28 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `scripts` connect `scripts` to `package.json`?**
  _High betweenness centrality (0.097) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.042) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.042) - this node is a cross-community bridge._
- **What connects `canonicalURL`, `imageURL`, `socialLinks` to the rest of the system?**
  _25 weakly-connected nodes found - possible documentation gaps or missing edges._