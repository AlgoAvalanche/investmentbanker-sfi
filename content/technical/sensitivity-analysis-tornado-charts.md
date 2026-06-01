---
title: "Sensitivity Analysis: Tornado Charts and What Senior Bankers Actually Want"
description: "Sensitivity analysis separates credible DCF work from guesswork. Learn tornado charts, data tables, WACC sensitivity, and what actually impresses senior bankers."
primary_keyword: "sensitivity analysis"
secondary_keywords: ["tornado chart", "data table", "WACC sensitivity", "terminal value sensitivity", "scenario analysis"]
category: "technical"
date: "2026-05-19"
author: "Sterling Prentice"
internal_links: ["/technical/dcf-valuation-step-by-step/", "/technical/lbo-modeling-how-sponsors-think/", "/technical/football-field-charts/"]
---

# Sensitivity Analysis: Tornado Charts and What Senior Bankers Actually Want

Sensitivity analysis is the piece of financial modeling that separates people who understand what they built from people who built a spreadsheet and hope no one asks hard questions. A DCF without sensitivity analysis is a single-point answer to an inherently uncertain question. It is, in the words of one MD who reviewed my work early in my career, "a precise expression of your ignorance."

Every [DCF](/technical/dcf-valuation-step-by-step/) and [LBO model](/technical/lbo-modeling-how-sponsors-think/) includes assumptions that could reasonably be different - the WACC, the terminal growth rate, the margin trajectory, the revenue growth rate. Sensitivity analysis asks: how much does the output change when those assumptions change? The answer either confirms that the conclusion is robust or reveals that it rests on a knife's edge. Both are useful. Hiding the answer because you're afraid of the knife's edge is how you lose credibility with senior people.

---

## What Sensitivity Analysis Is Actually Testing

Before building tables and charts, be clear about what you're testing. There are two categories:

**Parameter sensitivity:** How does the valuation change when a single input variable changes, holding all others constant? This is the classic one-dimensional sensitivity: "If WACC moves from 9% to 11%, what happens to DCF equity value per share?" Useful for understanding which inputs matter most.

**Scenario analysis:** How does the valuation change when a coherent set of assumptions changes simultaneously? A "downside scenario" might combine lower revenue growth, compressed margins, and a higher discount rate - all consistent with a deteriorating business environment. A "base case" and "upside case" follow the same logic. The outputs reflect how the business might perform in different environments, not just what happens when you wiggle one dial.

The two are related but distinct. Sensitivity tables test parameter uncertainty. Scenario analysis tests narrative uncertainty. You need both.

A common error in junior analyst work: presenting sensitivity on WACC and terminal growth rate without sensitivity on the business assumptions themselves. WACC sensitivity is important, but the bigger value driver in most models is the revenue and margin trajectory. Bankers who have seen many models know this. Presenting a WACC sensitivity table as the headline sensitivity analysis suggests the analyst does not fully understand the model's value drivers.

---

## The Two-Variable Data Table: Standard Execution

The workhorse of investment banking sensitivity analysis is the two-variable Excel data table. In a DCF, the canonical version tests WACC (x-axis) against terminal growth rate (y-axis), showing implied equity value per share in each cell.

Construction in Excel:

1. Build your base case DCF with a single-cell WACC input and a single-cell terminal growth rate input
2. Set up a grid with WACC values across the top row and terminal growth rates down the left column
3. In the top-left corner cell of the output grid, reference the equity value per share output from the DCF
4. Select the full grid, go to Data - What-If Analysis - Data Table
5. Enter the row input cell (the WACC cell in your model) and the column input cell (the terminal growth rate cell)

The result: a table where each cell shows equity value per share at the corresponding WACC/terminal growth rate combination. Add conditional formatting (green for values above current price, red for below) and you have a readable sensitivity output in minutes.

Standard ranges for a mature company DCF:
- WACC: base case +/- 100-150bps in 25-50bp increments
- Terminal growth rate: base case +/- 100bps, typically from 1.5% to 3.5% for a US company

For a high-growth company where the terminal growth rate assumption is more consequential, extend the range. For a company in a structurally declining industry, bias the terminal growth rate range downward.

The key formatting principle: highlight the base case cell clearly so readers can orient themselves. Bankers presenting this in a board meeting should be able to point to the base case, explain that the highlighted region shows the range of outcomes under reasonable assumptions, and describe what scenario each corner of the table represents.

---

## Revenue and Margin Sensitivity: What Actually Moves the Number

After WACC and terminal growth, the next sensitivity tables should address the core business drivers. In most models, these are:

**Revenue growth rate sensitivity.** A table with revenue CAGR assumptions (base case +/- 2-4 percentage points) versus EBITDA margin (base case +/- 3-5 percentage points) showing implied equity value or IRR. This table is often more informative than the WACC table because it quantifies the value of the growth story.

**Exit multiple sensitivity (for LBOs).** In an [LBO model](/technical/lbo-modeling-how-sponsors-think/), the sponsor's IRR is often most sensitive to exit multiple and entry multiple (leverage at entry). Build a two-variable table: exit EV/EBITDA on one axis, entry leverage or entry multiple on the other. Show IRR in each cell. Color the cells that meet the sponsor's hurdle rate (typically 20-25% IRR). This table tells you how much room for error the deal has.

**Terminal value as a percentage of total DCF value.** This is not a sensitivity table; it is a diagnostic. In a standard DCF, the terminal value often represents 60-80% of the total present value. If yours is 95%, your near-term cash flow projections are close to worthless in terms of value contribution - all the value is in an assumption made about what happens after year 10. This deserves explicit acknowledgment and scrutiny.

A McKinsey analysis of corporate valuation methodology (from their classic "Valuation" textbook by Koller, Goedhart, and Wessels) emphasizes that understanding the value attribution between explicit forecast period and terminal value is essential for contextualizing DCF sensitivity. When 80% of value comes from the terminal value, your WACC sensitivity is amplified: small changes in WACC drive large changes in the present value of the terminal value. This is why long-duration, high-growth asset valuations are particularly sensitive to discount rate assumptions.

---

## Tornado Charts: What They Are and When to Use Them

A tornado chart is a bar chart showing the range of output values (typically equity value per share or IRR) attributable to each input variable, sorted from most impactful to least impactful. The bars are horizontal, sorted in descending order of width, creating a tornado shape (wide at the top, narrow at the bottom).

The tornado chart answers a different question than a two-variable table: "Which input variable matters most?" It is the sensitivity analysis entry point - it tells you where to focus your diligence, your scenario planning, and your presentation time.

Construction:
1. For each key input variable, calculate the output at the high end and the low end of a plausible range
2. Compute the impact as (output at high - output at low) / 2, centered on the base case
3. Sort variables from highest impact (top) to lowest impact (bottom)
4. Plot as a horizontal bar chart, with each bar spanning from the low-case output to the high-case output

| Variable | Low Case | High Case | Range |
|---|---|---|---|
| Revenue CAGR (±2%) | $38.50 | $72.40 | $33.90 |
| Exit EBITDA margin (±4%) | $42.10 | $67.80 | $25.70 |
| WACC (±100bps) | $44.20 | $63.50 | $19.30 |
| Terminal growth rate (±1%) | $47.00 | $61.20 | $14.20 |
| Capex intensity (±1% of rev) | $50.10 | $57.80 | $7.70 |

In this example, revenue growth is the dominant driver, followed by margin, then WACC, then terminal growth rate, with capex intensity a distant fifth. This tells you where to spend your time in diligence and where management's projections most need scrutiny.

Tornado charts are common in consulting-style analysis and in risk management, but less universally standard in pure investment banking work. They are most useful when presenting to audiences who are not deeply familiar with financial models - board members, management teams, or strategic clients who want to understand value drivers without reading a sensitivity table.

When presenting in a [football field chart](/technical/football-field-charts/) context, the tornado chart sits in the appendix as support for the DCF bar width.

---

## Scenario Analysis vs. Sensitivity Analysis: Don't Conflate Them

Senior bankers get frustrated when analysts present sensitivity tables (single-variable perturbations) and call them "scenarios." The distinction matters.

A sensitivity table asks: what if WACC is 9% instead of 10%? This isolates one parameter. It doesn't reflect a coherent worldview about how the business and market might evolve.

A scenario asks: what if we're wrong about the whole growth story? Define a "bull case" where the company executes perfectly on its expansion plan, achieves operating leverage, and market multiples remain elevated. Define a "bear case" where competition intensifies, margin expansion stalls, and the company faces multiple compression. Each scenario changes multiple inputs simultaneously in a logically consistent way.

The three-scenario structure (bear/base/bull) should come with:
- A written narrative for each scenario (1-2 paragraphs)
- A table showing how key assumptions differ across scenarios
- The resulting equity value or IRR in each scenario
- A probability-weighted expected value (optional, but useful if you can credibly assign probabilities)

Mergers & Inquisitions recommends building the scenarios by starting with the business logic (what would have to be true for the bull case to materialize?) rather than starting with the numbers (what CAGR produces the valuation I want?). The former produces credible scenarios. The latter produces reverse-engineered justifications.

---

## What Senior Bankers Actually Want to See

The gap between what junior analysts present and what senior bankers want is largest in sensitivity analysis. Here is what matters to the people reviewing your work:

**Can you explain the key value driver?** After building all your sensitivity tables, you should be able to say in two sentences: "The dominant value driver in this model is the revenue growth assumption. Moving revenue CAGR from 6% to 10% increases equity value by 40%. The WACC assumption is secondary - a 100bps shift moves value by only 15%." If you can't summarize the model's sensitivity narrative in clear language, you haven't fully absorbed what the model is telling you.

**Is the base case defensible?** Sensitivity analysis is only useful if the base case is credible. If the base case already embeds aggressive assumptions, showing that the bull case produces a 20% higher valuation is not reassuring - it is alarming. Senior bankers want to know that the base case represents a realistic, well-supported central estimate, and that the sensitivity range reflects genuine uncertainty rather than scenario engineering.

**Have you stress-tested the downside?** In M&A advisory and credit analysis, the downside scenario often matters more than the upside. What does the deal look like if revenue is 20% below plan? Can the company still service its debt? Does the strategic rationale survive a margin compression scenario? Presenting only upside sensitivity, or presenting a "downside" that is only mildly below base case, signals that you haven't done the honest work.

**Are the sensitivity ranges internally consistent?** A common error: the revenue sensitivity range goes from 5% to 15% CAGR, but the margin sensitivity range assumes margins compress at the high revenue growth case. In reality, margin and growth are correlated (higher growth often comes with investment-driven margin compression, or in some businesses, with scale leverage). Treating them as independent sensitivity variables can overstate the upside. A coherent downside scenario combines lower growth with lower margins. A coherent upside combines higher growth with margin expansion, but only if the business model supports it.

**Is the sensitivity output actionable?** A table showing equity values from $15 to $600 per share is not useful. It is a confession that the model doesn't have a view. Narrow the range to what is genuinely plausible. Defend the tightness of the range or acknowledge the uncertainty, but don't present extremes as if they are equally likely outcomes.

---

## Common Formatting and Presentation Errors

**Presenting only the WACC/terminal growth table.** This is the default in many bank templates, but it's not sufficient. Always include at least one business-driver sensitivity.

**Unlabeled base case cells.** The base case should be highlighted in the sensitivity table. Every reader should be able to immediately orient to the central estimate.

**Inconsistent ranges across tables.** If your WACC sensitivity runs 8%-12% in one table and 9.5%-10.5% in another, readers will notice and wonder which range is actually intended. Pick a range and use it consistently.

**Too many decimal places.** Equity value sensitivity outputs should be rounded to the nearest dollar (or nearest $5 for higher-priced stocks). Showing $47.32 to $63.19 implies false precision that conflicts with the entire point of a sensitivity analysis.

**Buried in appendix without summary.** The key takeaway from the sensitivity analysis should appear in the body of the presentation, not just in appendix tables. "Under our base case, equity value per share ranges from $47 to $63 at reasonable discount rate and growth assumptions" is a one-sentence summary that belongs in the main body.

---

## Real Talk

A Reddit r/FinancialCareers thread on modeling tests for investment banking included this observation from someone who had recently passed an associate-level modeling test: "They told me afterwards that the sensitivity analysis was what separated the candidates. Everyone built the base case DCF. About half built a WACC/terminal growth table. Almost nobody built a revenue/margin sensitivity table and then explained which variable mattered most. The MD said the revenue sensitivity was more important than the WACC table and he was surprised how few people understood that."

This matches my experience. The WACC sensitivity table is expected. It is table stakes. The candidates who demonstrate real analytical judgment are the ones who have clearly thought about the business and asked: "What would have to be wrong with my view for this deal not to work? And how likely is that?" That question, answered rigorously with supporting analysis, is what senior bankers are actually testing for.

---

## What You Should Do Next

1. **Rebuild the sensitivity analysis on a DCF you've already built.** This time, build three tables: WACC/terminal growth rate, revenue CAGR/EBITDA margin, and capex intensity/working capital intensity. Then build a tornado chart ranking all inputs by their impact on equity value. The result will tell you more about your model than the model itself does.

2. **Practice writing the scenario narratives first.** Before touching a spreadsheet, write a one-paragraph description of your bear case and bull case. What has to go wrong for the bear case to materialize? What has to go right for the bull case? Then build the numbers from the narrative. This discipline prevents reverse-engineered scenarios.

3. **Learn Excel data tables thoroughly.** Two-variable data tables, properly linked to model inputs, are faster and more reliable than manually computing individual scenarios. If you are not fluent with this Excel feature, practice it until building a sensitivity table takes you under five minutes.

4. **Read the McKinsey Valuation textbook sensitivity chapters.** Koller, Goedhart, and Wessels devote significant space to value driver identification and scenario construction. Their framework for identifying "key value drivers" - the 2-3 variables that explain the majority of valuation variance - is directly applicable to investment banking work.

5. **On your next model, verify the terminal value percentage.** Calculate what fraction of your DCF value comes from the terminal value. If it's above 75%, add a sensitivity table specifically for the terminal value multiple or perpetuity growth rate, and note in the presentation that terminal value assumptions are the primary driver of value. This transparency, rare in junior analyst work, is immediately credible to senior reviewers.
