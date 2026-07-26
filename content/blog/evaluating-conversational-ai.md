---
title: "What 'evaluating a chatbot' actually involves"
date: "2026-07-24"
excerpt: "Accuracy metrics tell you almost nothing about whether a conversational system is good. Some notes on what does."
tags: ["conversational-ai", "evaluation"]
---

A recurring question in this line of work: **how do you know if a chatbot is actually good?**

It's tempting to reach for a single accuracy number, but conversational systems fail in ways that a leaderboard score doesn't capture:

1. **Consistency across turns.** A model can answer any single question correctly and still contradict itself two turns later.
2. **Calibrated uncertainty.** A confidently wrong answer is worse than an honest "I don't know" — but most evaluations don't distinguish the two.
3. **Robustness to phrasing.** The same underlying question, asked three different ways, should get the same underlying answer.
4. **Failure gracefully, not silently.** When the system is out of its depth, does it say so, or does it hallucinate forward?

None of these show up in a simple pass/fail accuracy metric. Building an evaluation framework that actually reflects them means combining automated checks (consistency probes, adversarial rephrasing) with structured human review — and being honest that some of it just doesn't automate well yet.

More on the specific methodology in a future post.
