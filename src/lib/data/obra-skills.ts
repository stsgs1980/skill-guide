import type { ObraSkill } from './types'

export const OBRA_SKILLS: ObraSkill[] = [
  {
    slug: 'tdd',
    realName: 'test-driven-development',
    category: 'engineering',
    purpose: 'Use before writing any implementation code.',
    keyTechnique:
      'Iron Law: NO PRODUCTION CODE WITHOUT A FAILING TEST FIRST. Red-Green-Refactor. If you wrote code before the test: delete it, implement fresh.',
    hasEvals: false,
    ironLaw: 'No production code without a failing test first.',
  },
  {
    slug: 'brainstorming',
    realName: 'brainstorming (aka grill-with-docs)',
    category: 'methodology',
    purpose: 'MUST use before any creative work — extract what the human actually wants & why, before building.',
    keyTechnique:
      '"Look Before You Ask" — read the code/docs/context they referred to until you can explain how it works today. Lay out approaches → write a design doc → get approval → hand to writing-plans.',
    hasEvals: true,
  },
  {
    slug: 'systematic-debugging',
    realName: 'systematic-debugging (aka diagnosing-bugs)',
    category: 'engineering',
    purpose: 'Use on any bug/test failure/unexpected behavior BEFORE proposing fixes.',
    keyTechnique:
      'Iron Law: NO FIXES WITHOUT ROOT CAUSE INVESTIGATION FIRST. Four sequential phases: (1) Root Cause Investigation → read errors, reproduce, check git diff, gather evidence. Phases 2-4 only after Phase 1.',
    hasEvals: true,
    ironLaw: 'No fixes without root cause investigation first.',
  },
  {
    slug: 'writing-plans',
    realName: 'writing-plans (aka to-spec)',
    category: 'engineering',
    purpose: 'Use when you have a spec/requirements for a multi-step task, before touching code.',
    keyTechnique:
      'Write a plan for an engineer who has not seen the codebase. Document decisions they cannot infer: which files, names/signatures, values from spec, tests proving each task. Bite-sized tasks = smallest unit with its own test cycle.',
    hasEvals: false,
  },
  {
    slug: 'executing-plans',
    realName: 'executing-plans (aka implement-spec)',
    category: 'engineering',
    purpose: 'Execute an implementation plan inline (yourself, no subagent per task).',
    keyTechnique:
      'The plan already did the thinking — execute it exactly. Keep a ledger that survives your own forgetting. Rulings, not stalls: decide conflicts yourself, record "Ruling: <what> — <why> — <cost if wrong>" and keep going.',
    hasEvals: false,
  },
  {
    slug: 'requesting-code-review',
    realName: 'requesting-code-review + receiving-code-review',
    category: 'engineering',
    purpose: 'Dispatch a code-reviewer subagent after tasks/features/before merge. And handle review feedback with technical rigor.',
    keyTechnique:
      'Dispatch general-purpose subagent with code-reviewer.md template, passing {DESCRIPTION}, {PLAN_OR_REQUIREMENTS}, {BASE_SHA}, {HEAD_SHA} — never your session history. Receiving: READ → UNDERSTAND → VERIFY → EVALUATE → RESPOND. Forbidden: "You are absolutely right!", "Great point!".',
    hasEvals: false,
  },
  {
    slug: 'verification',
    realName: 'verification-before-completion',
    category: 'engineering',
    purpose: 'Before claiming work complete/fixed/passing.',
    keyTechnique: 'Run verification commands, confirm output; evidence before assertions.',
    hasEvals: false,
  },
]
