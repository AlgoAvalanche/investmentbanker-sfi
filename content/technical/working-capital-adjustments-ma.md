---
title: "Working Capital Adjustments in M&A: The Hidden Negotiation"
description: "Working capital adjustments are the most-contested clause in M&A. Learn NWC targets, peg mechanics, completion accounts, and locked box in plain English."
primary_keyword: "working capital adjustments"
secondary_keywords: ["net working capital", "NWC target", "peg", "completion accounts", "locked box"]
category: "technical"
date: "2026-05-23"
author: "Sterling Prentice"
internal_links: ["/technical/ma-process-walkthrough-pitch-to-closing/", "/technical/dcf-valuation-step-by-step/", "/technical/accretion-dilution-math-and-politics/"]
---

# Working Capital Adjustments in M&A: The Hidden Negotiation

Working capital adjustments are, by a wide margin, the clause that generates the most post-closing litigation in private M&A transactions. The enterprise value gets negotiated in the boardroom with bankers and principals. The working capital peg gets ground out by accountants at 11pm on a Friday, and if you get it wrong, the final price can move by tens of millions before anyone notices. According to SRS Acquiom's 2025 Working Capital Purchase Price Adjustment Study, working capital disputes account for approximately 50% of all post-closing M&A disputes - making this the single most contested mechanical term in a private deal. Every analyst and associate heading into a deal process should understand this mechanic cold.

This is not theoretical. SRS Acquiom's 2025 data shows that working capital purchase price adjustments now appear in over 90% of private-target M&A transactions, up from roughly 50% a decade ago. The mechanism has become near-universal. The question is no longer whether your deal will have one - it is whether you understand it well enough to protect your client.

---

## Why Working Capital Adjustments Exist

When a buyer agrees to pay $500 million for a business, that price is based on negotiated projections and an agreed EBITDA multiple. Embedded in that price is an assumption about what normal operating working capital looks like - how much cash is tied up in receivables, how much inventory sits on the shelves, how much the company owes its suppliers at any given moment.

If the seller, knowing the deal is closing in 60 days, decides to accelerate receivables collection, slow vendor payments, or draw down inventory, the business delivered at closing is financially different from the business that was priced. The buyer gets a shell dressed up as a going concern. Working capital adjustments exist to make that manipulation structurally unprofitable.

The mechanism works symmetrically. If the seller delivers more working capital than the agreed target, the buyer pays more - they received additional operating assets that weren't priced into the deal. If the seller delivers less, the buyer pays less. Dollar-for-dollar adjustment in most deals. The protection runs both ways, which is why sophisticated sellers who understand the mechanic actually prefer a clearly defined peg to none at all.

The framework sits within the cash-free, debt-free (CFDF) structure that dominates private M&A. In a CFDF deal, the purchase price equals enterprise value because the buyer assumes no net debt and the seller retains excess cash. According to Wall Street Prep's technical reference on CFDF structures, a business acquired at 10.0x EBITDA on $100M EBITDA yields a $1B enterprise value; with $200M of existing debt and $20M of excess cash, seller proceeds net to $820M equity value. The NWC adjustment mechanism sits on top of this CFDF structure, ensuring the operational working capital component is delivered exactly as priced - no more, no less.

---

## The Standard Formula and Mechanics

Working capital in M&A is defined as current assets excluding cash minus current liabilities excluding debt. Cash is handled separately through the CFDF adjustment. Debt is handled through the debt-free component. What remains is the operating kernel: receivables, inventory, prepaid expenses on the asset side; payables and accrued liabilities on the liability side.

Clearly Acquired's practitioner guide illustrates the standard calculation with a manufacturing business: accounts receivable of $800K plus inventory of $400K plus prepaid expenses of $50K, minus accounts payable of $300K and accrued liabilities of $150K, yields NWC of $800K. Simple arithmetic. The complexity is not in the formula - it is in deciding which accounts belong in the formula and what the agreed target should be.

The adjustment works as follows:

| Component | Amount |
|---|---|
| Agreed Enterprise Value | $500,000,000 |
| Plus: Closing NWC | $48,000,000 |
| Minus: NWC Target (Peg) | ($45,000,000) |
| Working Capital Adjustment | $3,000,000 |
| **Adjusted Purchase Price** | **$503,000,000** |

In this example, the seller delivered $3M more working capital than the peg, so they receive $3M more at closing. Reverse the scenario and the seller receives $3M less. The adjustment is mechanical once the closing NWC and peg are established - which is precisely why those two numbers are fought over so hard.

The standard post-close timeline according to Lincoln International's advisory practice data: buyer prepares the closing balance sheet within 90 to 120 days of closing, seller has 30 to 60 days to review and object, parties then have 30 or more days to negotiate in good faith, and unresolved disputes go to a neutral accountant for binding determination. That four-phase process can run 6 to 9 months from closing. Plan for it.

---

## How the Peg Gets Set

The peg is a negotiated number, not a mechanical calculation. Sellers want a lower peg - any NWC delivered above the peg increases their proceeds. Buyers want a higher peg - it protects against a seller who drains the business pre-close and ensures the buyer receives the operational funding profile they underwrote.

The standard methodology is a trailing 12-month average of monthly NWC figures, normalized for seasonality, growth trends, and one-time items. Auxo Capital Advisors' practitioner guide on peg mechanics specifies that the historical NWC schedule should be mapped to an agreed account definition and reconciled to the trial balance before peg negotiations begin. Monthly figures that cannot be reconciled to audited financials become disputed immediately.

Seasonality is where the analysis gets interesting. A retailer building holiday inventory in October will have dramatically different NWC than the same retailer in February after inventory has been sold and receivables collected. If closing is scheduled for Q4 and the peg reflects a full-year average that includes the lean summer months, the seller may be systematically disadvantaged. Conversely, a landscaping company closing in peak season faces the opposite dynamic. Good advisors propose a peg that reflects a comparable seasonal period to the expected closing date - not a blunt trailing average. Buyers push back. The negotiation is genuine.

One point that cannot be overstated: the definition of which accounts are included in NWC is more economically significant than the peg number itself. As Auxo Capital Advisors notes, sellers frequently negotiate the peg number before finalizing which accounts are included - and discover after the fact that the effective peg was materially different from what they expected. A $10M peg under one account definition has completely different economics than a $10M peg under a different definition. Sophisticated buyers and sellers fight hardest over definitions, not numbers.

Common carve-out battlegrounds include cash and cash equivalents (handled separately), short-term debt (handled in the CFDF adjustment), deferred revenue (frequently contested for SaaS and subscription businesses), income taxes payable and receivable, transaction-related accruals, and intercompany balances in carve-out transactions.

---

## Collar Mechanics: Absorbing Immaterial Variance

Most purchase agreements include a collar - a tolerance band around the peg within which no adjustment is triggered. A typical collar on a $10M peg might be plus or minus $250K: if closing NWC falls between $9.75M and $10.25M, no adjustment is made. Only deviations outside the collar trigger a dollar-for-dollar price change.

The collar exists because minor timing differences - a payment that clears one day after closing, an invoice that hits the following morning - are unavoidable and immaterial. Without a collar, those differences generate disputes over trivial amounts. Auxo Capital Advisors recommends sizing the collar based on actual historical monthly NWC volatility, not an arbitrary round number. A $50K collar on a business with $500K monthly NWC swings provides almost no protection and near-guarantees a dispute. A collar calibrated to actual volatility - say, one-half of one standard deviation in monthly NWC - is defensible and functional.

Sellers should push for wider collars. Buyers should push for collars sized to actual volatility, which protects them when that volatility is low.

---

## Completion Accounts vs. Locked Box

Two distinct mechanisms exist for determining closing NWC, and the choice between them shapes deal dynamics from signing through post-closing.

### Completion Accounts

Completion accounts - called "true-up" mechanics in US practice - are the dominant approach in American private M&A. The process: parties agree on accounting principles before closing, the deal closes on estimated figures, the buyer prepares an actual closing balance sheet within 90 to 120 days post-close, and the seller reviews with a 30 to 60 day objection window.

The structural dynamic here matters. As Lincoln International's advisory practice notes, the buyer typically prepares the closing statement in their most favorable position - this is not nefarious, it is rational. Sellers who are not prepared to review and object within the contractual window often default to the buyer's number. SRS Acquiom's 2025 data confirms the consequence: 70% of sellers accepted the buyer's initial closing statement calculation without dispute. That figure reflects both the asymmetry of who prepares the statement and how many sellers lack the preparation to challenge it effectively.

Only 30% of sellers dispute the initial closing statement. Of those disputes, most resolve through negotiation. A small fraction escalate to the neutral accountant process, which provides binding resolution within defined timeframes and splits costs between parties. Median resolution for all working capital disputes: 2 months post-close per SRS Acquiom's data.

### Locked Box

The locked box mechanism is dominant in European transactions and increasingly common in sponsor-to-sponsor deals globally. The parties agree on a historical "locked box date" - typically the most recent audited balance sheet date - and the purchase price is fixed at that date. No post-close true-up. No completion accounts dispute. Price certainty from signing.

The seller's obligation: no "leakage" between the locked box date and closing. Leakage includes dividends, related-party payments, transaction bonuses, and any other value extraction outside ordinary course operations. The buyer compensates the seller for the time value through a daily "ticker" - interest accruing on the enterprise value from locked box date through closing.

The locked box eliminates post-close uncertainty and closes faster with less friction. The trade-off is that the buyer accepts the business as of a historical date and has limited recourse if it deteriorates materially between locked box and closing (absent material adverse change provisions). For founders selling their first business, locked box removes significant post-close stress. For financial sponsors who have been through enough completion accounts processes to understand the buyer's structural advantage in preparing the closing statement, locked box is often the preferred mechanism when they are on the sell-side.

---

## Working Capital Manipulation: What Actually Happens

Pre-closing working capital management is a known dynamic in every M&A professional's experience. Sellers - even sellers operating in good faith on everything else - tend to become unusually focused on collections discipline and vendor payment timing in the 60 days before closing when tens of millions are riding on the peg.

The mechanics are straightforward: accelerate accounts receivable collection, delay accounts payable payments, run down inventory to reduce carrying costs, and push deferred revenue higher by signing contracts early. All of it is technically legal. All of it is actively monitored by experienced buy-side advisors. All of it creates disputes when the pattern deviates materially from historical norms.

The contractual countermeasure is the ordinary course covenant in the purchase agreement's interim operating covenants: the seller must operate the business "in the ordinary course of business consistent with past practice" between signing and closing. Aggressive working capital management that deviates from historical patterns is a breach of that covenant. The practical challenge is proving the deviation and quantifying damages.

The analytical countermeasure is a historical NWC baseline. Buy-side financial due diligence - typically conducted by a Big Four quality of earnings firm - should calculate trailing NWC by month for 24 to 36 months, identify seasonal patterns and year-over-year trends, and establish what "normal" looks like for each calendar month. If closing NWC is 15% below the historical average for that month in prior years, you have a conversation. If it is 30% below, you have a claim. The baseline is the evidence.

---

## Post-Close Disputes: High-Risk Accounts

Working capital disputes are not randomly distributed across balance sheet accounts. Lincoln International's advisory practice identifies three account categories that generate disproportionate disputes: inventory obsolescence reserves, allowances for doubtful accounts, and accrued expenses.

The common thread is estimation. Each of these accounts requires management judgment to set - and that judgment is sensitive to period-end timing and the incentive structure facing the seller. An inventory obsolescence reserve that was $200K at the end of last year and $150K at closing may reflect genuine improvement or may reflect a seller who reduced reserves to inflate NWC in the measurement period. Distinguishing between those two explanations requires documented accounting policy and historical consistency - which is exactly what most sellers cannot produce on short notice.

Allowances for doubtful accounts follow the same pattern. A gross accounts receivable of $5M and an allowance of $200K yields net A/R of $4.8M. If the seller reduces the allowance to $100K before closing, net A/R increases by $100K, NWC increases by $100K, and the seller collects more. The buyer then faces a collection shortfall post-close. This is why purchase agreement definitions specify whether NWC is calculated on gross or net receivables and how allowances are treated.

Accrued expenses create timing disputes. Accruals for rent, utilities, payroll, and professional fees that straddle the closing date must be calculated as of a specific moment. Small differences in cutoff methodology can move accrued liabilities by hundreds of thousands of dollars. Purchase agreements should include explicit cutoff rules for transactions in process near closing - invoices sent on the last day, payments received but not processed, inventory in transit.

---

## Working Capital Across Business Models

The NWC profile varies significantly by business model, and the peg negotiation reflects those differences.

Capital-intensive, cyclical businesses - manufacturers, distributors - carry large inventory and receivables balances with meaningful accounts payable offsets. NWC as a percentage of revenue can be 15% to 25% or more. Seasonality risk is highest in these businesses, and peg negotiations are most contentious. A manufacturer with a fiscal year-end in January post-holiday season will show dramatically lower NWC than the same business in October during the inventory build cycle.

Capital-light, cash-generative businesses run the opposite dynamic. SaaS and subscription businesses often have negative NWC because deferred revenue - cash collected in advance of service delivery - sits as a current liability. As Wall Street Prep's working capital reference notes, for businesses with high deferred revenue balances, NWC can be negative and that is healthy, not distressed. The M&A treatment requires careful definition. If deferred revenue is included in NWC as a liability, the peg will be lower (or negative). If it is excluded, the peg will be higher and the seller faces a higher delivery threshold. Neither treatment is inherently correct - but leaving it undefined guarantees a dispute.

Restaurants and mass-market retailers with fast inventory turns and strong accounts payable terms also run negative NWC in normal operations. The business model collects cash from customers immediately and pays suppliers on 30 to 60 day terms. The result is a working capital float that benefits the business, not a sign of financial stress.

Services businesses - consulting, staffing, professional services - carry minimal inventory. NWC is driven by accounts receivable (billed and unbilled), accrued revenue on long-term contracts, and payroll accruals. Work in progress on project-based engagements creates significant estimation and timing issues: how much revenue has been earned on an incomplete project? The answer depends on the completion percentage and the accounting method, both of which require judgment and are sensitive to the incentives in place at closing.

---

## The Escrow Mechanism

SRS Acquiom's 2025 data shows that 75% of private M&A transactions include a separate escrow account for working capital adjustments. Typical escrow size is approximately 1% of transaction value. The escrow holds funds that cover any shortfall payment the seller may owe post-close.

Without an escrow, the buyer must pursue the seller directly to collect any shortfall - and collection risk increases with time as the seller distributes proceeds, the deal recedes in memory, and litigation becomes the only option. The escrow solves this by creating a funded reserve. If closing NWC exceeds the peg, the escrow is released to the seller in full and any excess is paid on top. If closing NWC falls short, the shortfall is drawn from the escrow before releasing the balance to the seller.

Colonnade Advisors' M&A advisory data notes that the median resolution timeframe for working capital adjustments is approximately 2 months. That timeline assumes both parties engage professionally and the accounting is reasonably clean. Contentious disputes with inventory or allowance disagreements can run substantially longer and consume significant advisory fees on both sides.

---

## Accounting Policy Hierarchy and the Consistency Standard

Purchase agreements specify accounting policies for the closing balance sheet calculation in a defined hierarchy. The standard structure according to Lincoln International's advisory practice: first, GAAP applied consistently with the target's historical practices; second, the target's specific historical accounting policies as documented; third, GAAP without reference to historical practice as a fallback.

The phrase "consistent with past practice" appears in nearly every purchase agreement. It sounds protective. In practice, it is frequently contested when the seller's historical practice was informal, undocumented, or inconsistently applied. A seller who set inventory obsolescence reserves based on the CFO's quarterly judgment call rather than a documented methodology cannot point to "consistent with past practice" as a defense when the buyer applies a more systematic reserve calculation.

The practical implication for sellers: document accounting policies before the deal process begins. A written accounting policy memo - covering inventory reserves, receivables allowances, revenue recognition cutoffs, and accrual methodologies - is worth far more in a post-close dispute than any amount of negotiating the peg number. The memo establishes what "consistent with past practice" actually means and removes the buyer's ability to redefine it in the closing balance sheet.

For buyers, the equivalent preparation is mapping the purchase agreement's NWC definition to actual trial balance accounts before signing. Vague language about "accounts receivable" can mean gross receivables, net receivables after bad debt reserve, or net receivables after specific exclusions. Vague language creates expensive disputes. Precise mapping eliminates them.

---

## Working Capital in the [M&A Process](/technical/ma-process-walkthrough-pitch-to-closing/)

From an advisory standpoint, working capital gets inadequately diligenced in most processes. Bankers spend weeks on EBITDA normalization and [DCF valuation](/technical/dcf-valuation-step-by-step/) and may compress the NWC analysis into a few hours at the end of due diligence. That compression is expensive.

The right buy-side approach is a dedicated NWC workstream within the quality of earnings process. That workstream should calculate trailing NWC by month for 24 to 36 months, adjust for non-recurring items (one-time inventory builds, extraordinary settlements), model seasonality and propose a closing-date-adjusted peg, test for manipulation by comparing recent months to the historical seasonal baseline, and review the draft NWC definition for definitional traps.

On the sell-side, Auxo Capital Advisors recommends preparing a seller-side NWC package before the process begins: a monthly NWC schedule reconciled to trial balance, a written accounting policy memo, a bridge showing the historical average and any seasonality adjustments, accounts receivable aging sub-schedules, and collar support based on historical monthly volatility. Sellers who arrive at peg negotiations with this package control the conversation. Sellers who arrive without it are negotiating from a position of information disadvantage.

The peg should be locked down definitionally before exclusivity. Reopening the NWC definition post-LOI - when one party has significant leverage and the other is committed - is a value transfer, not a negotiation.

---

## [Accretion/Dilution](/technical/accretion-dilution-math-and-politics/) and the Working Capital True-Up

Working capital adjustments flow through the equity purchase price, not the income statement. They affect the buyer's ultimate return without appearing in first-year financial projections. In a private equity context, a $3M adverse working capital true-up increases the equity check by $3M, raises cost basis, and compresses IRR. On a $500M deal held for five years, that is rounding error. On a $50M deal, it matters.

The operational counterpart is normalization drag post-close. If the seller ran lean on working capital before closing - aggressive collections, stretched payables - the first 60 to 90 days post-close often require a working capital injection as the business returns to normal operating patterns. Vendors who were being paid on 75-day terms historically and pushed to 90-day terms in the run-up to closing will revert. Customers whose collection cycles were compressed will revert. The cash outflow associated with that normalization should be modeled explicitly in the investment case, not treated as a static line.

---

## Common Mistakes

Sellers make the most costly errors. The most frequent: negotiating the peg number before finalizing the account definition. The definition is more economically significant than the number. A seller who agrees to a $10M peg without specifying which accounts are included may discover the effective peg under the buyer's proposed definition is $12M. The number looked fine; the definition destroyed value.

Second most common seller error: ignoring the buyer's structural advantage in preparing the closing statement. The buyer controls the initial calculation. That calculation will typically reflect the buyer's most favorable interpretation of ambiguous terms. Sellers who are not prepared to review and dispute within the contractual objection window default to the buyer's number. SRS Acquiom's 2025 data confirms that 70% of sellers do exactly that.

For buyers, the most costly errors involve accepting vague account definitions and underestimating inventory obsolescence. "Accounts receivable" is not a precise term until you specify gross versus net and define the treatment of specific exclusions. Inventory at cost on the balance sheet may be worth substantially less at market. Failing to properly reserve for obsolete inventory in the NWC definition leaves buyers overpaying and facing write-downs immediately post-close.

For both parties, the single largest avoidable source of disputes is inconsistency between the LOI, the purchase agreement, and the closing balance sheet accounting policies. Using different account lists across documents - even inadvertently, through poor drafting - creates interpretive disputes that require a neutral accountant to resolve. The prevention is simple: define NWC precisely at LOI stage and carry that definition verbatim through the purchase agreement and closing mechanics.

---

## What You Should Do Next

1. **Read the NWC definition in the next purchase agreement you touch.** Do not skim it. Map every inclusion and exclusion to the actual balance sheet line items of the target business, then calculate the peg manually using the specified methodology. You will find discrepancies between what the definition says and what the historical calculation assumed.

2. **Build a working capital seasonality model.** Take any company with available quarterly data and calculate NWC by quarter for four or five years. Look at the variance range. Now imagine that variance is your peg negotiation at a business you are advising. This exercise builds intuition faster than any textbook.

3. **Understand the quality of earnings process.** The QofE firm's NWC analysis is the most important output for establishing the peg in a competitive process. Ask to see one from a completed deal - either through your firm or through the alumni network. The NWC methodology section is particularly instructive.

4. **Review SRS Acquiom's annual Working Capital Purchase Price Adjustment Study.** Published annually, it tracks deal terms and dispute patterns across hundreds of private M&A transactions. The working capital section is the most practically useful benchmark for what is market on peg methodology, collar sizing, dispute frequency, and resolution timelines.

5. **Know the difference between completion accounts and locked box before any deal kickoff.** If you are on a cross-border deal and do not immediately understand which mechanic is being used and why, ask. The choice shapes the entire financial diligence workstream, the post-close dispute exposure, and the timeline from signing to price finality.

---

*Sources: SRS Acquiom 2025 Working Capital Purchase Price Adjustment Study; Wall Street Prep, "Cash-Free Debt-Free (CFDF) Transaction Structure"; Wall Street Prep, "Working Capital Formula + Calculator"; Clearly Acquired, "Ultimate Guide to Working Capital in M&A Deals"; Auxo Capital Advisors, "Working Capital Peg in M&A: Definition & Calculation"; Lincoln International, "Working Capital Adjustments and Tips to Mitigate M&A Disputes"; Colonnade Advisors, "Working Capital Adjustments: How They Impact the Final Purchase Price."*
