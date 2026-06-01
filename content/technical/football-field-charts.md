---
title: "Football Field Charts: Doing Them Right vs Doing Them to Mislead"
description: "Football field charts are the centerpiece of investment banking pitch books. Learn how to build accurate valuation ranges and spot when they're being used to manipulate."
primary_keyword: "football field chart"
secondary_keywords: ["valuation range", "valuation summary", "investment banking pitch book", "implied share price"]
category: "technical"
date: "2026-05-20"
author: "Sanjay Gupta"
internal_links: ["/technical/dcf-valuation-step-by-step/", "/technical/comparable-companies-analysis/", "/technical/precedent-transactions/"]
---

# Football Field Charts: Doing Them Right vs Doing Them to Mislead

The football field chart - a horizontal bar chart showing implied equity value or share price ranges from multiple valuation methodologies - is the signature visual of investment banking pitch books. Every managing director has reviewed hundreds of them. Every analyst has built dozens. And virtually everyone in the industry, if pressed in private, will admit they have seen football fields engineered to tell a particular story rather than reflect honest valuation uncertainty.

This article covers both sides: how to build a credible, defensible football field, and how to recognize (and resist building) one that is designed to mislead. The first skill is technical. The second is professional.

---

## What the Football Field Is Actually Trying to Show

Before worrying about bar widths and formatting, understand what information a well-constructed football field conveys:

**Range, not point estimates.** No valuation methodology produces a single correct answer. A [DCF](/technical/dcf-valuation-step-by-step/) built on different WACC and growth assumptions produces a range of outcomes. [Comparable companies analysis](/technical/comparable-companies-analysis/) produces a range of implied values depending on which comps you choose and which multiple you emphasize. A football field visualizes this uncertainty honestly.

**Methodology comparison.** Different methodologies should broadly converge on a similar range if the underlying analysis is sound. If your DCF implies $40-60 per share and your precedent transactions imply $85-110 per share, one of three things is true: (1) the company is being valued in a hot M&A market with control premiums that justify the gap; (2) your DCF assumptions are too conservative; or (3) your transaction comps are not relevant. The football field makes this divergence visible and demands an explanation.

**Current price context.** Plotting the current market price as a vertical reference line tells the reader whether each methodology implies the stock is cheap, fairly valued, or expensive relative to current trading. This is essential context for any advisory assignment.

**Proposed transaction price context.** In an M&A pitch or fairness opinion, the proposed transaction price is plotted alongside current price. The football field tells the board whether the offer represents a reasonable premium to intrinsic value ranges or an outlier.

---

## Building a Credible Football Field: The Methodology

**Source each bar from a real analysis.** Every horizontal bar in your football field must correspond to a fully built analysis in the supporting model. The range endpoints are not arbitrary. They come from the low and high ends of a defensible valuation range: the 25th-75th percentile of the comp set multiple range applied to LTM EBITDA, for instance, or the DCF output at WACC +/- 50bps and long-term growth rate +/- 50bps.

Standard bars in an investment banking football field include:

| Methodology | Typical Input Range | Notes |
|---|---|---|
| Comparable companies (EV/EBITDA) | 25th-75th pct of comp set multiple | Apply to NTM or LTM EBITDA |
| Comparable companies (P/E) | Same peer set, P/E range | Useful for non-capital-intensive businesses |
| [Precedent transactions](/technical/precedent-transactions/) | Deal multiple range from relevant transactions | Often implies a control premium vs. trading comps |
| DCF | WACC and terminal growth rate sensitivity | Should show a 2D sensitivity table in the appendix |
| 52-week trading range | Actual high/low | Factual, no modeling required |
| Analyst price targets | Range of published sell-side targets | Point estimates from multiple analysts |
| LBO analysis | Returns-based implied entry price | Relevant for potential PE acquirers |

Not every pitch includes every methodology. Include what is relevant and defensible. Excluding a methodology because it produces an inconvenient range is a problem (more on this below).

**Convert to the right metric.** Most analyses start at enterprise value. The football field typically shows equity value per share or total equity value, which requires bridging from EV to equity value: EV minus net debt minus minorities minus pension liabilities plus any cash. Be consistent in this bridge across all methodologies. A common error is using different net debt figures for different methodologies (for example, using closing balance sheet net debt for trading comps but LBO model projected net debt for the LBO bar). Use the same bridge for all bars.

**Use symmetric ranges where possible.** If your DCF sensitivity table runs WACC from 9% to 11% and terminal growth from 2% to 3%, the range of outputs should inform the DCF bar. Don't cherry-pick the most favorable combinations as your endpoints - use the corners of the sensitivity table, or the 25th/75th percentile of a Monte Carlo simulation if you've built one.

**Anchor to a reference date.** The football field should carry a clear reference date (the current share price, the deal announcement date, etc.). Market conditions change. A football field that was calibrated in a different market environment without a clear date can mislead.

---

## Formatting: The Basics

In Excel and PowerPoint, the standard construction:

- Horizontal bars, sorted from lowest midpoint to highest (or in a logical order: trading range at top, intrinsic value methods in the middle, transaction value at bottom)
- Each bar has a label showing the range endpoints and the implied midpoint (or the bar can simply span the range with the numbers labeled at each end)
- A vertical reference line for current share price, colored differently from the bars (typically gray)
- A vertical reference line for offer price (in an M&A context), often in a deal-relevant color
- The chart should be readable in black and white - don't rely solely on color to distinguish elements

The chart should not be cluttered. Five to seven bars is typical. More than eight starts to look defensive (as if you're trying to drown a bad signal in a forest of methodologies).

Macabacus and the BIWS (Breaking Into Wall Street) model templates both include well-formatted football field chart templates. The BIWS template in particular is widely used across bulge bracket banks and demonstrates the standard formatting conventions. Using a consistent template matters because clients see dozens of pitch books a year and inconsistency signals sloppiness.

---

## How Football Fields Get Used to Mislead

Here is where the article gets interesting, because anyone who has spent significant time in investment banking has encountered every one of these techniques.

**The wide bar problem.** A DCF bar can be made arbitrarily wide by extending the WACC and terminal growth rate ranges to absurd levels. WACC range of 6%-14%? That's not a range, that's an admission that you don't know the cost of capital. The resulting bar spans from $20 to $180 per share and is analytically useless. It makes the deal price look reasonable by putting it somewhere in the middle of a meaningless range. Serious work constrains the sensitivity range to credible inputs: the WACC range should reflect genuine estimation uncertainty, not a deliberate attempt to widen the bar.

**Excluding inconvenient methodologies.** If your precedent transactions show values of $120-150 and the deal is priced at $95, leaving the precedent transaction bar out of the football field (or burying it in the appendix with a footnote about "limited comparability") removes the most important data point from the decision. Boards deserve to see all methodologies, including ones that make the deal look aggressive.

**Cherry-picking the comparable set.** [Comparable companies analysis](/technical/comparable-companies-analysis/) is only as good as the comparables selected. Swap out two comps trading at peak multiples for two trading at troughs, and the implied range shifts significantly. The football field looks objective because it's a chart. The selection decisions are entirely subjective. Clients who are not sophisticated about this - and some boards are not - may not question the comp set.

**Time-period selection for trading comps.** Using LTM EBITDA vs. NTM EBITDA vs. two-year-forward EBITDA changes the implied value at any given multiple. If the business is growing, NTM EBITDA is higher than LTM, making a given multiple imply a higher valuation. Sell-side advisors on an acquisition target sometimes use forward EBITDA for the trading comps and LTM for the deal multiple to make the transaction price look richer than the comps would suggest.

**The "52-week range" anchor.** If a stock has had a terrible year and its 52-week low is materially below intrinsic value, including the 52-week trading range as a bar (as if it represents a fair value range) anchors the visual to distressed prices. The 52-week range is a fact, not a valuation. It belongs in context - perhaps in footnotes or as a reference line, not as a pseudo-methodology bar.

**Placing the offer price inside the range by construction.** In a sell-side fairness opinion, the conclusion must be that the deal price is fair. The football field must, by definition, show the offer price inside the overall range of values. If the underlying analysis doesn't naturally support this, the ranges get widened until they do. This is not theoretical - it is one of the most common criticisms of sell-side fairness opinions in academic and practitioner literature.

---

## What Boards and Sophisticated Clients Should Ask

When reviewing a football field chart, the right questions are:

1. What are the exact comparable companies for each trading comps bar? Show me the list.
2. What WACC and terminal growth rate were used for the DCF, and how were those assumptions derived? Show me the sensitivity table.
3. Are there other methodologies that were considered and excluded? Why were they excluded?
4. Why is the DCF bar so wide/narrow? What are the endpoint assumptions?
5. What net debt figure is being used in the enterprise-to-equity bridge, and is it consistent across all methodologies?

A sell-side banker who is asked these questions and cannot answer them clearly either did not build the analysis properly or is hoping the board will not probe. Both outcomes are problems.

---

## The Fairness Opinion Context

In M&A transactions, a board typically obtains a fairness opinion from an investment bank attesting that the consideration is fair from a financial point of view to shareholders. The football field is central to the fairness opinion presentation.

The fairness opinion industry has been criticized extensively. A 2015 analysis in the Harvard Business Review found that fairness opinions in deals where the advising bank is also serving as sell-side advisor (and receiving a success fee) are structurally conflicted - the bank has a financial incentive for the deal to close, creating pressure to reach a favorable fairness conclusion. The football field is the primary visual artifact of that analysis.

That said, a well-constructed, intellectually honest football field in a fairness opinion is an important governance document. Board members who take their fiduciary duties seriously use it to evaluate whether management is recommending an appropriately priced transaction. The Delaware Chancery Court - which adjudicates more M&A litigation than any other court - examines the analyses underlying fairness opinions in considerable detail when evaluating breach-of-duty claims. The quality of the football field analysis is not just a pitch book aesthetic question; it has legal consequences.

---

## Real Talk

A Wall Street Oasis senior associate, in a now-classic thread about the reality of pitch book work, wrote: "The football field is built backwards. You start with the number the MD wants to show - either because it's the deal price or because it's what the client needs to justify the transaction - and then you adjust the methodology inputs until the range includes that number. I'm not proud of it. It's just how it works at 2am."

This is more candid than most bankers will be in public, but it accurately describes a dynamic that is common enough that every analyst should be aware of it before building their first football field. The question is not whether you know the technique exists. The question is whether you are willing to build analysis that is defensible rather than merely convenient.

The good news: if you build the analysis correctly and the deal price ends up outside your range, that is important information that the board deserves to have. Sometimes the deal is indeed underpriced (good for shareholders) or overpriced (bad for acquirers). The football field is supposed to tell you that. If it always miraculously encompasses the deal price, something has gone wrong.

---

## Technical Shortcuts That Junior Analysts Miss

**Handling negative EBITDA companies.** If the company or a comparable has negative EBITDA, EV/EBITDA multiples are meaningless. Shift to EV/Revenue or EV/Gross Profit, or use only DCF and transaction comps. Show a methodology grid that explains why certain bars are omitted.

**Minority interest in the bridge.** If the company has subsidiaries with minority shareholders, the enterprise-to-equity bridge requires deducting the market value of minority interests (not book value). Use a market-value estimate where possible. Using book value understates the deduction and inflates implied equity value.

**Pension liabilities.** Underfunded pension obligations are a debt-like liability that should be deducted in the EV-to-equity bridge. Many analysts forget this. The 10-K footnote on pension obligations shows the net underfunded status, which approximates the adjustment. For companies with large defined benefit plans (industrials, legacy utilities, airlines), this can be a $500M to $2B+ item.

**Operating leases.** Post-ASC 842, operating leases are capitalized on the balance sheet as right-of-use assets and lease liabilities. Whether to include lease liabilities in the EV bridge depends on how you've handled lease payments in the EBITDA vs. EBITDAR choice. Be consistent. If you're using EBITDA (before lease payments), include lease liabilities as debt. If you're using EBITDAR (before lease payments), you've embedded the lease cost in the numerator differently. This gets messy in retail and aviation specifically.

---

## What You Should Do Next

1. **Build a football field from scratch for a public company you know well.** Pull the 10-K, build three methodologies (trading comps, DCF, 52-week range), and assemble the chart in Excel. Then format it in PowerPoint using a consistent template. This hands-on exercise teaches you more than reading about it.

2. **Find a public fairness opinion and critique it.** When a large public company M&A transaction is announced, the proxy statement (Schedule 14A or 14D-9) includes the full fairness opinion presentation, including the football field. Pick one, find the underlying methodology disclosures, and evaluate whether the ranges are credible. Ask specifically: are the comp sets appropriate? Are the DCF assumptions disclosed? Is there a methodology that seems conspicuously absent?

3. **Learn the standard Excel/PowerPoint construction.** The football field is a stacked bar chart in Excel with specific formatting. Macabacus has tutorials. So does BIWS. Know how to build one from scratch without a template, and know how to format it to professional standards in under 30 minutes.

4. **Practice the EV-to-equity bridge consistently.** Build a template that handles net debt, minorities, pension liabilities, and operating lease adjustments, and use it consistently across all methodologies in a single football field. Inconsistency in the bridge is one of the most common errors in junior analyst work.

5. **Read Delaware M&A case law.** Specifically, look at cases involving fairness opinion analysis - In re Dell Inc. Appraisal Proceedings (2016), In re DFC Global Corp. (2017), and Verition Partners v. Aruba Networks (2019). These cases discuss how courts evaluate DCF analyses and valuation ranges. Understanding what Delaware judges think of investment banking valuation methodology will make you a sharper analyst.
