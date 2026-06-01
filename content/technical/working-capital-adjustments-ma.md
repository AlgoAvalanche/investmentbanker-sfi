---
title: "Working Capital Adjustments in M&A: The Hidden Negotiation"
description: "Working capital adjustments are the most-contested clause in M&A. Learn NWC targets, peg mechanics, completion accounts, and locked box in plain English."
primary_keyword: "working capital adjustments"
secondary_keywords: ["net working capital", "NWC target", "peg", "completion accounts", "locked box"]
category: "technical"
date: "2026-05-23"
author: "Sanjay Gupta"
internal_links: ["/technical/ma-process-walkthrough-pitch-to-closing/", "/technical/dcf-valuation-step-by-step/", "/technical/accretion-dilution-math-and-politics/"]
---

# Working Capital Adjustments in M&A: The Hidden Negotiation

Working capital adjustments are, by a wide margin, the clause that generates the most post-closing litigation in M&A transactions. The enterprise value gets negotiated in the boardroom. The working capital peg gets negotiated by accountants at 11pm on a Friday, and if you get it wrong, the final price can move by tens of millions before anyone notices. Every analyst and associate heading into a deal process should understand this mechanic cold.

This is not a theoretical exercise. The American Bar Association's 2023 Private Target Deal Points Study found that working capital adjustments appeared in over 90% of private company acquisitions, and disputes about the NWC peg were one of the top three most litigated post-closing items. Get comfortable with the mechanics now.

---

## Why Working Capital Adjustments Exist at All

When a buyer agrees to pay $500 million for a business, that price is based on a set of financial projections and a negotiated multiple. Implicitly embedded in that price is an assumption about what "normal" working capital looks like - how much cash is tied up in receivables, how much inventory sits on the shelves, how much the company owes its suppliers.

If the seller, knowing the deal is closing in 60 days, decides to delay paying vendors (boosting accounts payable, improving cash) or run down inventory, the business delivered at closing is financially different from the business that was modeled. The buyer gets a shell. Working capital adjustments exist to make sure the buyer gets a business with the same operational funding profile that was assumed when the price was set.

The core idea: you agreed to buy a going concern. A going concern needs working capital to operate. The adjustment mechanism ensures the seller delivers that working capital - and if they deliver more or less, the price adjusts accordingly.

---

## The Mechanics: Peg, Target, and Adjustment

The working capital adjustment framework has three components:

**The NWC Target (the "Peg"):** A negotiated dollar amount representing "normal" net working capital. This is typically calculated as a trailing 12-month or last-twelve-months average of NWC, sometimes adjusted for seasonality. The peg is the anchor.

**Closing NWC:** The actual net working capital of the business at the moment of closing, determined through a closing balance sheet prepared post-close (under completion accounts mechanics) or fixed at a reference date (under locked box).

**The Adjustment:** If closing NWC exceeds the peg, the buyer pays more (they received more working capital than expected). If closing NWC falls below the peg, the buyer pays less (the seller drained the business). Dollar-for-dollar adjustment in most deals.

The formula is simple:

| Component | Amount |
|---|---|
| Agreed Enterprise Value | $500,000,000 |
| Plus: Closing NWC | $48,000,000 |
| Minus: NWC Target (Peg) | ($45,000,000) |
| Working Capital Adjustment | $3,000,000 |
| **Adjusted Purchase Price** | **$503,000,000** |

In this example, the seller delivered $3M more working capital than expected, so they get paid $3M more. If the situation were reversed, they'd receive $3M less.

---

## How the Peg Gets Set - and Where Fights Start

Setting the peg is a negotiation, not a calculation. Sellers want a low peg (any NWC delivered above it means more money for them). Buyers want a high peg (they want a buffer, and they want to make sure the seller can't drain the business pre-closing).

The standard starting point is the trailing 12-month average of NWC. But "average" hides a lot. A business with significant seasonality - a retailer that builds inventory before the holidays, or a landscaping company with receivables that spike in spring - will have very different NWC in different months. If closing is in December and the peg is based on a full-year average that includes the lean summer months, the buyer could end up paying a premium for elevated holiday inventory.

Good advisors on the buy-side will push for a peg that reflects a comparable period: if closing is expected in Q4, use Q4 averages from prior years. Sellers push back. You negotiate.

The other common fight: what counts as "working capital" in the first place. The standard definition is current assets minus current liabilities, but the devil is in the exclusions. Typical carve-outs include:

- Cash and cash equivalents (usually handled separately as a debt/cash adjustment)
- Short-term debt and current portion of long-term debt (handled in the debt-free/cash-free adjustment)
- Deferred revenue (sometimes excluded, sometimes included - significant for SaaS businesses)
- Income taxes payable/receivable (often carved out)
- Transaction-related accruals (bonuses, fees)

Every carve-out is a negotiation. A sophisticated seller's counsel will push to exclude items that look like liabilities from the NWC calculation, effectively reducing the peg. A sophisticated buyer's counsel does the opposite.

Mergers & Inquisitions has covered this extensively, noting that the NWC definition negotiation is often more value-accretive for sellers than squeezing an extra quarter-turn on EBITDA multiple. Small definitional changes on what counts as "current" can move the peg by millions.

---

## Completion Accounts vs. Locked Box: Two Philosophies

There are two dominant mechanisms for determining closing NWC, and which one you use matters enormously for deal dynamics.

### Completion Accounts

The completion accounts approach is standard in the United States. The process works as follows:

1. The parties agree on accounting principles for preparing the closing balance sheet
2. The deal closes, usually with an estimated purchase price based on a projected closing balance sheet
3. After closing (typically 60-90 days), the buyer prepares the actual closing balance sheet
4. The seller reviews and has a dispute period (30-45 days) to object
5. Disputed items go to an independent accounting firm acting as expert (not arbitrator)
6. The final determination sets the closing NWC and drives the true-up payment

The exposure here is post-closing. Buyers control the closing balance sheet preparation. Sellers are on the defensive, trying to ensure the buyer doesn't use accounting judgment to cram down the NWC. Expert determination is faster than litigation but still takes months and costs real money.

According to the ABA study, approximately 40% of deals using completion accounts result in some form of dispute. Most resolve through negotiation. Maybe 5% end up at the accounting expert. That is still a lot of acrimony for a clause most people skim over in the LOI.

### Locked Box

The locked box mechanism is dominant in European deals and increasingly common in sponsor-to-sponsor transactions globally. Here, the parties agree on a historical "locked box date" - typically the last audited balance sheet date - and the purchase price is fixed at that date's balance sheet.

From the locked box date until closing, the seller agrees not to extract value from the business through "leakage" - dividends, related-party payments, transaction bonuses, or other distributions that weren't in the ordinary course. The buyer pays interest (or a "ticker") on the enterprise value for the period between locked box date and closing, compensating the seller for the time value.

The advantage: price certainty. Both parties know the number at signing. No post-closing true-up. No completion accounts dispute. The disadvantage: the buyer hasn't seen the business operate in the period between locked box and closing. If the business deteriorates materially, the buyer has limited recourse (absent MAC provisions).

From a practical standpoint, locked box deals close faster and with less friction. They're structurally cleaner. For founders selling their first business, locked box eliminates a lot of post-closing stress. For financial sponsors who've been through the completion accounts process enough times to know how buyers game it, locked box is often the preferred mechanism.

---

## Real Talk: What Actually Happens Pre-Closing

A Wall Street Oasis thread on this topic surfaced a pattern that every M&A professional recognizes: "The seller's CFO suddenly becomes incredibly focused on collections and vendor payment timing in the 60 days before closing. It's amazing how disciplined people get about working capital management when $10 million is riding on the peg."

This is the working capital manipulation game. Sellers accelerate receivables collection. They slow vendor payments. They run down inventory. They push deferred revenue higher by signing contracts early. All of it is technically legal, all of it is actively monitored by buyers, and all of it creates disputes.

The countermeasure on the buy-side: tight reps on ordinary course operations in the interim covenant period. The SPA will require the seller to operate "in the ordinary course of business consistent with past practice" between signing and closing. Aggressive working capital management that deviates from historical patterns is a breach of that covenant. The problem is proving it.

Good buy-side advisors will pull historical working capital data by month for three or four years and establish a seasonal baseline. If closing NWC is mysteriously 15% lower than the historical average for that month, you have a conversation - and potentially a claim.

---

## Working Capital in an [M&A Process](/technical/ma-process-walkthrough-pitch-to-closing/)

From an advisory standpoint, working capital gets inadequately diligenced in most processes. Bankers spend weeks on EBITDA normalization and [DCF valuation](/technical/dcf-valuation-step-by-step/) and maybe four hours on working capital.

The right approach is to model NWC historically, identify the seasonal pattern, and propose a peg in the LOI that reflects the expected closing date. Lock down the definition of NWC before exclusivity. Get accounting advisors involved early to stress-test the calculation methodology.

On the buy-side, the financial due diligence workstream (typically a big-four quality of earnings firm) should include a dedicated working capital analysis that:

- Calculates trailing NWC by month for 24-36 months
- Adjusts for non-recurring items (one-time settlements, extraordinary inventory builds)
- Models seasonality and proposes a closing-date-adjusted peg
- Tests for manipulation by comparing recent months to historical patterns
- Reviews the draft NWC definition for definitional traps

This workstream often gets compressed when deal timelines tighten. Resist that compression. A $5 million error in the peg is worth far more in advisory time than the fees for an extra week of financial due diligence.

---

## [Accretion/Dilution Impact](/technical/accretion-dilution-math-and-politics/) of Working Capital

Working capital adjustments flow through the equity purchase price, not the income statement. They affect the ultimate return calculation for the buyer without showing up in the first-year financial projections most analysts build.

In a private equity context, if a sponsor pays $3 million more due to a working capital true-up they didn't anticipate, that $3M sits in the equity check, increases basis, and reduces IRR. On a $500M deal held for 5 years with a 2x target, that's a rounding error. On a $50M deal, it matters meaningfully.

Sponsors model working capital normalization as part of their 100-day plan - the post-closing operating improvement program. If the business has been running lean on NWC pre-closing (collecting aggressively, stretching payables), there's often a "normalization drag" in the first few months post-close as the new owner allows vendor payment terms to return to normal. Model it explicitly. Pretending NWC is a static line item is how analysts get surprised.

---

## Common Definitional Landmines

Beyond the big structural choices, certain definitional details cause disproportionate disputes:

**Deferred Revenue:** For subscription businesses, SaaS companies, or any business that collects cash before delivering service, deferred revenue sits as a liability. Should it be included in NWC? Buyers want it included (it offsets the current assets, reducing NWC and thus the peg). Sellers argue it's not a "real" liability since the service delivery cost is minimal. No universal answer - negotiate it explicitly.

**Customer Deposits:** Same issue. A construction company with large customer deposits sitting in current liabilities can have dramatically different NWC calculations depending on whether deposits are in or out.

**Accrued Bonuses:** If the business accrues a management bonus annually paid in February, and closing is in December, there's a large accrued compensation liability. Who bears it? Typically the seller, through a carve-out from NWC and a corresponding reduction in purchase price. But if it's left in NWC and the peg was calculated without it being properly reflected, the buyer gets an unexpected benefit.

**VAT/GST/Sales Tax:** In international deals, tax receivables and payables can be substantial. Definitional treatment matters.

**Intercompany Balances:** In carve-out transactions, intercompany receivables and payables are often wound up at closing. The treatment of any residual intercompany balances in the NWC calculation is frequently contested.

---

## What You Should Do Next

1. **Read the NWC definition in the next SPA you touch.** Don't skim it. Map every inclusion and exclusion to the actual balance sheet line items, then calculate the peg manually. You will find discrepancies between what the definition says and what the historical calculation assumed.

2. **Build a working capital seasonality model.** Take any public company with available quarterly data and calculate NWC by quarter for five years. Look at the variance. Now imagine that variance is your peg negotiation. This exercise builds intuition faster than any textbook.

3. **Understand the quality of earnings process.** The QofE firm's working capital analysis is the most important output for establishing the peg. Ask to see one - either from a deal you're on or through your firm's alumni network. The methodology section is particularly instructive.

4. **Get familiar with the ABA Private Target Deal Points Study.** Published roughly every two years, it tracks deal terms across hundreds of private M&A transactions. The working capital section is one of the most practically useful reference points for what is "market" on peg methodology, dispute resolution timelines, and expert selection.

5. **Know the difference between completion accounts and locked box before you walk into any deal kickoff.** If you're on a cross-border deal and you don't immediately understand which mechanic is being used and why, ask. It shapes the entire financial diligence workstream.
