---
title: "The Walk Me Through a DCF Question: A Three-Tier Answer Framework"
description: "Master the walk me through a DCF interview question with a three-tier answer framework covering FCF projection, WACC, and terminal value."
primary_keyword: "walk me through a DCF"
secondary_keywords: ["DCF interview question", "discounted cash flow interview", "technical interview", "WACC", "terminal value"]
category: "interview-prep"
date: "2026-05-27"
author: "Sanjay Gupta"
internal_links: ["/technical/dcf-valuation-step-by-step/", "/interview-prep/investment-banking-interview-questions/", "/technical/sensitivity-analysis-tornado-charts/"]
---

# The Walk Me Through a DCF Question: A Three-Tier Answer Framework

"Walk me through a DCF."

It is the most asked investment banking interview question in existence. It appears in first rounds, superdays, coffee chats that turn into informal screens, and sometimes as an opening question from an MD who wants to see how you handle pressure. Every candidate prepares for it. Most candidates answer it wrong.

Not wrong in the sense of being factually incorrect - most people know the steps. Wrong in the sense of answering a Level 1 question when the interviewer is listening for Level 3 thinking.

This guide gives you a three-tier answer framework. Use the level that matches where the conversation is. Know all three so you can step up when pushed.

For the full technical mechanics of building a DCF model from scratch, see [/technical/dcf-valuation-step-by-step/](/technical/dcf-valuation-step-by-step/). This article is specifically about how to answer the interview question.

---

## Why Most DCF Answers Fail

The standard bad answer sounds like this: "First you project free cash flows for five years, then you calculate WACC to discount them, then you add a terminal value, subtract net debt, and divide by shares outstanding to get implied share price."

That is technically correct. It is also completely undifferentiated. Every candidate who went through the BIWS financial modeling course knows this paragraph by heart. You have told the interviewer nothing about your actual understanding.

The interviewer is not testing whether you know the steps. They are testing:

1. Whether you understand why each step works the way it does
2. Whether you know the key assumptions and their sensitivity
3. Whether you can identify where the analysis is strongest and where it is most likely to break down

A Mergers & Inquisitions survey of analysts who went through Goldman Sachs and Morgan Stanley processes noted that the candidates who progressed past first rounds were consistently those who could discuss assumptions and limitations, not just procedure.

Wall Street Oasis has a frequently cited thread where an analyst at a BB described the ideal answer: "It felt like talking to someone who had actually used a DCF to make a decision, not someone who had memorized a definition."

---

## The Three-Tier Framework

### Tier 1: The 60-Second Answer (First Round Phone Screens)

Use this when the question is clearly a baseline check and the interviewer is moving through a list. Keep it under 90 seconds. Hit the five components cleanly.

**The answer:**

"A DCF values a company based on the present value of its future cash flows. You start by projecting unlevered free cash flows - EBIT after tax, plus D&A, minus capex, minus changes in working capital - typically for five to ten years. You then calculate WACC, which is the weighted average cost of the company's debt and equity capital, to use as your discount rate. You discount all projected FCFs back to today at WACC. Then you estimate a terminal value to capture all cash flows beyond the explicit forecast period - either using the Gordon Growth Model or an exit multiple. Add the terminal value to the present value of the explicit period FCFs to get enterprise value. Subtract net debt and divide by diluted shares outstanding to get implied equity value per share."

That is the floor. Every analyst-track candidate should be able to say this in their sleep.

### Tier 2: The Three-Minute Answer (Standard Superday)

This is the version most interviewers actually want. It covers the mechanics but extends into the assumptions, the sensitivities, and the limitations. If you are only going to prepare one version, prepare this one.

**The answer:**

Start with the same structure as Tier 1, then extend each section:

**On the projection period:**
"I'd typically use a five-year explicit forecast for a mature company with stable cash flows, and extend to ten years for a high-growth company where the business model hasn't yet normalized. The projections are built from a revenue forecast - which is the highest-leverage assumption in the model - flowing through operating margins, D&A (often tied to capex as a percentage of revenue), working capital changes, and finally capex intensity. The further out you project, the less confident you are in any specific number, but cutting the forecast period too short just pushes the uncertainty into the terminal value, which is already the dominant driver of value."

**On WACC:**
"WACC is the blended required return of all capital providers. Cost of equity comes from CAPM: risk-free rate plus beta times the equity risk premium. I'd use the 10-year Treasury as the risk-free rate and a historical equity risk premium around 5-6% - Damodaran at NYU updates these annually. Beta is levered using the company's capital structure, or you can unlever peer betas and re-lever at the target structure if you want to be clean. Cost of debt is the pre-tax yield on the company's debt, adjusted for the tax shield. The weights are market value weights, not book. Small differences in WACC - even 50 basis points - can move implied value by 10-20% on a growth company, so this is a key sensitivity assumption."

**On terminal value:**
"Terminal value typically represents 60-80% of total DCF value for most companies, which is either a feature or a warning sign depending on how you think about it. The Gordon Growth Model (final year FCF times (1 + g), divided by WACC minus g) is conceptually clean but extremely sensitive to the growth rate assumption - which should never exceed long-run nominal GDP growth for a perpetuity. The exit multiple method anchors to market-observable multiples (EV/EBITDA of comparable companies at that future date), which introduces a comps-based assumption into a supposedly intrinsic analysis. In practice I'd use both and triangulate. Damodaran's research suggests that for most mature companies, a perpetuity growth rate of 2-3% in nominal terms is defensible."

**On the output:**
"You get to enterprise value by adding the PV of explicit period FCFs and terminal value. Bridge to equity value by subtracting debt, preferred stock, and minority interest, then adding back cash. Divide by diluted shares outstanding - using the treasury stock method for in-the-money options and warrants - for implied share price. I'd always run a sensitivity table on WACC and terminal growth rate to show the range of outcomes rather than a single point estimate. See how the implied share price moves at the extremes and assess whether the current price is inside or outside the reasonable range."

### Tier 3: The Deep-Dive (MD-Level Technical Interview, Leveraged Finance, Restructuring)

If you are interviewing for a technical group, if an MD is clearly probing your actual understanding, or if you are at the associate level and expected to have done real analysis, you need to go further. This is where you demonstrate judgment, not just knowledge.

**Additional layers to discuss:**

**Free Cash Flow nuances:**
"Unlevered FCF is what you discount in a DCF because you are valuing the enterprise before the effects of financing. EBIT x (1 - tax rate) gives you NOPAT - Net Operating Profit After Tax. Add back D&A (non-cash), subtract capex (actual cash investment), and adjust for changes in working capital. For companies with significant stock-based compensation, there is a debate about whether to treat SBC as a cash expense in the FCF calculation - I lean toward treating it as real dilution, which means either subtracting it from FCF or using diluted shares that reflect future issuance."

**Beta and the cost of equity:**
"Using raw regression beta has well-documented problems - it is backward-looking, noisy, and mean-reverting. Damodaran recommends using industry or sector betas, unlevered, and then re-levering at the company's actual or target capital structure. For private companies, you have no observable beta at all, which means you rely entirely on comparable public companies. For highly leveraged companies, you need to be careful about which version of the Hamada equation you use to unlever and relever."

**When DCF breaks down:**
"A DCF is not the right tool when cash flows are negative and expected to remain so for a long period (early-stage companies, pre-revenue biotech), when the business model makes multi-year projections purely speculative (cyclical commodities companies near a cycle peak), or when terminal value assumptions are so dominant that the explicit period projection barely matters. In those cases you are better served by precedent transactions or venture-style scenario analysis. The DCF is best when: cash flows are positive and visible, the business has reached some level of maturity, and you have credible comparables to anchor your terminal multiple."

**Mid-year convention:**
"By default, a DCF discounts as if all cash flows arrive at year-end. For most operating businesses, cash flows arrive throughout the year, so a mid-year convention (shifting all cash flows to the midpoint of each period) is more accurate. This adds approximately (1 + WACC)^0.5 to the result and is standard practice in sophisticated models."

---

## The Three Assumptions That Actually Drive Value

One question interviewers love to ask as a follow-up: "What are the most important assumptions in your DCF?"

Candidates who say "revenue growth" get a nod. Candidates who say "the terminal value" get a nod and a follow-up. The best answer identifies the three that interact:

**1. Revenue growth in years 3-5.**
Years 1-2 are often anchored to guidance or consensus. The years after that are where your view diverges from the market. The terminal value is only as good as the final year FCF it capitalizes - which is directly tied to where you land on revenue and margins in year five.

**2. Operating margin at terminal year.**
The DCF is extremely sensitive to whether you model the company reaching 15% or 20% EBITDA margins at maturity. A 5-point difference in terminal-year margins can move enterprise value by 30-40% for a growth company. This is not a small assumption - it is a fundamental view on the company's competitive position.

**3. WACC.**
A 1-point change in WACC moves value more than almost any other single assumption for most companies. Cost of equity is the dominant driver, and the equity risk premium you use is essentially a view on how much the market demands to own equities versus risk-free assets. Using Damodaran's current implied ERP (which he updates monthly) is more defensible than using a static historical number.

---

## Common Follow-Up Questions and How to Answer Them

**"Why do we use unlevered free cash flow instead of levered?"**

Because you are valuing the enterprise - the entire business available to all capital providers. If you used levered FCF (cash flow after interest payments), you would be valuing only the equity and would need to use cost of equity as the discount rate instead of WACC. Both approaches should give the same answer for equity value if done correctly, but the unlevered approach is cleaner for multi-party capital structures.

**"What happens to the DCF if the company has a lot of cash?"**

The cash is a non-operating asset that does not generate the operating cash flows you projected. It sits on the balance sheet and is added back when you bridge from enterprise value to equity value. If the company has excess cash well above what it needs for operations, you should carve it out explicitly rather than leaving it embedded in working capital projections.

**"How does inflation affect a DCF?"**

Inflation affects both the numerator and denominator. If inflation is higher, nominal revenue and cost projections should reflect that. The risk-free rate (and therefore WACC) should also rise to reflect higher inflation. In theory, a well-constructed DCF is inflation-neutral if both sides are updated consistently. In practice, the discount rate is usually updated faster and more accurately than the cash flow projections, which can artificially compress valuations in high-inflation environments.

**"How do you pick the forecast period length?"**

You project until the company reaches a "steady state" - stable growth, stable margins, stable capex intensity. For a mature industrial company, five years is often sufficient. For a hypergrowth software company still expanding margins and reinvesting aggressively, ten years is more appropriate. The rule of thumb from most practitioners: your final projection year should look like a company in a normalized, sustainable state.

---

## The Sensitivity Table Question

Nearly every technical interviewer who asks about DCF will ask about sensitivity analysis as a follow-up. For the full treatment of this topic, see [/technical/sensitivity-analysis-tornado-charts/](/technical/sensitivity-analysis-tornado-charts/).

The key points for the interview context:

A two-way sensitivity table on WACC vs. terminal growth rate is standard. The output is a grid of implied enterprise values or share prices. You can immediately see how much the conclusion changes as you vary your two most uncertain assumptions.

What separates good from great here: the ability to look at the sensitivity table and say whether the conclusion is robust. If the implied share price is above the current price in 75% of the scenarios in the table, that is a different conversation than if it is above in 30% of scenarios. The table is not just a decoration - it is the honest answer to "how confident are you?"

---

## A Note on Real-World vs. Interview DCF

The interview DCF and the live client DCF are related but not identical.

In the interview, you need to demonstrate that you know the methodology cold and can explain it clearly. You do not need to defend specific numbers.

In real work, as Macabacus and BIWS both note in their modeling guides, the hard part is not the mechanics - it is the judgment calls: which comparables to use for terminal multiple, how to treat non-recurring items in the FCF calculation, whether to use management guidance or build an independent case, and how to present a range of outcomes without either sandbagging or cheerleading.

The interview answer is your proof of concept. The ability to make those judgment calls under client pressure is what the job actually requires.

---

## What You Should Do Next

1. **Build a DCF from scratch without guidance.** Take a public company 10-K, build a five-year projection model in Excel, calculate WACC, build the terminal value, and bridge to implied share price. The process will surface every concept you have only read about. BIWS has a free template that works well as a structural starting point.

2. **Practice the Tier 2 answer out loud.** Time yourself. It should be three minutes and flow naturally. The mechanics should be instant; the commentary on assumptions should sound like your own views, not a script.

3. **Read Damodaran on WACC and terminal value.** His Stern NYU notes are free. The sections on estimating equity risk premiums and choosing terminal growth rates are directly applicable to interview follow-ups.

4. **Prepare for the follow-up questions.** The list above covers the most common ones. Practice answering "why unlevered FCF?", "how does inflation affect the DCF?", and "what would make your DCF wrong?" until they are instinctive.

5. **Cross-reference with the broader question set.** The DCF question rarely appears in isolation - see [/interview-prep/investment-banking-interview-questions/](/interview-prep/investment-banking-interview-questions/) for the full list of technical questions you should have ready, including how DCF interacts with comps and precedent transactions in a valuation framework.
