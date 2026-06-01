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

Every public company M&A deal eventually runs into the accretion/dilution question. The CFO of the acquirer will be asked, on the earnings call the morning after the announcement, whether the deal is accretive or dilutive to EPS. Analysts will have already modeled it. The answer will move the stock price.

Accretion/dilution analysis is taught in every investment banking training program as a mechanical exercise - plug in the numbers, see whether pro forma EPS is higher or lower than standalone EPS. The mechanics are genuinely straightforward. What is less often taught is how deal teams and CFOs use the analysis strategically, and why a deal that "looks dilutive" on paper might be considered excellent while a deal that "looks accretive" might be terrible.

This article covers the math, the shortcuts, the common mistakes, and the political dimension that makes accretion/dilution analysis as much about communication as calculation.

---

## The Core Concept

Accretion/dilution asks a simple question: after combining two companies, is the acquirer's earnings per share higher or lower than it would have been on a standalone basis?

**Accretive**: Pro forma combined EPS > Acquirer standalone EPS. The deal adds to earnings per share.

**Dilutive**: Pro forma combined EPS < Acquirer standalone EPS. The deal reduces earnings per share.

The intuition is straightforward for stock-for-stock deals: if you issue new shares to acquire a target, you are dividing the combined earnings among a larger share count. Whether EPS goes up or down depends on whether the target's earnings contribution exceeds the dilution from the new shares issued.

For cash deals, the analysis is simpler: you are giving up cash (and therefore the interest that cash was earning, or adding debt and paying interest), and receiving the target's earnings stream. Whether EPS improves depends on the relative yields.

---

## The Math: Three Scenarios

### Scenario 1: All-Cash Deal

The acquirer pays cash for the target. The accretion/dilution calculation focuses on:

1. **Cost of the acquisition**: If funded with cash on hand, the opportunity cost is the after-tax interest income foregone. If funded with debt, the cost is the after-tax interest expense on the new borrowings.
2. **Target's earnings contribution**: Target's net income (adjusted) coming into the combined entity.
3. **Synergies**: Expected cost savings or revenue enhancements.

If (Target Net Income + Synergies) > (After-Tax Cost of Financing), the deal is accretive to EPS in year one or whenever synergies are expected to be realized.

**Example**:
- Acquirer: $1.00 EPS, 100M shares outstanding, $100M net income
- Target: $20M net income
- Cash consideration: $300M at 5% after-tax interest cost = $15M annual interest cost
- Year 1 accretion: $20M - $15M = $5M incremental income on 100M shares = $0.05 EPS accretion
- New EPS: $1.05, accretive by 5%

In all-cash deals, the primary variable is the financing cost relative to the target's earnings yield. The "earnings yield" of the target is its net income divided by the purchase price. If the target's earnings yield exceeds the after-tax cost of debt, the deal is accretive. If not, it is dilutive unless synergies bridge the gap.

### Scenario 2: All-Stock Deal

The acquirer issues new shares to pay for the target. No cash or debt changes hands. The analysis focuses on:

1. **New shares issued**: Deal value / acquirer share price = new shares
2. **Target earnings added**: Target net income
3. **Combined earnings**: Acquirer net income + Target net income
4. **Combined share count**: Acquirer shares + New shares issued
5. **Pro forma EPS**: Combined earnings / Combined share count

If the target's P/E ratio is lower than the acquirer's P/E ratio, the deal is accretive. This is the fundamental logic of stock-for-stock M&A: a high-P/E acquirer can acquire a lower-P/E target with its stock and immediately improve EPS. The acquirer is exchanging shares worth more in the market than the earnings they are acquiring.

**Example**:
- Acquirer: $10 share price, $1.00 EPS, P/E = 10x, 100M shares
- Target: $50M net income, acquired for $400M (implied 8x P/E)
- New shares issued: $400M / $10 = 40M new shares
- Combined earnings: $100M + $50M = $150M
- Combined shares: 100M + 40M = 140M
- Pro forma EPS: $150M / 140M = $1.07 per share
- Accretion: 7%

Now reverse the P/E ratios - acquirer at P/E of 8x, target at P/E of 12x. The deal would be dilutive because you are paying more per dollar of earnings than your own stock is valued at.

### Scenario 3: Mixed Cash and Stock

Most real deals use a combination of cash and stock consideration. The analysis simply combines the two components: add the stock dilution from new shares and subtract the cash cost of financing. Most large public company acquisitions use this structure to manage both dilution and leverage concerns.

---

## Purchase Price Allocation and Its EPS Impact

Here is where many analysts underestimate the complexity of accretion/dilution: the accounting that happens after the deal closes affects EPS for years.

**Purchase Price Allocation (PPA)** is the process of allocating the acquisition price to specific assets and liabilities of the target. Under ASC 805 (Business Combinations), the acquirer must:

1. Identify and fair-value all assets and liabilities of the target, including intangibles not on the target's balance sheet
2. Any excess purchase price above fair value of net assets is recorded as **goodwill**
3. Identified intangible assets (customer relationships, technology, brand, backlog) are amortized over their estimated useful lives

The amortization of acquired intangibles reduces GAAP net income post-closing. This is why you will often see acquirers discussing "cash EPS" or "adjusted EPS" or "EPS excluding purchase accounting" - they are stripping out the amortization charge that results from PPA.

**Illustrative PPA Impact**:

| Item | Amount |
|---|---|
| Purchase price | $500M |
| Book value of net assets | $150M |
| Excess purchase price | $350M |
| Allocated to customer relationships (10-year life) | $120M |
| Allocated to technology (5-year life) | $80M |
| Allocated to other identifiable intangibles | $50M |
| Residual to goodwill | $100M |

Annual amortization from this PPA: ($120M / 10) + ($80M / 5) + ($50M / 7) = $12M + $16M + $7M = $35M per year in pre-tax amortization charges.

If the tax rate is 25%, after-tax impact on net income = $35M x 0.75 = $26M per year in additional EPS drag that would not exist without the acquisition.

A deal that looks modestly accretive before purchase accounting may look moderately dilutive after. This is why management teams almost always present accretion/dilution on both a GAAP basis and a "cash" or "adjusted" basis. They are not being dishonest (in most cases) - the cash economics of the deal may genuinely be attractive even if GAAP accounting makes it look costly.

Investors have generally learned to look through amortization of acquired intangibles, treating it as a non-cash charge with limited economic relevance. But the GAAP number still matters because it affects reported EPS and therefore screens that fund managers use.

---

## The P/E Parity Crossover

There is a concept called the "P/E parity" or "crossover" point in stock-for-stock deals. This is the price at which the deal switches from accretive to dilutive - or the maximum price the acquirer can pay before EPS accretion goes negative.

In a pure stock deal without synergies:
- **Crossover price** = (Acquirer P/E) x (Target Net Income)

If the acquirer pays more than this, GAAP EPS is dilutive. If the acquirer pays less, it is accretive.

This crossover calculation is frequently presented in banker pitch books as a framing device: "At our proposed offer price, the deal is modestly dilutive, but with $50M of expected synergies, it becomes accretive by year two." The synergy assumption is where the analysis becomes marketing.

---

## Synergies: The Critical Adjustment

No accretion/dilution analysis in an M&A pitch book ever concludes "this deal is dilutive even with synergies." The synergy assumption is sized to make the deal look accretive, usually by year two or three.

This is understood by everyone in the room. The question competent acquirers ask is not "what synergies make this deal accretive?" but "what synergies are genuinely achievable, and how confident are we in that number?"

Synergies typically come in two categories:

**Cost synergies** (easier to realize, faster to materialize):
- Elimination of duplicative overhead (corporate functions, public company costs)
- Procurement savings from combined purchasing scale
- Facility consolidation
- Technology rationalization

**Revenue synergies** (harder to realize, slower, higher risk):
- Cross-selling target's products to acquirer's customer base
- Geographic expansion
- Combined product offering at a higher price point

McKinsey's research on M&A synergy realization (published in their "The Real Deal on M&A Synergies" report) found that companies capture on average about 70% of expected cost synergies but only 50% of expected revenue synergies. Revenue synergies also typically take 2-3 years longer to materialize than cost synergies.

The implication: if the deal only works on an accretion/dilution basis because of aggressive revenue synergies assumed in year one, the analysis is being used to rationalize a price rather than evaluate it.

---

## The Politics: Why Dilutive Deals Get Done and Accretive Deals Get Killed

Here is the uncomfortable truth about accretion/dilution analysis that almost no training program covers: the analysis does not determine whether a deal should happen. It is used to justify decisions that have already been made for strategic reasons.

**Dilutive deals get done** when:
- The target has capabilities or market position that the acquirer cannot replicate organically
- The deal is defensive - blocking a competitor from acquiring the target
- The long-term strategic value far exceeds the near-term EPS drag
- The board and management have concluded that EPS accretion is the wrong metric for this particular situation

Amazon, historically, has made most of its large acquisitions that were dilutive at announcement. The acquisitions were justified on strategic grounds. The market generally rewarded the strategy.

**"Accretive" deals are sometimes terrible** when:
- The acquirer has a very low P/E (cheap stock) and is buying anything that has a higher earnings yield than its borrowing cost - this is not strategy, it is financial engineering
- The assumed synergies are fictitious and included purely to get to an accretive result
- The acquired business is low-quality and the accretion comes entirely from financial structure
- The deal is accretive in year one but the target's business is in secular decline

WSO community discussions on accretion/dilution analyses frequently return to this point. A buy-side analyst commented in one thread: "I have seen deals get done because the CFO wanted to show accretion on the earnings call. The strategic rationale was weak and the business was deteriorating. The deal was technically accretive for two years and then the goodwill writedown came." This is not hypothetical - the history of M&A is littered with deals that were "accretive" at announcement and disastrous thereafter.

---

## How to Build the Model

A basic accretion/dilution model has the following components:

1. **Standalone acquirer income statement**: Current year and forecast EPS, shares outstanding
2. **Target income statement**: Net income adjusted for the effects of the transaction
3. **Transaction structure**: Consideration mix (cash %, stock %), offer price, premium
4. **Financing assumptions**: Interest rate on any new debt, opportunity cost of cash used
5. **Purchase price allocation**: Estimated fair value step-ups, intangible amortization
6. **Synergies**: Phased in by year, net of costs to achieve
7. **Pro forma combined**: Combined income, combined shares, pro forma EPS
8. **Accretion/dilution**: Pro forma EPS vs. standalone acquirer EPS, in dollars and percent

The model should be run across a range of offer prices (typically presented as a sensitivity table: offer price on the X-axis, synergy assumption on the Y-axis, accretion/dilution in each cell). This is standard deliverable format.

For the broader context of how this analysis fits within the full M&A advisory process, see our article on the [M&A process from pitch to closing](/technical/ma-process-walkthrough-pitch-to-closing/).

---

## Interview Context

Accretion/dilution is a standard investment banking technical interview topic. The questions come in three types:

**Conceptual**: "When would a stock deal be accretive vs. dilutive?" Answer: accretive when the acquirer's P/E is higher than the deal P/E (target's earnings yield exceeds acquirer's earnings yield implied by stock). Dilutive when reversed.

**Calculation**: "Company A has 100M shares at $20, earns $200M. Company B earns $50M. A acquires B for $400M all stock. Is the deal accretive or dilutive?" (New shares: 20M. Combined income: $250M. Combined shares: 120M. Pro forma EPS: $2.08 vs. standalone $2.00. Accretive by $0.08 or 4%.)

**Judgment**: "Why might a company do a dilutive acquisition?" This is where you demonstrate that you understand the strategic and political context, not just the arithmetic.

For a full list of technical interview questions with expected answer frameworks, see our guide on [investment banking interview questions](/interview-prep/investment-banking-interview-questions/).

---

## Common Mistakes

**Forgetting to add back amortization of intangibles on a cash basis**: When comparing cash EPS vs. GAAP EPS, you need to add back the post-tax amortization charge. Forgetting this understates cash accretion.

**Using the wrong share count**: Diluted share count for the denominator, not basic. Include all in-the-money options and convertibles in both acquirer and target shares.

**Synergies net of taxes but gross of costs to achieve**: One-time restructuring charges to realize synergies (severance, facility closure costs) need to be modeled separately. Synergies should be shown net of one-time costs over the relevant period.

**Ignoring the accretion from target's cash**: If the target has significant cash on its balance sheet, some of that cash is being "acquired" at deal price and can be used to reduce net consideration. Ignoring this overstates dilution.

**Not reconciling to the acquirer's model**: Your pro forma EPS should tie to a model that shows both the acquirer's standalone income statement and the target's income statement on a combined basis. If the accretion number is just a formula without an underlying combined income statement, it is not credible.

---

## What You Should Do Next

1. **Build an accretion/dilution model for a completed public acquisition** - choose any major acquisition announced in the past two years (look at press releases on the SEC EDGAR full-text search or financial news). Build the standalone acquirer and target income statements, model the transaction structure, estimate the PPA, and calculate year-one accretion/dilution. Then compare your result to what management said on the announcement earnings call.

2. **Practice the P/E crossover calculation mentally** - given an acquirer at 15x P/E and a target being acquired for 10x P/E, is the all-stock deal accretive or dilutive? What if the acquirer is at 8x and the target is being acquired at 12x? Internalize the relationship until you can answer without a calculator.

3. **Find a case where management's synergy assumptions proved wrong** - read the initial deal announcement and management guidance on synergies, then find the acquirer's annual report 3 years later. Did they achieve the synergies? Did they take a goodwill impairment? This exercise will calibrate your skepticism about deal synergy assumptions.

4. **Understand the purchase accounting rules** - read ASC 805 (Business Combinations) even briefly. Understanding what gets fair-valued, what becomes goodwill, and how long acquired intangibles are amortized will make you dramatically more credible in deal conversations than someone who just knows the EPS math.

5. **Model the sensitivity table** - for any accretion/dilution model you build, create a sensitivity table with offer price on one axis and synergy assumption on the other. Show at what price the deal becomes dilutive even with synergies. This is the deliverable that actually matters in a deal process. See our article on [comparable companies analysis](/technical/comparable-companies-analysis/) for how valuation ranges interact with this threshold.
