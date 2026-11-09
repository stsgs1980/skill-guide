# Skills loaded into this Z.ai Code project

This folder demonstrates how agentskills.io-format skills (obra/superpowers + 12 wondelai
skills) are brought into a Z.ai Code Next.js project as working context.

## Why a folder, not a runtime registry

Z.ai Code's `Skill` tool is a fixed set of runtime capabilities (LLM, VLM, TTS,
image-generation, agent-browser, etc.). It cannot be extended at runtime with
arbitrary `SKILL.md` files. The agentskills.io format (used by obra, wondelai,
mattpocock) is a **markdown instruction** format — instructions an agent reads
as context, not runtime tools.

The bridge: place the `SKILL.md` files in this folder, then reference them from
`AGENTS.md` at the project root. The agent working in this project will load
them as context and apply the procedures/principles when relevant.

## What is loaded

### From obra/superpowers (procedures — *how to work*)

| Slug (informal) | Real skill name | When to apply |
|---|---|---|
| `brainstorming` | `brainstorming` (aka grill-with-docs) | Before any non-trivial work — extract what & why |
| `writing-plans` | `writing-plans` (aka to-spec) | Have a spec, planning multi-step work |
| `executing-plans` | `executing-plans` (aka implement-spec) | Executing a plan inline |
| `tdd` | `test-driven-development` | Before writing any production code |
| `systematic-debugging` | `systematic-debugging` (aka diagnosing-bugs) | On any bug/test failure |
| `requesting-code-review` | `requesting-code-review` + `receiving-code-review` | After feature, before merge |
| `verification` | `verification-before-completion` | Before claiming "done" |

Source: https://github.com/obra/superpowers/tree/main/skills

### From wondelai/skills (principles — *what to know*)

**Code Quality (6):** clean-code, pragmatic-programmer, refactoring-patterns,
software-design-philosophy, working-with-legacy-code, technical-documentation

**Architecture & Systems (6):** clean-architecture, domain-driven-design,
ddia-systems, system-design, release-it, high-perf-browser

**Design & UX (4):** refactoring-ui, ux-heuristics, web-typography, microinteractions

Source: https://github.com/wondelai/skills
Browse: https://skills.wondel.ai/skills/code/ · /architecture/ · /design/

## Install commands (for re-fetching upstream)

```bash
# obra/superpowers — full methodology
npx skills add obra/superpowers --global

# wondelai — individual skills
npx skills add wondelai/skills/clean-code --global
npx skills add wondelai/skills/refactoring-patterns --global
npx skills add wondelai/skills/clean-architecture --global
npx skills add wondelai/skills/high-perf-browser --global
npx skills add wondelai/skills/refactoring-ui --global
# ... etc
```

## How the agent should use this folder

When working in this project, the agent should:

1. **Before non-trivial work** — read `obra/brainstorming/SKILL.md` and apply
   the "Look Before You Ask" procedure.
2. **Before writing code** — read `obra/test-driven-development/SKILL.md` and
   follow the Iron Law (failing test first).
3. **On any bug** — read `obra/systematic-debugging/SKILL.md` and complete the
   4-phase root cause investigation before proposing fixes.
4. **For code quality decisions** — consult the relevant wondelai skill
   (clean-code for readability, refactoring-patterns for structural changes,
   etc.) using the routing rules in each skill's "Quick Diagnostic" section.

## Tier classification of the source repos

See the interactive guide at `/` (this project's home page) for the full
tier-ranking of 15 starred skill-repos and the per-environment recommendation
tables.
