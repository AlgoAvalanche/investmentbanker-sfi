---
title: "Comparable Companies Analysis: Picking the Right Set Without Looking Stupid"
description: "Master comparable companies analysis - how to select trading comps, calculate EV/EBITDA and other multiples, and present a defensible peer set to clients."
primary_keyword: "comparable companies analysis"
secondary_keywords: ["trading comps", "valuation multiples", "EV/EBITDA", "peer selection", "equity research"]
category: "technical"
date: "2026-05-26"
author: "Sterling Prentice"
internal_links: ["/technical/dcf-valuation-step-by-step/", "/technical/precedent-transactions/", "/technical/football-field-charts/"]
---

# Comparable Companies Analysis: Picking the Right Set Without Looking Stupid

Comparable companies analysis is the first valuation methodology most analysts learn and the one most likely to embarrass you in front of a client if you have not thought carefully about it. Selecting the wrong peer set is not just a technical mistake - it signals to anyone in the room that you do not actually understand the business you are valuing.

This article covers the mechanics of building a comps set, how to think about which companies actually belong in it, how to calculate and interpret the key multiples, and - importantly - how to present comps with intellectual honesty rather than as a reverse-engineered answer to a predetermined valuation range.

---

## What Comparable Companies Analysis Is Actually Doing

The theoretical underpinning of trading comps is the law of one price: similar assets should trade at similar prices. If two businesses have identical risk profiles, growth rates, and capital efficiency, they should trade at the same multiple of earnings. Differences in multiples therefore reflect differences in one or more of these underlying characteristics.

In practice, no two companies are identical. The entire exercise of comps analysis is about finding companies that are similar enough that their multiples are informative, and being honest about the ways they are not comparable.

Damodaran, who has been running the world's most useful public valuation database at NYU for decades, makes this point repeatedly: multiples are not answers, they are shorthand for a set of underlying assumptions about growth and risk. When you apply a 12x EV/EBITDA multiple to a business, you are implicitly making a statement about what growth rate and discount rate that multiple implies.

The equity research analysts at major banks spend considerable time defending their comparable set selection in their models and research reports. It is the most subjective part of the analysis - and therefore the part most likely to be challenged.

---

## The Primary Comparable Companies Analysis Multiples

Before selecting companies, you need to know what you are measuring. The relevant multiples depend on the industry, but the most commonly used are:

| Multiple | Formula | Best For |
|---|---|---|
| EV/EBITDA | Enterprise Value / EBITDA | Capital-intensive businesses, most industrials |
| EV/EBIT | Enterprise Value / EBIT | Businesses where D&A is economically meaningful |
| EV/Revenue | Enterprise Value / Revenue | High-growth companies with low or negative margins |
| P/E | Share Price / EPS | Banks, insurance, financial services |
| EV/EBITDA - Capex | Enterprise Value / (EBITDA - Capex) | Heavy capex businesses like telecoms, utilities |
| EV/Unlevered FCF | Enterprise Value / Unlevered Free Cash Flow | Asset-light businesses with low capex |

A quick note on EV/Revenue: this multiple is often used for SaaS and high-growth technology companies where EBITDA is minimal or negative. The problem is that it buries the question of profitability entirely. A company with 5x revenue but negative margins can trade at the same EV/Revenue as a company with 5x revenue and 30% margins only if the market believes the unprofitable company will eventually converge on the profitable one. Sometimes this is true. Often it is not, which is why the 2021-2022 SaaS multiple compression was so brutal.

---

## Enterprise Value: Getting the Calculation Right

Before you can calculate any multiple, you need enterprise value. This is where many junior analysts make errors.

**Enterprise Value = Market Capitalization + Total Debt + Preferred Stock + Minority Interest - Cash and Cash Equivalents**

Some clarifications:

- "Total Debt" means all interest-bearing debt - short-term, long-term, current portion of long-term. Operating leases post-ASC 842 are treated as debt in many contexts; be consistent across your peer set.
- Cash means excess cash, not minimum operating cash. For most public companies, the distinction is not material, but for capital-light businesses with large cash balances, it matters.
- Minority interest is included because EV represents the full enterprise; if you own 80% of a subsidiary but consolidate 100% of its EBITDA, you need 100% of its enterprise value.
- Preferred stock is included at liquidation preference, not market value.

One practical note: equity research and financial data providers like Bloomberg, FactSet, or Capital IQ will calculate EV for you. But always check their treatment of operating leases, unfunded pension liabilities, and off-balance-sheet items. Providers are not always consistent.

For the denominator - EBITDA, EBIT, revenue - you are typically using Last Twelve Months (LTM) and one-to-two years of forward consensus estimates (NTM, NTM+1). LTM reflects what the business has actually done; forward multiples reflect growth expectations.

---

## Selecting the Peer Set: The Art of the Exercise

Here is where comparable companies analysis either becomes a genuine analytical tool or a dressed-up rationalization. The steps are:

### Step 1: Define the Business You Are Valuing

Before looking for comparables, be precise about what the subject company actually does. Not "technology company" - something like "provider of cloud-based ERP software to mid-market manufacturers with 85% recurring revenue and 25% EBITDA margins." The more specific your description, the harder it is to include irrelevant companies and the easier it is to defend your selection.

### Step 2: Start with the Obvious Candidates

Begin with direct competitors. If the company sells enterprise software, other enterprise software companies belong on a preliminary list. Check the company's own investor presentations and annual reports - companies typically name their competitors explicitly in 10-K filings.

Check the equity research coverage universe. Analysts who cover the company typically name a peer group in their models - this is a useful starting point, though equity analysts have their own biases in peer selection (they tend to include companies they also cover).

### Step 3: Apply Screening Criteria

Narrow the list using quantitative screens:

- **Business model**: SaaS vs. on-premise software are not comparable, even in the same end market. Pure-play vs. diversified conglomerate is not comparable.
- **Size**: A $500M revenue company is generally not comparable to a $15B revenue company - the market prices in different liquidity, scale advantages, and coverage dynamics.
- **Geography**: A US domestic business and a global business in the same sector may face different macro exposures and regulatory environments.
- **Growth profile**: A 5% grower and a 25% grower are not directly comparable in most metrics. If you are using revenue multiples, growth is entirely the story - include it in your analysis or the multiple is meaningless.
- **Margins**: Very high-margin and very low-margin businesses in the same sector may have different capital requirements that make direct multiple comparisons misleading.

There is no bright-line rule on how many companies to include. A reasonable comps set for mid-market M&A advisory typically has 8-15 companies. Fewer than 5 is usually too thin; more than 20 starts to dilute the exercise.

### Step 4: Be Honest About the Limitations

Every comps set has weaknesses. The intellectual honesty that separates good analysts from mediocre ones is the willingness to state those weaknesses explicitly rather than pretend the comps are cleaner than they are.

Common situations requiring disclosure:
- "Company X is included because it is the closest peer by business model, though it is 3x the size of the subject company"
- "The peer set skews toward US-listed companies; European comparable companies trade at a discount due to lower liquidity and different investor bases"
- "Two of the six comparables are PE-backed and therefore not publicly traded; we have used transaction multiples as a proxy"

A WSO user with an associate-level screen name made a point that circulates in banking forums regularly: "If your comps only work because you excluded the one obvious competitor that trades at 6x when everyone else trades at 11x, you are going to get destroyed in the client meeting." The correct approach is to include it and explain why it should be discounted in the analysis.

---

## Building the Comps Table

The standard comps table format in investment banking:

**Headers (left to right)**:
Company name | Ticker | Share price (as of date) | Market cap | EV | EV/Revenue LTM | EV/Revenue NTM | EV/EBITDA LTM | EV/EBITDA NTM | P/E NTM | Revenue growth NTM | EBITDA margin LTM

**Summary statistics at the bottom**:
- Mean
- Median
- 25th percentile
- 75th percentile

Use median, not mean, as your primary reference point. A single outlier company - the one that is growing at 40% while everyone else is growing at 10% - will skew the mean significantly.

Color conventions: Macabacus and most bank templates use light blue headers, alternating white and light gray rows, and bold summary statistics. Whatever convention you use, be consistent. Nothing says "rushed at 4 a.m." like an inconsistently formatted comps table.

---

## Interpreting the Multiples: Not a Mechanical Exercise

Once you have the multiples, the question is what to do with them. Here is the critical point: you do not simply apply the median multiple to get to a value. You apply a multiple that reflects where the subject company should sit within the distribution given its specific characteristics.

A company that grows faster than the median peer should trade at a premium to the median. A company with higher margins should trade at a premium. A company that is smaller, less liquid, or more customer-concentrated should trade at a discount.

This is where the analysis becomes genuinely analytical rather than mechanical. You should be able to articulate: "The subject company grows at 18% versus the peer median of 12%, has margins 5 points above median, but trades at a discount due to customer concentration and pending regulatory review - we therefore apply a multiple at the 55th-65th percentile of the peer group."

Damodaran has a useful framework he calls "pricing" versus "valuing" - comps analysis is pricing, not valuation. You are benchmarking the market's assessment of similar businesses, not independently assessing intrinsic value. The distinction matters when markets are mispricing an entire sector.

For a framework on how comps fit into the broader valuation picture alongside DCF and precedent transactions, see our article on [football field charts](/technical/football-field-charts/) - the standard investment banking output that displays all methodologies in one view.

---

## Sector-Specific Considerations

Different industries use different primary multiples, and you will look uninformed if you apply EV/EBITDA to a bank or EV/Revenue to a utility.

**Financial institutions (banks, insurance)**: Price-to-book (P/B) and price-to-earnings (P/E) are primary because debt is a raw material, not capital structure. EV is not a meaningful concept when the balance sheet is the business.

**Technology and SaaS**: EV/NTM Revenue and EV/ARR (Annual Recurring Revenue) are primary for high-growth companies. As profitability increases, the market transitions to EV/EBITDA or EV/FCF. Rule of 40 (revenue growth rate + EBITDA margin) is a useful operational benchmark.

**Real estate (REITs)**: Funds From Operations (FFO) and Adjusted FFO are the standard earnings metrics. Net Asset Value (NAV) per unit is the primary valuation approach.

**Energy (upstream)**: EV/DACF (Debt-Adjusted Cash Flow), EV/Proved Reserves. EBITDA is less informative because of the non-cash depletion charge.

**Retail and consumer**: EV/EBITDAR (adding back rent) was standard before ASC 842 brought leases on-balance sheet. Post-ASC 842, EV/EBITDA is more consistent, but lease capitalization assumptions matter.

---

## Comps vs. DCF: Different Tools, Different Questions

The relationship between trading comps and DCF is one of the more nuanced points in valuation. Comps tell you how the market is currently pricing businesses like this one. DCF tells you what the business is worth based on explicit assumptions about future cash flows and discount rates.

When comps and DCF diverge significantly, you have three possibilities: (1) your DCF assumptions are wrong, (2) the market is mispricing the sector, or (3) the subject company has characteristics that make it non-comparable to public peers. Each of these requires a different response.

For the mechanics of a full DCF, see our article on [DCF valuation step by step](/technical/dcf-valuation-step-by-step/).

For how comparable companies analysis relates to precedent transaction multiples - the other primary relative valuation method - see our article on [precedent transactions](/technical/precedent-transactions/).

---

## Common Mistakes in Comparable Companies Analysis

**Including obvious non-comparables to inflate or deflate value**: If the only reason a company is in your peer set is that it trades at a high multiple and makes your target look cheap, an experienced banker will spot it immediately.

**Using stale data**: Share prices change daily; make sure your EV calculation reflects a recent price. Using year-old comps data in a current transaction is simply wrong.

**Inconsistent financial metrics**: If some companies report adjusted EBITDA and some report GAAP EBITDA, you need to normalize. The spread between adjusted and reported EBITDA has expanded significantly over the past decade, particularly in technology.

**Ignoring the forward curve**: LTM multiples are important context, but M&A transactions are typically priced on forward multiples. If the subject company is expected to grow significantly in the next twelve months, LTM multiples will overstate the transaction multiple relative to the forward period.

**Not citing your source**: Multiples from Capital IQ, Bloomberg, or your own model need to be dated and attributed. "EV/EBITDA of 11.2x as of [date] per Capital IQ" is what the client needs to validate your work.

---

## What You Should Do Next

1. **Build a comps table for a sector you know** - pick 10 publicly traded companies in any industry and build a comps table from scratch using SEC filings and public data. Do not use Capital IQ or a data provider. Pull the market cap, debt, cash, EBITDA, and revenue from the 10-K and 10-Q yourself. This exercise will teach you more about where the numbers come from than any course.

2. **Read equity research initiation reports for 3-4 companies** - most initiations include a detailed comparable companies analysis with peer selection rationale. Note which companies are included, which are explicitly excluded and why, and how the analyst positions the subject company within the range.

3. **Practice the "justify your peer set" conversation** - find a company, build a peer set, then have someone challenge every company in it. Why is this one in? Why is that one out? Can you articulate the rationale for each inclusion and exclusion without consulting notes?

4. **Study a contested comps set** - look at a fairness opinion from a public merger proxy (S-4 or DEF 14A on EDGAR). The investment bank's financial advisor section will include its comparable companies analysis. Note how the peers were selected and whether the selected multiples seem defensible given where the subject company sits.

5. **Understand the relationship between multiples and fundamentals** - for at least three companies in any peer set you build, calculate what growth rate and WACC are implied by the current EV/EBITDA multiple. Damodaran's website has tools for this. Understanding why a company trades at its multiple is more valuable than knowing what the multiple is.
