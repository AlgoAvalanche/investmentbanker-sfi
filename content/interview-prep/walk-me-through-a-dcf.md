---
title: "Walk Me Through a DCF: How to Actually Answer This Interview Question"
description: "How to answer 'walk me through a DCF' in investment banking interviews - a three-tier framework with real depth, not a memorized script."
primary_keyword: "walk me through a DCF"
secondary_keywords: ["DCF interview question", "discounted cash flow interview", "investment banking technical interview", "WACC", "terminal value", "unlevered free cash flow"]
category: "interview-prep"
date: "2026-06-01"
author: "Sterling Prentice"
internal_links: ["/technical/dcf-valuation-step-by-step/", "/interview-prep/investment-banking-interview-questions/", "/technical/sensitivity-analysis-tornado-charts/", "/technical/comparable-companies-analysis/", "/interview-prep/superday-what-to-expect/"]
---

# Walk Me Through a DCF: How to Actually Answer This Interview Question

"Walk me through a DCF."

Four words. Probably the single most frequently asked question in investment banking interviews. It shows up in first-round phone screens, [superday panels](/interview-prep/superday-what-to-expect/), coffee chats that quietly turn into evaluations, and occasionally as an opening salvo from an MD who wants to see how you handle pressure before bothering with the rest of the interview.

Here is the problem: almost everyone gives the same answer. And that answer, while technically correct, tells the interviewer nothing about whether you have ever actually thought about a DCF - or just memorized a paragraph from a prep guide.

This article gives you three tiers of response. Use the one that fits the situation. Know all three so you can shift gears when the interviewer pushes harder.

For the full technical mechanics of building a DCF model cell by cell, see the [DCF valuation step-by-step guide](/technical/dcf-valuation-step-by-step/). This piece is about the interview question specifically - how to answer it, what the interviewer is really testing, and where most candidates fall short.

---

## Walk Me Through a DCF - Why Most Answers Are Forgettable

The typical candidate answer goes something like this: "You project free cash flows for five years, calculate WACC to discount them back, add a terminal value, subtract net debt, and divide by shares outstanding."

That is correct. It is also what every other candidate says. You have essentially read the interviewer a definition. As one analyst on [Wall Street Oasis put it](https://www.wallstreetoasis.com/forum/investment-banking/walk-me-through-a-dcf-interview), the candidates who progress past first rounds are the ones who sound like they have used a DCF to make a decision - not memorized one from a textbook.

What the interviewer is actually evaluating when they ask you to walk me through a DCF:

1. Can you explain the logic, not just the steps?
2. Do you understand which assumptions actually drive the output?
3. Can you identify where the model is strong and where it breaks down?

[Mergers & Inquisitions](https://mergersandinquisitions.com/investment-banking-interview-questions-and-answers/) frames it well: interviewers seek evidence that you understand why dividing the analysis into an explicit forecast period and a terminal value matters - and how the discount rate connects to risk and return. The mechanics are the floor. Judgment is what gets you the offer.

---

## Tier 1: The 60-Second Answer (Phone Screens)

Use this when the question is clearly a baseline check and the interviewer is moving through a list. Hit the components cleanly. Do not editorialize.

**The answer:**

"A DCF values a company based on the present value of its future free cash flows. You project unlevered free cash flows - EBIT times one minus the tax rate, plus depreciation and amortization, minus capex, plus or minus changes in working capital - typically over five to ten years. You discount those cash flows back to today using WACC, the weighted average cost of the company's debt and equity capital. Then you estimate a terminal value to capture everything beyond the explicit forecast period - either through the Gordon Growth Model or an exit multiple. Add the discounted terminal value to the present value of the projected cash flows to get enterprise value. Subtract net debt, divide by diluted shares outstanding, and you have an implied share price."

That is the formula from [Mergers & Inquisitions](https://mergersandinquisitions.com/dcf-model/): UFCF = EBIT x (1 - Tax Rate) + D&A +/- Change in Working Capital - CapEx. Know it cold. Every analyst-track candidate should be able to deliver this in under ninety seconds without thinking.

But do not stop here unless the interviewer clearly wants to move on.

---

## Tier 2: The Three-Minute Answer (Standard Superday)

This is what most interviewers actually want. It covers the mechanics but extends into assumptions, sensitivities, and limitations. If you only prepare one version, prepare this one.

Start with the Tier 1 structure, then extend each section:

### On projecting free cash flows

"I would typically use a five-year explicit forecast for a mature company with stable cash flows, and extend to seven or ten years for a high-growth business where the model has not yet normalized. The projections start with revenue - which is the highest-leverage assumption in any DCF - then flow through operating margins, D&A tied to capex as a percentage of revenue, working capital changes, and capex intensity. The further out you project, the less confident any individual number is. But cutting the forecast period too short just pushes uncertainty into the terminal value, which is already the dominant value driver."

### On the discount rate

"WACC is the blended required return of all capital providers. Cost of equity comes from CAPM - risk-free rate plus beta times the equity risk premium. I would use the 10-year Treasury as the risk-free rate. For the equity risk premium, [Damodaran at NYU Stern](https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/histimpl.html) publishes an implied ERP annually - his most recent estimate is around 4.2%. Beta gets unlevered from comparable companies and re-levered at the target capital structure. Cost of debt is the pre-tax yield on the company's outstanding debt, tax-affected. Weights are market value, not book. Small differences in WACC - even 50 basis points - can move implied value by 10-20% on a growth company, which is why this is always a key sensitivity input."

### On terminal value

"Terminal value typically represents 60-80% of total DCF value for most companies. That is either a feature or a warning sign depending on how rigorous your terminal assumptions are. The Gordon Growth Model takes the final year's FCF times one plus the perpetuity growth rate, divided by WACC minus the growth rate. That growth rate should never exceed long-run nominal GDP growth - [Wall Street Prep](https://www.wallstreetprep.com/knowledge/walk-me-through-dcf/) notes a typical range of 1-3%. The exit multiple method uses comparable company EV/EBITDA multiples, which introduces a market-based assumption into a supposedly intrinsic analysis. As [Macabacus notes](https://macabacus.com/valuation/dcf-overview), cross-checking terminal value using both methods is a best practice."

As a Wall Street Oasis forum user [observed](https://www.wallstreetoasis.com/forum/investment-banking/run-me-through-a-dcf-interview-question): "Terminal growth Rate / Exit Multiple will be the drivers to which EV is most sensitive... the Discounted Horizon Value can often make up 70%-90% of the total discounted NPV." That tracks with every live model I have seen.

### On the output

"You arrive at enterprise value by summing the present value of explicit-period FCFs and terminal value. Bridge to equity value by subtracting debt, preferred stock, and minority interest, then adding back cash. Divide by diluted shares outstanding - using the treasury stock method for in-the-money options. I would always present a sensitivity table on WACC versus terminal growth rate rather than a single point estimate. The table is the honest answer to 'how confident are you in this number?' For the full treatment of sensitivity analysis and tornado charts, see the [sensitivity analysis guide](/technical/sensitivity-analysis-tornado-charts/)."

---

## Tier 3: The Deep-Dive (MD-Level, Restructuring, Leveraged Finance)

If an MD is probing your real understanding, or you are interviewing for a technical seat, you need to demonstrate judgment - not just mechanics.

### Free cash flow subtleties

Unlevered FCF is what you discount because you are valuing the enterprise before financing effects. EBIT times one minus the tax rate gives you NOPAT. Add back D&A, subtract capex, adjust for working capital. For companies with significant stock-based compensation, there is a real debate about whether SBC belongs in the FCF calculation - if you exclude it, you need to capture that dilution in your share count using a fully diluted basis. Damodaran's critical rule applies here: [never mismatch cash flows and discount rates](https://pages.stern.nyu.edu/~adamodar/pdfiles/eqnotes/dcfallOld.pdf). Discounting equity cash flows at WACC produces an upward-biased estimate. Discounting firm cash flows at cost of equity produces a downward-biased one. Both errors are more common in live models than anyone admits.

### Beta and cost of equity

Raw regression beta is backward-looking, noisy, and mean-reverting. Damodaran recommends using industry betas - unlevered - then re-levering at the company's actual or target capital structure. For private companies you have no observable beta, so you rely entirely on public comparables. For highly leveraged targets, which version of the Hamada equation you use matters more than people think.

### When the DCF breaks down

A DCF is not the right tool for every situation. It fails when cash flows are negative and expected to stay that way for years (early-stage biotech, pre-revenue tech). It gets unreliable when the business model makes multi-year projections speculative (cyclical commodities near peak). It misleads when terminal value assumptions are so dominant that the explicit projection barely registers. In those cases, [comparable companies analysis](/technical/comparable-companies-analysis/) or precedent transactions are more defensible starting points. The DCF works best when cash flows are positive and visible, the business has reached some maturity, and you have credible comparables to anchor the terminal multiple.

### The mid-year convention

By default, a DCF assumes all cash flows arrive at year-end. Most operating businesses generate cash throughout the year, so a mid-year convention - shifting discount periods to the midpoint of each year - is more accurate. This adds approximately (1 + WACC)^0.5 to the result and is standard in any model you would actually send to a client.

---

## The Three Assumptions That Actually Drive the Output

Follow-up question you will almost certainly face: "What are the most important assumptions in your DCF?"

Saying "revenue growth" gets a nod. Saying "the terminal value" gets a nod and a follow-up question. The best answer identifies how the three critical assumptions interact:

**1. Revenue growth in years 3-5.** Years 1-2 are often anchored to analyst consensus or management guidance. The outer years are where your view diverges from the market. And the terminal value is only as good as the final-year FCF it capitalizes - which depends entirely on where you land on revenue and margins in year five.

**2. Terminal-year operating margin.** The DCF is violently sensitive to whether you model 15% or 20% EBITDA margins at maturity. A 5-point margin difference can move enterprise value by 30-40% for a growth company. This is not a rounding error - it is a fundamental view on competitive positioning.

**3. WACC.** A 1-point change in WACC moves value more than almost any other single-variable change. Cost of equity is the dominant driver, and the equity risk premium you choose is essentially a view on how much the market demands to hold equities over risk-free assets. Using [Damodaran's current implied ERP](https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/histimpl.html) is more defensible than a static historical number.

---

## Common Follow-Up Questions

These come up in almost every [technical interview sequence](/interview-prep/investment-banking-interview-questions/). Have answers ready.

**"Why unlevered free cash flow instead of levered?"**

Because you are valuing the enterprise - the whole business available to all capital providers. Levered FCF (after interest payments) values only the equity and requires cost of equity as the discount rate. Both approaches should produce the same equity value if done correctly. The unlevered approach is cleaner for businesses with complex or changing capital structures.

**"What happens if the company has a lot of cash on the balance sheet?"**

Cash is a non-operating asset. It does not generate the operating cash flows you projected. You add it back when bridging from enterprise value to equity value. If excess cash is well above operating needs, carve it out explicitly rather than leaving it buried in working capital.

**"How does inflation affect the DCF?"**

Both sides of the equation. Higher inflation means higher nominal revenue projections but also a higher risk-free rate, which lifts WACC. A well-constructed DCF is theoretically inflation-neutral if both numerator and denominator are updated consistently. In practice, discount rates get updated faster and more accurately than cash flow projections, which can artificially compress valuations in inflationary environments.

**"How do you pick the forecast period?"**

Project until the company reaches steady state - stable growth, stable margins, stable reinvestment rates. For a mature industrial business, five years works. For a hypergrowth software company still expanding margins, ten years is more appropriate. [Wall Street Prep](https://www.wallstreetprep.com/knowledge/walk-me-through-dcf/) puts it simply: the forecast period extends until the company reaches a sustainable, normalized growth state.

**"What would make your DCF wrong?"**

The honest answer: the terminal value assumptions. If your terminal growth rate is off by 50 basis points, or your exit multiple is off by half a turn, the implied value shifts materially. This is why you always present a range, not a point estimate.

---

## Real-World DCF vs. Interview DCF

The interview version and the client-ready version are related but not identical.

In the interview, you demonstrate that you know the methodology cold and can explain it clearly. You do not need to defend specific numbers.

In live work, the hard part is the judgment calls: which comparables anchor the terminal multiple, how to treat non-recurring items in the FCF build, whether to use management guidance or build an independent case, and how to present a range to a client without either sandbagging or cheerleading. [Macabacus](https://macabacus.com/valuation/dcf-overview) calls the DCF "theoretically, the most sound method of valuation" - and it is, when the inputs reflect genuine analysis rather than circular reasoning from comps.

The interview answer is your proof of concept. The judgment calls under client pressure are what the job actually requires.

---

## What You Should Do Next

1. **Build a DCF from scratch.** Pull a public company 10-K, project five years of free cash flows in Excel, calculate WACC, build the terminal value both ways, and bridge to implied share price. The process will surface every concept you have only read about. You will learn more from one build than from reading ten guides.

2. **Practice the Tier 2 answer out loud.** Time yourself. It should run about three minutes and sound conversational, not scripted. The mechanics should be automatic; the commentary on assumptions should sound like your own thinking.

3. **Read Damodaran on WACC and terminal value.** His [NYU Stern materials](https://pages.stern.nyu.edu/~adamodar/pdfiles/eqnotes/dcfallOld.pdf) are free. The sections on estimating equity risk premiums and choosing terminal growth rates are directly applicable to interview follow-ups - and to actual modeling work once you start.

4. **Drill the follow-up questions.** Practice answering "why unlevered FCF?", "how does inflation affect the DCF?", and "what would make your DCF wrong?" until they are instinctive. These are where interviewers separate candidates who memorized from candidates who understand.

5. **Cross-reference with the broader question set.** The DCF question rarely appears alone. See the full [investment banking interview questions guide](/interview-prep/investment-banking-interview-questions/) for how DCF connects to comps, precedent transactions, and the valuation framework interviewers expect you to navigate.
