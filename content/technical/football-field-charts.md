---
title: "Football Field Charts: Doing Them Right vs Doing Them to Mislead"
description: "Football field charts are the centerpiece of investment banking pitch books. Learn how to build accurate valuation ranges and spot when they're being used to manipulate."
primary_keyword: "football field chart"
secondary_keywords: ["valuation range", "valuation summary", "investment banking pitch book", "implied share price"]
category: "technical"
date: "2026-05-20"
author: "Sterling Prentice"
internal_links: ["/technical/dcf-valuation-step-by-step/", "/technical/comparable-companies-analysis/", "/technical/precedent-transactions/"]
---

# Football Field Charts: Doing Them Right vs Doing Them to Mislead

The football field chart is the signature visual of investment banking. Every managing director has reviewed hundreds of them. Every analyst has built dozens. And virtually everyone in the industry, if pressed in private, will admit they have seen football fields engineered to tell a particular story rather than reflect honest valuation uncertainty.

Wall Street Prep defines it precisely: a floating bar chart in Excel that puts several valuation analyses side-by-side to provide clients with the full context of a company's value using a variety of methodologies and assumptions ([Wall Street Prep](https://www.wallstreetprep.com/knowledge/football-field-valuation-real-example-excel-template/)). Standard methodologies include DCF, LBO analysis, comparable company analysis, precedent transactions, and 52-week trading range - with optional add-ons like liquidation analysis and sum-of-the-parts. That description is technically accurate. What it doesn't capture is how often the output is designed before the analysis begins.

This article covers both sides: how to build a credible, defensible football field, and how to recognize - and resist building - one that is designed to mislead. The first skill is technical. The second is professional.

---

## What the Football Field Is Actually Trying to Show

Before worrying about bar widths and formatting, understand what information a well-constructed football field conveys.

**Range, not point estimates.** No valuation methodology produces a single correct answer. A [DCF](/technical/dcf-valuation-step-by-step/) built on different WACC and growth assumptions produces a range of outcomes. [Comparable companies analysis](/technical/comparable-companies-analysis/) produces a range of implied values depending on which comps you choose and which multiple you emphasize. The Corporate Finance Institute frames this explicitly: the football field is designed to acknowledge that multiple methodologies produce different results and no single number is authoritative - a comparable company analysis might show high valuations during strong equity markets while an intrinsic DCF yields a lower figure, and the chart presents both without forcing a false reconciliation ([CFI](https://corporatefinanceinstitute.com/resources/financial-modeling/football-field-chart/)).

**Methodology comparison.** Different methodologies should broadly converge on a similar range if the underlying analysis is sound. If your DCF implies $40-60 per share and your precedent transactions imply $85-110 per share, one of three things is true: the company is being valued in a hot M&A market with control premiums that justify the gap; your DCF assumptions are too conservative; or your transaction comps are not relevant. The football field makes this divergence visible and demands an explanation. When bars overlap significantly in a narrow band, confidence in that price range is high and the banker has a defensible anchor for negotiations. When bars diverge widely, the analyst must diagnose why - market overvaluation, aggressive DCF assumptions, cyclical deal activity affecting precedents, or leverage environment affecting LBO floors ([IB Interview Questions](https://ibinterviewquestions.com/guides/valuation-investment-banking/football-field-chart-how-bankers-synthesize-valuation)).

**Current price context.** Plotting the current market price as a vertical reference line tells the reader whether each methodology implies the stock is cheap, fairly valued, or expensive relative to current trading. This is essential context for any advisory assignment. Breaking Into Wall Street identifies the dynamic share-price reference line as a distinguishing feature of a professional-grade football field - a movable line that adjusts across all methodology bars, allowing a banker or board to instantly see whether a proposed deal price sits within, above, or below the ranges supported by analysis ([BIWS](https://breakingintowallstreet.com/kb/excel/football-field-valuation/)).

**Proposed transaction price context.** In an M&A pitch or fairness opinion, the proposed transaction price is plotted alongside current price. The football field tells the board whether the offer represents a reasonable premium to intrinsic value ranges or an outlier.

---

## The Standard Methodology Stack and Why It Matters

Understanding the typical output ranking of each methodology is not just interview prep - it shapes how you read the chart and identify anomalies.

The practitioner consensus, based on structural logic rather than convention, runs in this order from highest to lowest implied value: precedent transactions at the top, followed by DCF, then trading comps, with LBO analysis typically at the bottom ([IB Interview Questions](https://ibinterviewquestions.com/guides/valuation-investment-banking/football-field-chart-how-bankers-synthesize-valuation)).

Precedent transactions sit highest because they embed a control premium - the acquirer paid above market to gain full ownership and operational control. In practice, control premiums typically run 20-40% above unaffected share price, which mechanically lifts the precedent transaction bar above what public market trading comps show.

DCF analysis is next, and it is the most variable bar on the chart. A DCF driven by aggressive long-term growth assumptions can produce values well above current market trading prices. The Romero Mentoring case study on growth-stage companies illustrates this cleanly: when internal DCF projections reflect aggressive growth assumptions, they can produce valuations "inches from the end zone" while market trading comps sit "far in the backfield" - requiring bankers to exercise judgment on production capacity, economies of scale, and competitive threats rather than mechanically accepting either number ([Romero Mentoring](https://romeromentoring.com/football-field-charts-and-valuations/)).

Trading comps reflect current market pricing without a control premium, which explains why they sit below precedent transactions in most environments. And LBO analysis sits at the bottom because financial buyers are constrained by target returns and leverage capacity - a financial sponsor needs to hit its return hurdle (typically 20%+ IRR), which limits how much it can pay at entry relative to a strategic acquirer who captures operating synergies.

This ranking is not absolute. In credit-stressed markets, LBO analysis may imply very low values because leverage is unavailable or expensive. In a depressed trading environment, the 52-week range may sit below even the LBO floor. The football field's value is precisely that it shows you when the standard ranking breaks down - and forces you to explain why.

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

Not every pitch includes every methodology. Include what is relevant and defensible. Excluding a methodology because it produces an inconvenient range is not a formatting choice - it is an analytical choice that sophisticated clients will notice.

---

## Building a Credible Football Field: The Methodology

**Source each bar from a real analysis.** Every horizontal bar in your football field must correspond to a fully built analysis in the supporting model. The range endpoints are not arbitrary. They come from the low and high ends of a defensible valuation range - the 25th to 75th percentile of the comp set multiple range applied to LTM EBITDA, for instance, or the DCF output at WACC +/- 50bps and long-term growth rate +/- 50bps.

Wall Street Prep specifically flags that most public templates show bars vertically rather than horizontally (easier to build but less professional), do not support percentile ranges (25th, median, 75th - which is what all banks use in practice), and lack a dynamic share price line that updates automatically ([Wall Street Prep](https://www.wallstreetprep.com/knowledge/football-field-valuation-real-example-excel-template/)). These are not cosmetic details. The percentile range convention matters because it strips out outlier comps without the analyst having to explain individual exclusions - the interquartile range is a defensible, methodology-neutral filter.

**Convert to the right metric.** Most analyses start at enterprise value. The football field typically shows equity value per share or total equity value, which requires bridging from EV to equity value: EV minus net debt minus minorities minus pension liabilities plus any cash. Be consistent in this bridge across all methodologies. A common error is using different net debt figures for different methodologies - for example, using closing balance sheet net debt for trading comps but LBO model projected net debt for the LBO bar. Use the same bridge for all bars.

Breaking Into Wall Street notes that axis selection also signals audience: public company context calls for a share price axis, while private company or pure M&A context calls for an enterprise value axis ([BIWS](https://breakingintowallstreet.com/kb/excel/football-field-valuation/)). Boards and shareholders think in share price terms; M&A practitioners think in enterprise value. Mixing these for the same company across different contexts is a presentation error that sophisticated readers catch immediately.

**Use symmetric ranges where possible.** If your DCF sensitivity table runs WACC from 9% to 11% and terminal growth from 2% to 3%, the range of outputs should inform the DCF bar. Don't cherry-pick the most favorable combinations as your endpoints - use the corners of the sensitivity table or the 25th/75th percentile of a Monte Carlo simulation if you've built one.

**Anchor to a reference date.** The football field should carry a clear reference date. Market conditions change. A football field calibrated in a different market environment without a clear date can mislead - and in a fairness opinion context, an undated or stale analysis can create legal exposure.

---

## The Excel Construction Mechanics

The football field is a floating stacked bar chart. The construction trick is specific: you build three columns (Valuation Method, Minimum, Maximum), add a Difference column using =C2-B2, insert a stacked column chart, and apply "No Fill" to the Minimum series to make it invisible - leaving only the spread band visible ([Macabacus](https://macabacus.com/blog/build-football-field-chart-excel)).

Macabacus identifies four core benefits of this visual format over a table of numbers: visual comparison that immediately shows where methodologies agree and disagree; outlier detection where unusual valuations are visible at a glance; summary statistics that present averages and midpoints without requiring the reader to compute them; and scalability across two to ten or more methodologies without the slide becoming illegible ([Macabacus](https://macabacus.com/blog/build-football-field-chart-excel)).

Formatting in Excel and PowerPoint follows consistent conventions:

- Horizontal bars, sorted from lowest midpoint to highest (or in logical order: trading range at top, intrinsic value methods in the middle, transaction value at bottom)
- Each bar labeled with range endpoints and implied midpoint
- A vertical reference line for current share price, colored distinctly from the bars (typically gray)
- A vertical reference line for offer price in M&A context, in a deal-relevant color
- The chart readable in black and white - don't rely solely on color to distinguish elements
- Axis adjustments critical: the horizontal axis must span the full value range; the vertical axis should order methodologies logically; unnecessary legends and gridlines stripped

The chart should not be cluttered. Five to seven bars is typical. Mergers and Inquisitions notes that valuation sections in pitch books may contain only one or two slides in a short book or twenty or more in a longer one, with the football field serving as the synthesis page that distills all the underlying model outputs - and explicitly warns against charts so complicated "they could be eye charts" ([Mergers and Inquisitions](https://mergersandinquisitions.com/investment-banking-pitch-books/)). More than eight bars starts to look defensive.

---

## How Football Fields Get Used to Mislead

Here is where the article gets interesting, because anyone who has spent significant time in investment banking has encountered every one of these techniques.

**The wide bar problem.** A DCF bar can be made arbitrarily wide by extending the WACC and terminal growth rate ranges to levels that are not analytically defensible. A WACC range of 6% to 14% is not a range - it is an admission that you don't know the cost of capital. The resulting bar spans from $20 to $180 per share and is analytically useless. It makes the deal price look reasonable by putting it somewhere in the middle of a meaningless range.

**Excluding inconvenient methodologies.** If your precedent transactions show values of $120-150 and the deal is priced at $95, leaving the precedent transaction bar out of the football field (or burying it in the appendix with a footnote about "limited comparability") removes the most important data point from the decision. Practitioners flag this as one of the most common analytical errors: excluding outlier transactions that don't fit without justification, to tighten the range and make the analysis look cleaner than it is ([IB Interview Questions](https://ibinterviewquestions.com/guides/valuation-investment-banking/football-field-chart-how-bankers-synthesize-valuation)).

**Cherry-picking the comparable set.** [Comparable companies analysis](/technical/comparable-companies-analysis/) is only as good as the comparables selected. Swap out two comps trading at peak multiples for two trading at troughs, and the implied range shifts significantly. The football field looks objective because it is a chart. The selection decisions are entirely subjective. Clients who are not sophisticated about this - and some boards are not - may not question the comp set.

**Time-period selection for trading comps.** Using LTM EBITDA vs. NTM EBITDA vs. two-year-forward EBITDA changes the implied value at any given multiple. If the business is growing, NTM EBITDA is higher than LTM, making a given multiple imply a higher valuation. Sell-side advisors on an acquisition target sometimes use forward EBITDA for the trading comps and LTM for the deal multiple to make the transaction price look richer than the comps would suggest.

**The 52-week range anchor.** If a stock has had a terrible year and its 52-week low is materially below intrinsic value, including the 52-week trading range as a bar (as if it represents a fair value range) anchors the visual to distressed prices. The 52-week range is a fact, not a valuation. It belongs in context - perhaps as a reference line - not as a pseudo-methodology bar that implies the depressed trading range is a reasonable value floor.

**Placing the offer price inside the range by construction.** In a sell-side fairness opinion, the conclusion must be that the deal price is fair. The football field must, by definition, show the offer price inside the overall range of values. If the underlying analysis doesn't naturally support this, the ranges get widened until they do. This is not theoretical - it is one of the most common criticisms of sell-side fairness opinions in academic and practitioner literature.

---

## The Fairness Opinion Context

In M&A transactions, a board typically obtains a fairness opinion from an investment bank attesting that the consideration is fair from a financial point of view to shareholders. The football field is central to the fairness opinion presentation, and its significance goes well beyond pitch book aesthetics.

The Corporate Finance Institute identifies four primary practical advantages of the football field in professional advisory work: transparency (shows how methodologies diverge), decision-making (identifies consensus zones), negotiation (establishes defensible ranges for M&A pricing), and communication (makes complex financial analysis accessible to non-specialists) ([CFI](https://corporatefinanceinstitute.com/resources/financial-modeling/football-field-chart/)). All four functions matter most in the fairness opinion context, where the chart is not just a communication tool but a legal document.

The Delaware Chancery Court - which adjudicates more M&A litigation than any other court - examines the analyses underlying fairness opinions in considerable detail when evaluating breach-of-duty claims. The quality of the football field analysis is not just a pitch book aesthetic question. See In re Dell Inc. Appraisal Proceedings (2016), In re DFC Global Corp. (2017), and Verition Partners v. Aruba Networks (2019) for how Delaware judges evaluate DCF analyses and valuation ranges in practice.

The fairness opinion industry has been criticized extensively for structural conflicts when the advising bank is also serving as sell-side advisor with a success fee contingent on deal closing. The football field is the primary visual artifact of that structurally conflicted analysis. A board that takes its fiduciary duties seriously uses the football field to evaluate whether management is recommending an appropriately priced transaction - and asks the questions that a compromised football field cannot survive.

---

## What Boards and Sophisticated Clients Should Ask

When reviewing a football field chart, the right questions are:

1. What are the exact comparable companies for each trading comps bar? Show me the list.
2. What WACC and terminal growth rate were used for the DCF, and how were those assumptions derived? Show me the sensitivity table.
3. Are there other methodologies that were considered and excluded? Why were they excluded?
4. Why is the DCF bar so wide or narrow? What are the endpoint assumptions?
5. What net debt figure is being used in the enterprise-to-equity bridge, and is it consistent across all methodologies?

A sell-side banker who is asked these questions and cannot answer them clearly either did not build the analysis properly or is hoping the board will not probe. Both outcomes are problems.

Financial Edge Training situates the football field as foundational educational content precisely because it is a tool that decision-makers - boards and CEOs who are not trained financial analysts - encounter when evaluating the most consequential transactions of their careers ([Financial Edge](https://www.fe.training/free-resources/valuation/football-field/)). The asymmetry of information between the bankers building the chart and the boards reviewing it is real, and the questions above are the minimum due diligence.

---

## Technical Shortcuts That Junior Analysts Miss

**Handling negative EBITDA companies.** If the company or a comparable has negative EBITDA, EV/EBITDA multiples are meaningless. Shift to EV/Revenue or EV/Gross Profit, or use only DCF and transaction comps. Show a methodology grid that explains why certain bars are omitted.

**Minority interest in the bridge.** If the company has subsidiaries with minority shareholders, the enterprise-to-equity bridge requires deducting the market value of minority interests (not book value). Use a market-value estimate where possible. Using book value understates the deduction and inflates implied equity value.

**Pension liabilities.** Underfunded pension obligations are a debt-like liability that should be deducted in the EV-to-equity bridge. Many analysts forget this. The 10-K footnote on pension obligations shows the net underfunded status, which approximates the adjustment. For companies with large defined benefit plans - industrials, legacy utilities, airlines - this can be a $500 million to $2 billion-plus item.

**Operating leases.** Post-ASC 842, operating leases are capitalized on the balance sheet as right-of-use assets and lease liabilities. Whether to include lease liabilities in the EV bridge depends on how you've handled lease payments in the EBITDA vs. EBITDAR choice. Be consistent. If you're using EBITDA (before lease payments), include lease liabilities as debt. If you're using EBITDAR, you've embedded the lease cost in the numerator differently. This gets messy in retail and aviation specifically.

**Bar width is a signal, not noise.** Breaking Into Wall Street makes a point that analysts frequently miss: each bar's width reflects the specific uncertainty within that methodology - peer selection drives comp bar width, transaction type filtering drives precedent bar width, discount rate sensitivity drives DCF bar width, and leverage assumptions drive LBO bar width ([BIWS](https://breakingintowallstreet.com/kb/excel/football-field-valuation/)). A very wide DCF bar signals that your assumptions are highly variable, not that you've done thorough sensitivity analysis. Narrow the assumptions to what is analytically defensible, not what produces the most helpful range.

Romero Mentoring flags high variability in bar positions (except for growth-stage companies) as a red flag indicating model errors or inappropriate peer group selection ([Romero Mentoring](https://romeromentoring.com/football-field-charts-and-valuations/)). If every bar is enormous, the football field is communicating that you don't know the value of the company - which is not the impression you want to leave with a board.

---

## Real Talk

A Wall Street Oasis senior associate, in a now-classic thread about the reality of pitch book work, wrote: "The football field is built backwards. You start with the number the MD wants to show - either because it's the deal price or because it's what the client needs to justify the transaction - and then you adjust the methodology inputs until the range includes that number. I'm not proud of it. It's just how it works at 2am."

This is more candid than most bankers will be in public, but it accurately describes a dynamic that is common enough that every analyst should be aware of it before building their first football field. The question is not whether you know the technique exists. The question is whether you are willing to build analysis that is defensible rather than merely convenient.

The good news: if you build the analysis correctly and the deal price ends up outside your range, that is important information the board deserves to have. Sometimes the deal is underpriced (good for shareholders) or overpriced (bad for acquirers). The football field is supposed to tell you that. If it always miraculously encompasses the deal price, something has gone wrong.

---

## What You Should Do Next

1. **Build a football field from scratch for a public company you know well.** Pull the 10-K, build three methodologies (trading comps, DCF, 52-week range), and assemble the chart in Excel. Then format it in PowerPoint using a consistent template. This hands-on exercise teaches you more than reading about it.

2. **Find a public fairness opinion and critique it.** When a large public company M&A transaction is announced, the proxy statement (Schedule 14A or 14D-9) includes the full fairness opinion presentation, including the football field. Pick one, find the underlying methodology disclosures, and evaluate whether the ranges are credible. Ask specifically: are the comp sets appropriate? Are the DCF assumptions disclosed? Is there a methodology that seems conspicuously absent?

3. **Learn the standard Excel and PowerPoint construction.** The football field is a stacked bar chart in Excel with specific formatting. Macabacus has a step-by-step tutorial and a built-in template that reduces construction time significantly. Breaking Into Wall Street has a comparable resource. Know how to build one from scratch without a template, and know how to format it to professional standards in under 30 minutes.

4. **Practice the EV-to-equity bridge consistently.** Build a template that handles net debt, minorities, pension liabilities, and operating lease adjustments, and use it consistently across all methodologies in a single football field. Inconsistency in the bridge is one of the most common errors in junior analyst work.

5. **Read Delaware M&A case law.** Specifically, look at cases involving fairness opinion analysis - In re Dell Inc. Appraisal Proceedings (2016), In re DFC Global Corp. (2017), and Verition Partners v. Aruba Networks (2019). These cases discuss how courts evaluate DCF analyses and valuation ranges. Understanding what Delaware judges think of investment banking valuation methodology will make you a sharper analyst.
