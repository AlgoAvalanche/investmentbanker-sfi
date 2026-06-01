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

What the interviewer is actually evaluating when they ask you to walk them through a DCF:

1. Can you explain the logic, not just the steps?
2. Do you understand which assumptions actually drive the output?
3. Can you identify where the model is strong and where it breaks down?

[Mergers and Inquisitions](https://mergersandinquisitions.com/investment-banking-interview-questions-and-answers/) frames it well: interviewers seek evidence that you understand why dividing the analysis into an explicit forecast period and a terminal value matters - and how the discount rate connects to risk and return. The mechanics are the floor. Judgment is what gets you the offer.

The reason this question still dominates IB interviews is not that firms want to confirm you can define "discounted cash flow." It is that your answer reveals whether you have internalized the underlying logic: that a business is worth the sum of its future economic output, adjusted for the time value of money and the riskiness of that output. If you lead with that concept before walking through the steps, you immediately separate yourself from the field.

---

## Tier 1: The 60-Second Answer (Phone Screens)

Use this when the question is clearly a baseline check and the interviewer is moving through a list. Hit the components cleanly. Do not editorialize.

**The answer:**

"A DCF values a company based on the present value of its future free cash flows. You project unlevered free cash flows - EBIT times one minus the tax rate, plus depreciation and amortization, minus capex, plus or minus changes in working capital - typically over five to ten years. You discount those cash flows back to today using WACC, the weighted average cost of the company's debt and equity capital. Then you estimate a terminal value to capture everything beyond the explicit forecast period - either through the Gordon Growth Model or an exit multiple. Add the discounted terminal value to the present value of the projected cash flows to get enterprise value. Subtract net debt, divide by diluted shares outstanding, and you have an implied share price."

That is the formula from [Mergers and Inquisitions](https://mergersandinquisitions.com/dcf-model/): UFCF = EBIT x (1 - Tax Rate) + D&A +/- Change in Working Capital - CapEx. Know it cold. Every analyst-track candidate should be able to deliver this in under ninety seconds without thinking.

But do not stop here unless the interviewer clearly wants to move on.

---

## Tier 2: The Three-Minute Answer (Standard Superday)

This is what most interviewers actually want. It covers the mechanics but extends into assumptions, sensitivities, and limitations. If you only prepare one version, prepare this one.

Start with the Tier 1 structure, then extend each section.

### On projecting free cash flows

"I would typically use a five-year explicit forecast for a mature company with stable cash flows, and extend to seven or ten years for a high-growth business where the model has not yet normalized. The projections start with revenue - which is the highest-leverage assumption in any DCF - then flow through operating margins, D&A tied to capex as a percentage of revenue, working capital changes, and capex intensity. The further out you project, the less confident any individual number is. But cutting the forecast period too short just pushes uncertainty into the terminal value, which is already the dominant value driver."

The explicit forecast period is not really about precision. It is about buying yourself enough runway for the business to normalize before you capitalize it into a terminal value. A five-year forecast on a hypergrowth software company that is still expanding margins is not five years of real visibility - it is five years of structured assumptions. The number you really care about is the year-five FCF, because that is what the terminal value capitalizes. Every projection-period assumption points toward that anchor.

### On the discount rate

"WACC is the blended required return of all capital providers. Cost of equity comes from CAPM - risk-free rate plus beta times the equity risk premium. I would use the 10-year Treasury as the risk-free rate. For the equity risk premium, [Damodaran at NYU Stern](https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/histimpl.html) publishes an implied ERP annually - his current estimate for 2025 is 4.23%. Beta gets unlevered from comparable companies and re-levered at the target capital structure. Cost of debt is the pre-tax yield on the company's outstanding debt, tax-affected. Weights are market value, not book. Small differences in WACC - even 50 basis points - can move implied value by 10 to 20 percent on a growth company, which is why this is always a key sensitivity input."

Most candidates recite the WACC formula and move on. The ones who stand out explain why WACC is fragile. The equity risk premium is not an observable number - it is an estimate of what the market currently demands to hold equities over risk-free assets. Damodaran derives his implied ERP by reverse-engineering what ERP would make current equity prices equal to their DCF value. That is a rigorous, forward-looking approach, and it is meaningfully different from using a static 5.5% historical average from a textbook. Using his current figure - 4.23% as of 2025 - and being able to explain why you chose it demonstrates the kind of judgment that separates first-year analysts from candidates who crammed for two weeks.

### On terminal value

"Terminal value typically represents 60 to 80 percent of total DCF value for most companies. That is either a feature or a warning sign depending on how rigorous your terminal assumptions are. The Gordon Growth Model takes the final year's FCF times one plus the perpetuity growth rate, divided by WACC minus the growth rate. That growth rate should never exceed long-run nominal GDP growth - [Mergers and Inquisitions](https://mergersandinquisitions.com/dcf-model/) notes the terminal growth rate should stay below the long-term GDP growth rate, especially in developed markets. [Wall Street Prep](https://www.wallstreetprep.com/knowledge/walk-me-through-dcf/) puts the typical range at 1 to 3 percent. The exit multiple method uses comparable company EV/EBITDA multiples, which introduces a market-based assumption into a supposedly intrinsic analysis. As [Macabacus notes](https://macabacus.com/valuation/dcf-overview), cross-checking terminal value using both methods is a best practice."

A Wall Street Oasis forum contributor [captured the practical reality directly](https://www.wallstreetoasis.com/forum/investment-banking/run-me-through-a-dcf-interview-question): "Terminal growth Rate / Exit Multiple will be the drivers to which EV is most sensitive... the Discounted Horizon Value can often make up 70% to 90% of the total discounted NPV." That range - 70 to 90 percent - is not an exaggeration. On a ten-year DCF with a modest discount rate and a 2 percent terminal growth rate, you will often find that the terminal value represents 75 cents of every dollar of enterprise value. Knowing that changes how you think about where to spend your time and scrutiny in any model.

### On the output

"You arrive at enterprise value by summing the present value of explicit-period FCFs and terminal value. Bridge to equity value by subtracting debt, preferred stock, and minority interest, then adding back cash. Divide by diluted shares outstanding - using the treasury stock method for in-the-money options. I would always present a sensitivity table on WACC versus terminal growth rate rather than a single point estimate. The table is the honest answer to 'how confident are you in this number?' For the full treatment of sensitivity analysis, see the [sensitivity analysis guide](/technical/sensitivity-analysis-tornado-charts/)."

[Macabacus](https://macabacus.com/valuation/dcf-overview) calls the DCF "theoretically, the most sound method of valuation" because it is forward-looking and grounded in actual cash generation rather than accounting metrics. That is accurate - and it is the right framing for an interview. But it is only true when the inputs reflect genuine analysis. A DCF built on circular assumptions and aggressive terminal rates is not theoretically sound. It is a number-laundering machine. The sensitivity table is what keeps you honest.

---

## Tier 3: The Deep-Dive (MD-Level, Restructuring, Leveraged Finance)

If an MD is probing your real understanding, or you are interviewing for a technical seat, you need to demonstrate judgment - not just mechanics.

### Free cash flow subtleties

Unlevered FCF is what you discount because you are valuing the enterprise before financing effects. EBIT times one minus the tax rate gives you NOPAT. Add back D&A, subtract capex, adjust for working capital. For companies with significant stock-based compensation, there is a real debate about whether SBC belongs in the FCF calculation - if you exclude it, you need to capture that dilution in your share count using a fully diluted basis.

Damodaran's critical rule applies without exception here: [never mismatch cash flows and discount rates](https://pages.stern.nyu.edu/~adamodar/pdfiles/eqnotes/dcfallOld.pdf). Discounting equity cash flows at WACC produces an upward-biased estimate. Discounting firm cash flows at cost of equity produces a downward-biased one. Both errors are more common in live models than anyone admits. If you spot that error in a case study or model review, you have found the single most disqualifying mistake a junior analyst can make.

### Beta and cost of equity

Raw regression beta is backward-looking, noisy, and mean-reverting. Damodaran recommends using industry betas - unlevered - then re-levering at the company's actual or target capital structure. For private companies you have no observable beta, so you rely entirely on public comparables. For highly leveraged targets, which version of the Hamada equation you use matters more than most people acknowledge.

The other issue is the risk-free rate. In a normalized rate environment, the 10-year Treasury works well. When rates move sharply - as they did between 2021 and 2024 - your WACC can shift by 200 basis points within a year with no change in company fundamentals. This is worth flagging in any interview that involves discussing interest rate sensitivity. The WACC is not a stable number. It is a snapshot.

### When the DCF breaks down

A DCF is not the right tool for every situation. It fails when cash flows are negative and expected to stay that way for years - early-stage biotech, pre-revenue tech platforms. It gets unreliable when the business model makes multi-year projections genuinely speculative - cyclical commodities near peak, media businesses in structural transition. It misleads when terminal value assumptions are so dominant that the explicit projection barely registers in the final number.

In those cases, [comparable companies analysis](/technical/comparable-companies-analysis/) or precedent transactions are more defensible starting points. The DCF works best when cash flows are positive and visible, the business has reached some maturity, and you have credible comparables to anchor the terminal multiple. Knowing when not to lead with a DCF is as important as knowing how to build one.

### The mid-year convention

By default, a DCF assumes all cash flows arrive at year-end. Most operating businesses generate cash throughout the year, so a mid-year convention - shifting discount periods to the midpoint of each year - is more accurate. This adds approximately (1 + WACC)^0.5 to the result and is standard in any model you would actually send to a client. If you mention this unprompted in an interview, it signals that you have actually built models, not just read about them.

---

## The Three Assumptions That Actually Drive the Output

Follow-up question you will almost certainly face: "What are the most important assumptions in your DCF?"

Saying "revenue growth" gets a nod. Saying "the terminal value" gets a nod and a follow-up question. The best answer identifies how the three critical assumptions interact and why their effects compound.

**1. Revenue growth in years 3 to 5.** Years 1 and 2 are often anchored to analyst consensus or management guidance - they are constrained. The outer years are where your view diverges from the market. And the terminal value is only as good as the final-year FCF it capitalizes, which depends entirely on where you land on revenue and margins in year five. The terminal value is not an independent assumption. It is a function of your projection-period assumptions. Candidates who understand that connection are rare.

**2. Terminal-year operating margin.** The DCF is violently sensitive to whether you model 15 or 20 percent EBITDA margins at maturity. A 5-point margin difference can move enterprise value by 30 to 40 percent for a growth company. This is not a rounding error - it is a fundamental view on competitive positioning, pricing power, and cost structure. Building a credible thesis for your terminal margin is harder than any other assumption in the model, and it is where sector knowledge genuinely matters.

**3. WACC.** A 1-point change in WACC moves value more than almost any other single-variable change. Cost of equity is the dominant driver, and the equity risk premium you choose is essentially a view on how much the market demands to hold equities over risk-free assets. Using [Damodaran's current implied ERP of 4.23%](https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/histimpl.html) is more defensible than a static historical number. It is current. It is derived from market prices. And it shows you track the inputs rather than use whatever was in the template.

---

## Common Follow-Up Questions

These come up in almost every [technical interview sequence](/interview-prep/investment-banking-interview-questions/). Have answers ready before you walk in.

**"Why unlevered free cash flow instead of levered?"**

Because you are valuing the enterprise - the whole business available to all capital providers. Levered FCF (after interest payments) values only the equity and requires cost of equity as the discount rate. Both approaches should produce the same equity value if done correctly. The unlevered approach is cleaner for businesses with complex or changing capital structures, which is most of the transactions you will work on in IB.

**"What happens if the company has a lot of cash on the balance sheet?"**

Cash is a non-operating asset. It does not generate the operating cash flows you projected. You add it back when bridging from enterprise value to equity value. If excess cash is well above operating needs, carve it out explicitly rather than leaving it buried in working capital. A company sitting on two billion dollars of cash it does not need for operations should not get credit for that cash through higher projected FCFs - it should get credit through the equity bridge.

**"How does inflation affect the DCF?"**

Both sides of the equation shift. Higher inflation means higher nominal revenue projections but also a higher risk-free rate, which lifts WACC. A well-constructed DCF is theoretically inflation-neutral if both numerator and denominator are updated consistently. In practice, discount rates get updated faster and more accurately than cash flow projections, which can artificially compress valuations in inflationary environments. The mismatch between a rate-adjusted WACC and projections built on pre-inflation assumptions is one of the more common errors in live models.

**"How do you pick the forecast period?"**

Project until the company reaches steady state - stable growth, stable margins, stable reinvestment rates. For a mature industrial business, five years works. For a hypergrowth software company still expanding margins, ten years is more appropriate. [Wall Street Prep](https://www.wallstreetprep.com/knowledge/walk-me-through-dcf/) puts it directly: the forecast period extends until the company reaches a sustainable, normalized growth state. The practical test is whether your year-five cash flow looks like a business in equilibrium. If margins are still compressing or expanding materially, you have not projected far enough.

**"What would make your DCF wrong?"**

The honest answer: the terminal value assumptions. If your terminal growth rate is off by 50 basis points, or your exit multiple is off by half a turn, the implied value shifts materially. This is why you always present a range, not a point estimate. The second honest answer is the discount rate - if the market re-rates risk materially, your WACC is stale the moment you publish the model. A DCF is not a prediction. It is a structured framework for understanding what a set of assumptions implies about value.

---

## Real-World DCF vs. Interview DCF

The interview version and the client-ready version are related but not identical.

In the interview, you demonstrate that you know the methodology cold and can explain it clearly under pressure. You do not need to defend specific numbers. You need to show that you understand the logic well enough to explain it to someone who has never seen a spreadsheet.

In live work, the hard part is the judgment calls: which comparables anchor the terminal multiple, how to treat non-recurring items in the FCF build, whether to use management guidance or build an independent case, how to handle the SBC debate, and how to present a range to a client without either sandbagging the price or cheerleading it into territory the model cannot support.

[Macabacus](https://macabacus.com/valuation/dcf-overview) calls the DCF "theoretically, the most sound method of valuation" because it is forward-looking and focused on actual cash generation. That description is accurate - when the inputs are built from genuine analysis. When they are reverse-engineered from a target price, the DCF is still technically sound and empirically worthless. The interview answer is your proof of concept. The judgment calls under client pressure are what the job actually requires.

The other thing the interview version does not capture is how rarely you rely on the DCF as a standalone answer. In practice, a DCF is one leg of a three-legged stool - alongside comparable companies and precedent transactions. You use all three, you triangulate, and you form a view on which methodology is most appropriate given the company, the sector, and the market conditions at the time. Candidates who treat the DCF as the only right answer have spent too long in textbooks and not enough time reading actual fairness opinions.

---

## What You Should Do Next

1. **Build a DCF from scratch.** Pull a public company 10-K, project five years of free cash flows in Excel, calculate WACC using Damodaran's current ERP, build the terminal value both ways, and bridge to implied share price. The process will surface every concept you have only read about. You will learn more from one build than from reading ten guides. Pay attention to where the sensitivity table moves most violently - that is the model telling you what matters.

2. **Practice the Tier 2 answer out loud.** Time yourself. It should run about three minutes and sound conversational, not scripted. The mechanics should be automatic; the commentary on assumptions should sound like your own thinking. Record yourself and listen back. If it sounds like you are reciting a memorized passage, keep drilling until it does not.

3. **Read Damodaran on WACC and terminal value.** His [NYU Stern materials](https://pages.stern.nyu.edu/~adamodar/pdfiles/eqnotes/dcfallOld.pdf) are free. The sections on estimating equity risk premiums and choosing terminal growth rates are directly applicable to interview follow-ups - and to actual modeling work once you start. His data page for the implied ERP is worth bookmarking and checking before any major interview cycle.

4. **Drill the follow-up questions.** Practice answering "why unlevered FCF?", "how does inflation affect the DCF?", and "what would make your DCF wrong?" until they are instinctive. These are where interviewers separate candidates who memorized from candidates who understand. A clean answer to "what would make your DCF wrong?" - one that does not get defensive - signals genuine analytical confidence.

5. **Cross-reference with the broader question set.** The DCF question rarely appears alone. See the full [investment banking interview questions guide](/interview-prep/investment-banking-interview-questions/) for how DCF connects to comps, precedent transactions, and the valuation framework interviewers expect you to navigate. The technical interview is not a sequence of isolated questions. It is a conversation about how you think about value - and the DCF is the centerpiece of that conversation.
