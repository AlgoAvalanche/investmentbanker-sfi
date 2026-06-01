---
title: "Accretion/Dilution: The Math and the Politics"
description: "Understand accretion dilution analysis in M&A - the EPS math, purchase price allocation, stock vs. cash deals, and how deal teams use it to justify prices."
primary_keyword: "accretion dilution"
secondary_keywords: ["EPS accretion", "merger math", "stock-for-stock acquisition", "purchase price allocation"]
category: "technical"
date: "2026-05-24"
author: "Sterling Prentice"
internal_links: ["/technical/ma-process-walkthrough-pitch-to-closing/", "/technical/comparable-companies-analysis/", "/interview-prep/investment-banking-interview-questions/"]
---

# Accretion/Dilution: The Math and the Politics

The morning after a major acquisition is announced, the CFO of the acquiring company takes questions from analysts on an earnings call. The first substantive question - almost invariably - is whether the deal is accretive or dilutive to EPS, and by how much, and in which year. The stock will move based on the answer. If the CFO says "dilutive in year one, accretive by year two with synergies," the market will decide whether it believes that timeline. If the CFO says "immediately accretive," the market will decide whether the synergy math is credible.

Accretion/dilution analysis sits at an unusual intersection: it is simultaneously one of the most mechanical exercises in investment banking and one of the most politically charged. The mechanics are genuinely straightforward - build a combined income statement, count the shares, divide. What is less often taught is the layer underneath: how deal teams reverse-engineer synergy assumptions to produce the accretion conclusion management wants, why a deal that clears the accretion threshold can still destroy billions in shareholder value, and why the most sophisticated acquirers have stopped treating accretion as a pass/fail test at all.

This article covers the full picture - the core formula, the deal structure hierarchy, purchase accounting mechanics, the political economy of EPS management, and the common mistakes that separate analysts who understand the tool from those who are merely executing it.

---

## The Core Question and the Basic Formula

At its simplest, accretion/dilution answers one binary question: does the acquirer's earnings per share go up or down after the transaction closes?

**Accretive**: Pro forma EPS exceeds standalone EPS. The deal adds to earnings per share.

**Dilutive**: Pro forma EPS falls below standalone EPS. The deal reduces earnings per share.

The Corporate Finance Institute defines it as "a simple test used to determine whether a proposed merger or acquisition will increase or decrease post-transaction EPS" - but critically frames it as a screening tool that should complement DCF valuations and other analyses, not replace them.[^1]

The formula structure has three steps:

**Step 1 - Pro Forma Net Income:**

Pro Forma NI = Acquirer NI + Target NI + After-Tax Synergies - After-Tax Interest Expense on New Debt - After-Tax Foregone Interest Income on Cash Used - After-Tax Intangible Amortization

**Step 2 - Pro Forma Share Count:**

Pro Forma Shares = Acquirer Diluted Shares + New Shares Issued (stock deals only)

**Step 3 - Accretion/Dilution:**

Pro Forma EPS = Pro Forma NI / Pro Forma Shares

Accretion/Dilution % = (Pro Forma EPS - Standalone EPS) / Standalone EPS x 100

Three adjustments to net income do most of the work: after-tax interest expense on acquisition debt, after-tax foregone interest income on any cash deployed, and after-tax synergies. The single most common calculation error is forgetting to tax-affect the interest expense. Always apply (1 - tax rate) to the debt cost. A $1 billion acquisition funded with debt at 5% interest, at a 25% tax rate, reduces after-tax earnings by approximately $37.5 million per year - not $50 million.[^2]

---

## Deal Structure and Its Effect on the Math

Deal structure is the primary driver of where accretion/dilution lands before synergies are even considered. The hierarchy from most to least accretive runs in a consistent order.

**All-cash from existing balance sheet** is the most accretive structure. No new shares are issued, so the share count is unchanged. The only cost is foregone interest income on the cash deployed - which at current rates is real but typically modest relative to the target's earnings contribution. If the acquirer has $500 million in cash earning 4% and deploys it on an acquisition, the after-tax opportunity cost at a 25% tax rate is $15 million per year. If the target earns $50 million, the deal adds $35 million in net income to an unchanged denominator.

**All-cash financed with new debt** is the next tier. Still no share dilution, but now the after-tax interest expense is a direct drag on earnings. This structure is accretive as long as the target's earnings yield (net income divided by purchase price) exceeds the after-tax cost of debt.

**Mixed cash and stock** falls in the middle. The analysis blends both effects: partial share dilution from newly issued shares and partial interest drag from debt financing.

**All-stock** is the most dilutive structure in the absence of synergies. Every dollar of acquisition value requires issuing new shares, expanding the denominator. The P/E shortcut rule applies cleanly here: in an all-stock deal with no synergies or debt, the transaction is accretive if and only if the target's P/E is lower than the acquirer's P/E. The high-P/E acquirer is buying earnings at a cheaper multiple than the market values its own earnings, so combining the two improves the blended EPS. Reverse the multiples and the deal is dilutive by construction. This shortcut breaks down immediately once synergies, cash components, debt, or purchase accounting intangibles enter the calculation - it is useful for back-of-envelope work in interviews, never sufficient for actual deal analysis.[^3]

**Worked example - all-stock:**
- Acquirer: 100 million shares, $10 share price, $1.00 EPS, 10x P/E
- Target: $50 million net income, acquired for $400 million (implied 8x P/E)
- New shares issued: $400M / $10 = 40 million shares
- Combined net income: $100M + $50M = $150 million
- Combined shares: 100M + 40M = 140 million
- Pro forma EPS: $150M / 140M = $1.07
- Result: accretive by $0.07, or 7%

Reverse to acquirer at 8x and target acquired at 12x - the deal flips dilutive by the same logic.

---

## The Multi-Year Dimension

Year-one accretion/dilution is not the number that matters most. The actual trajectory over years one through three tells the real story, and understanding it separates practitioners from exam-passers.

Year one is almost always the hardest year, even in well-structured deals. Integration costs - severance payments, facility closure charges, technology migration expenses, advisory fees - hit the income statement in year one and suppress earnings. Synergies are typically phased in at partial run-rate in year one and reach full realization by year two or three.

The Investment Banking Council of America provides a concrete illustration of this trajectory using industry benchmark data: Year 1 standalone EPS of $2.50, pro forma $2.45, dilutive by 2.0%. Year 2 standalone $2.70, pro forma $2.80, accretive by 3.7%. Year 3 standalone $2.90, pro forma $3.05, accretive by 5.2%.[^4] The deal that looks modestly dilutive at close is delivering 5.2% accretion by year three.

Integration cost benchmarks vary significantly by sector. Healthcare and life sciences run approximately 10.1% of target revenues. Consumer sectors run approximately 7.5%. Technology, media, and telecom run above 5.6% of target revenues.[^4] These numbers matter because they determine how quickly year-one drag reverses into accretion. A technology deal with 5.6% integration costs ramps faster than a healthcare deal absorbing 10.1% before synergies can offset.

Management teams and boards that evaluate accretion on a single-year basis are using the tool incorrectly. The standard for serious deal evaluation is a minimum three-year accretion/dilution schedule, stress-tested across synergy scenarios.

---

## Purchase Price Allocation and the GAAP/Cash EPS Gap

Purchase price allocation is the accounting mechanism that creates a persistent gap between GAAP EPS and cash EPS post-close - and it is a gap that confuses junior analysts who have not worked through a live deal.

Under ASC 805, the acquirer must identify and fair-value all assets and liabilities of the target at close, including intangible assets that did not appear on the target's balance sheet - customer relationships, developed technology, trade names, order backlog. These get allocated a portion of the purchase price premium above book value. Any remaining premium becomes goodwill, which is not amortized under current U.S. GAAP. The identified intangibles, however, are amortized over their estimated useful lives - typically three to fifteen years depending on the asset class.

That amortization is a real GAAP charge against reported earnings. It reduces GAAP net income every year for the life of the amortization schedule. A $500 million acquisition where purchase accounting allocates $200 million to amortizable intangibles with a blended seven-year life produces roughly $28.6 million per year in pre-tax amortization - approximately $21 million after-tax at a 25% rate. That is $21 million per year in EPS drag that did not exist before the acquisition, on top of the interest expense from acquisition debt.

This is why acquirers almost universally present accretion/dilution on two bases: GAAP EPS and adjusted (cash) EPS, with the latter adding back post-tax intangible amortization. Management is not being disingenuous - the cash economics of the deal may be genuinely attractive while GAAP accounting makes it look dilutive. Investors have learned to look through acquired intangible amortization as a non-cash, non-recurring charge. The GAAP number still matters because it appears in reported EPS and affects the screens institutional managers use, but it is the adjusted number that drives deal economics conversations.[^5]

---

## Synergies: Where the Math Meets the Politics

No accretion/dilution schedule in a pitch book ever concludes that the deal is dilutive even accounting for synergies. This is not coincidence. Synergy assumptions are the primary mechanism by which investment bankers make the math support a conclusion that has already been reached on strategic or relationship grounds.

The mechanics of synergy modeling are straightforward. Cost synergies - headcount reduction, facility consolidation, procurement savings from combined purchasing scale, technology rationalization - are modeled as additions to combined net income, tax-affected. Typical cost synergy assumptions run 5 to 15 percent of the target's cost base.[^2] Revenue synergies - cross-selling, geographic expansion, combined pricing power - are added on a separate line, usually more heavily discounted.

The practitioner's rule of thumb: cost synergies are bankable at roughly 70 cents on the dollar, revenue synergies at 50 cents. Revenue synergies also typically take two to three years longer to materialize than cost synergies, which means assuming full revenue synergy realization in year one is aggressive enough to be misleading. When a pitch book produces an accretion result that depends on year-one revenue synergies running at full run-rate, that is a flag, not a conclusion.

Integration costs are the offset that is most often understated. Those costs - IBCA's sector benchmarks range from 5.6% to 10.1% of target revenues - are the cash required to actually capture the synergies.[^4] A deal where synergy assumptions are sized to produce accretion but integration cost assumptions are conservatively low is not a conservative model. It is an optimistic model that has been made to look balanced.

The legal dimension of this math is rarely discussed in training programs. Carpenter Wellington, writing from a transactional law perspective, notes that understanding accretion/dilution outcomes "will inform the approach taken to legal negotiations and impact how the legal documentation is drafted" - including representations and warranties, earnout structures, and indemnification thresholds that are calibrated to the synergy and accretion assumptions in the deal model.[^6] The numbers do not stay in the banker's pitch book. They flow downstream into binding legal agreements.

---

## The Political Economy of EPS Management

The uncomfortable structural reality beneath accretion/dilution analysis is that EPS is not just an accounting metric for public company management - it is a performance benchmark tied directly to executive compensation, a key driver of analyst ratings, and a number the CEO will be quoted on by name the morning after announcement.

This creates systematic distortions. Management teams under EPS-linked compensation pressure will structure deals to achieve accretion even when the optimal deal structure from a pure economic standpoint might be different. Acquirers will use stock consideration to avoid cash outflows, then watch the dilution math force aggressive synergy assumptions to get back to accretion. Bankers accommodate this dynamic by sizing synergies to arrive at whatever accretion number the board wants to present.

The empirical evidence on whether this produces good outcomes is sobering. A study by Andrade examining 224 large acquisitions found that predicted EPS accretion positively affects announcement-day stock returns - the market does reward accretive deals on announcement - but accretion does not significantly improve long-term stock performance relative to dilutive deals.[^4] The market is partially responding to optics. The deals that are structured to produce accretion at announcement are not systematically outperforming over the following three to five years.

What the data shows is that the best acquirers have effectively stopped treating accretion as a primary criterion. According to Bain and Company's 2025 M&A report, global deal value reached approximately $3.5 trillion in 2024, up 15% year-over-year, with corporate M&A up 12%. Boards are "increasingly accepting short-term dilution for long-term strategic positioning."[^4] A Deloitte 2025 survey found that 88% of corporate respondents changed their deal-targeting approaches within the prior two years - a signal that the analytical framework around accretion is being consciously revised at the board level.[^4]

The technology sector led this shift. Amazon, Alphabet, and Meta have each executed acquisitions that were dilutive at announcement and justified entirely on strategic grounds - capability acquisition, competitive blocking, market entry. In most cases the market rewarded the strategic logic rather than punishing the EPS dilution. The orthodoxy that an accretive deal is a good deal and a dilutive deal requires an explanation has loosened substantially, at least at the top of the market.

For the analyst or associate sitting in a pitch book review, the practical implication is this: understanding accretion/dilution means knowing the math, knowing where the levers are, and knowing when the math is being used to justify a conclusion rather than reach one. Those are three different skills. Training programs mostly teach the first.

---

## How to Build the Model

A complete accretion/dilution model runs eight components in sequence. Wall Street Prep identifies this as one of the core models analysts build during acquisition evaluations - the full version includes purchase price allocation mechanics, deferred tax treatments, asset sale versus stock transaction considerations including 338(h)(10) elections, and stub-period calendar-year Excel modeling.[^7]

The eight components:

1. **Standalone acquirer income statement** - current year and projected EPS, fully diluted share count including in-the-money options and convertibles
2. **Target income statement** - LTM and projected net income, adjusted for one-time items
3. **Transaction structure** - consideration mix (cash percentage, stock percentage), offer price, implied premium
4. **Financing assumptions** - interest rate on new acquisition debt, opportunity cost rate on cash deployed
5. **Purchase price allocation** - estimated fair value step-ups for identified intangibles, amortization schedule by asset class
6. **Synergies** - cost and revenue synergies phased in by year, net of integration costs to achieve, tax-affected
7. **Pro forma combined income statement** - combining all the above into a single schedule
8. **Accretion/dilution output** - pro forma EPS versus standalone EPS in dollars and percent, across at least three years

The final deliverable is a sensitivity table with offer price on one axis and synergy assumption on the other, showing accretion/dilution in each cell. This makes the crossover point visible - the price at which the deal flips dilutive even with optimistic synergies. That crossover analysis is the number that actually matters in a negotiation. It defines how much the acquirer can pay before the EPS math breaks down entirely.

For context on how this analysis fits within the full deal process, see our article on the [M&A process from pitch to closing](/technical/ma-process-walkthrough-pitch-to-closing/).

---

## Interview Context

Accretion/dilution questions in investment banking interviews come in three types, and interviewers are testing different things with each.

**Conceptual questions** test whether you understand the underlying logic - not the formula. "When is a stock deal accretive?" The answer is not "when the math works out." It is: accretive when the acquirer's P/E exceeds the deal P/E paid for the target, because the acquirer is buying earnings at a cheaper multiple than its own stock is valued at. Interviewers want the reasoning, not the plug.

**Calculation questions** test execution under pressure. "Company A has 100M shares at $20, earns $200M net income. Company B earns $50M. A acquires B for $400M all stock. Accretive or dilutive?" New shares: $400M / $20 = 20M. Combined income: $250M. Combined shares: 120M. Pro forma EPS: $2.08 versus standalone $2.00. Accretive by 4%. The ibinterviewquestions.com guide notes these questions rarely appear in isolation - they typically emerge as follow-ups to broader M&A discussions or deal walkthroughs where accretion is one piece of a larger deal evaluation.[^3]

**Judgment questions** test whether you understand the politics. "Why would a company do a dilutive acquisition?" This is where you demonstrate that you understand EPS accretion as a necessary but insufficient test - that strategically sound deals may be year-one dilutive, that management incentive structures create systematic biases toward accretion engineering, and that the analyst's job is to present the full picture rather than find the synergy assumption that produces the number the client wants.

The most common interview error on accretion questions is leading with the formula before the logic. Interviewers want to know you understand why each component matters. The second most common error is failing to acknowledge the limitations - every interviewer expects a candidate to note that EPS accretion does not equal economic value creation, and that DCF and ROIC analysis are required complements.

For a full list of technical questions with expected frameworks, see our guide on [investment banking interview questions](/interview-prep/investment-banking-interview-questions/).

---

## Common Mistakes

**Not tax-affecting interest expense.** The single most frequent modeling error. Interest expense on acquisition debt reduces pre-tax income, not after-tax income. Always multiply the gross interest cost by (1 - tax rate). At a 25% tax rate, $50 million of interest becomes $37.5 million of after-tax earnings drag.

**Using basic instead of fully diluted share count.** The denominator in EPS calculations must be fully diluted - including in-the-money options, warrants, and convertibles for both the acquirer and any shares issued to the target. Using basic shares overstates pro forma EPS and understates dilution.

**Omitting foregone interest income.** If the acquirer uses cash on its balance sheet, it loses the after-tax return it was earning on that cash. This is a real economic cost that belongs in the pro forma income statement. Leaving it out overstates accretion in cash deals.

**Applying synergies pre-tax.** Synergies flow through as incremental earnings, which means they are taxable. A $100 million cost synergy at a 25% tax rate produces $75 million of after-tax earnings improvement, not $100 million. Pitchbooks that apply synergies without tax-affecting are inflating the accretion result.

**Treating year-one accretion as the full story.** Single-year analysis misses the trajectory. Initial dilution frequently reverses into meaningful accretion by year two or three as integration costs roll off and synergies reach run-rate. A deal modeled only on year-one results will systematically undervalue transactions with back-loaded synergy profiles.

**Treating accretion as equivalent to value creation.** The most dangerous conceptual error. A deal can be EPS accretive while destroying shareholder value - through overpayment relative to intrinsic value, through increased financial leverage and balance sheet risk, or through strategic misallocation of capital. EPS is an accounting measure. Value creation is an economic one. The two can diverge materially.[^1] Always pair accretion/dilution analysis with DCF analysis, IRR analysis, and ROIC evaluation to determine whether the deal actually creates economic value.

---

## What You Should Do Next

1. **Build a model for a completed public acquisition.** Choose any major deal announced in the past two years - press releases are on SEC EDGAR. Build the standalone income statements for both parties, model the transaction structure, estimate the PPA, and calculate three-year accretion/dilution. Then read the transcript from the announcement earnings call. Compare management's stated accretion expectations to your model. The gap is instructive.

2. **Practice the P/E crossover calculation without a calculator.** Acquirer at 15x P/E, target acquired at 10x, all-stock deal - accretive or dilutive? Acquirer at 8x, target at 12x? Work through enough examples that the relationship is intuitive. This is a standard interview question that should take under thirty seconds.

3. **Find a deal where synergy assumptions proved wrong.** Read the initial announcement and management guidance on synergies. Find the acquirer's annual report three years later. Did they achieve the synergies? Did they take a goodwill impairment? This exercise builds calibrated skepticism about pitch book synergy assumptions - which is the most practically valuable skill for anyone working in M&A.

4. **Model the sensitivity table.** For any accretion/dilution model, build a two-dimensional sensitivity table with offer price on one axis and synergy assumption on the other. Show the crossover price - where the deal flips dilutive even with maximum realistic synergies. That is the number that actually defines negotiating room. See our article on [comparable companies analysis](/technical/comparable-companies-analysis/) for how valuation ranges interact with this threshold.

5. **Read ASC 805 briefly.** Understanding what gets fair-valued, what becomes goodwill, how long acquired intangibles are amortized, and what triggers a goodwill impairment test will make you materially more credible in deal conversations than someone who only knows the EPS formula. It takes two hours. It is worth it.

---

[^1]: Corporate Finance Institute, "Accretion Dilution Analysis," corporatefinanceinstitute.com/resources/valuation/accretion-dilution/
[^2]: Finance-Able, "Accretion/Dilution: The Ultimate Guide," finance-able.com/accretion-dilution/
[^3]: IB Interview Questions, "Accretion/Dilution Analysis Step-by-Step Guide," ibinterviewquestions.com/blog/accretion-dilution-analysis-guide
[^4]: Investment Banking Council of America, "Accretion/Dilution Analysis in Merger Modeling," investmentbankingcouncil.org/blog/accretiondilution-analysis-in-merger-modeling - citing Deloitte 2025 Survey, Bain and Company 2025 Report, and Andrade study of 224 acquisitions
[^5]: Carpenter Wellington PLLC, "Valuing an M&A Transaction: Accretion/Dilution Analysis," carpenterwellington.com/post/valuing-an-ma-transaction-accretion-dilution-analysis/
[^6]: Carpenter Wellington PLLC, ibid.
[^7]: Wall Street Prep, "Accretion/Dilution Analysis," wallstreetprep.com/knowledge/financial-modeling-quick-lesson-accretion-dilution-model/
