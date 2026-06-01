---
title: "NOLs in M&A: Section 382 in Plain English"
description: "Section 382 limits how acquirers can use NOLs after an ownership change. Learn how net operating losses work in M&A, annual limits, and acquisition tax strategy."
primary_keyword: "NOLs in M&A"
secondary_keywords: ["Section 382", "net operating losses", "ownership change", "tax attributes", "acquisition tax"]
category: "technical"
date: "2026-05-18"
author: "Sterling Prentice"
internal_links: ["/technical/ma-process-walkthrough-pitch-to-closing/", "/technical/accretion-dilution-math-and-politics/", "/technical/dcf-valuation-step-by-step/"]
---

# NOLs in M&A: Section 382 in Plain English

Net operating loss carryforwards sit on balance sheets looking like free money. A company with $500 million in accumulated NOLs and a 21% federal tax rate has, in theory, $105 million of future tax savings sitting in its tax attributes. When that company becomes an acquisition target, some acquirers see those NOLs as part of the value proposition - buy the company, offset future taxable income with the NOLs, reduce the effective tax rate, and recover part of the acquisition cost through the tax shield.

Section 382 of the Internal Revenue Code exists to prevent exactly this from becoming a straightforward arbitrage. Congress enacted the modern version of Section 382 as part of the Tax Reform Act of 1986, specifically to close "NOL trafficking" - the practice of acquiring money-losing corporations solely to exploit their accumulated tax losses with no legitimate business purpose. Section 382 limits the amount of pre-change NOLs (and certain other tax attributes) that can be utilized annually after an "ownership change." Understanding how Section 382 works, how the annual limitation is calculated, and how it affects deal economics is essential for anyone working on M&A transactions.

Fortune 1000 companies collectively report approximately $200 billion in deferred tax assets tied to NOL carryforwards, according to Phoenix Strategy Group. This is not a niche issue - it sits in the middle of deal economics on a significant portion of M&A transactions involving targets that have passed through unprofitable periods.

This is an area where bankers and lawyers need to have a functional vocabulary, even if the detailed calculations belong to the tax advisors. Walking into a deal process without understanding Section 382 is how you get surprised by a material valuation adjustment at the 11th hour.

---

## What an NOL Actually Is

A net operating loss occurs when a company's deductible expenses exceed its taxable income in a given tax year. Rather than simply losing the deduction, the tax code allows companies to carry the loss forward (and, under pre-2017 law, back) to offset taxable income in other years.

The Tax Cuts and Jobs Act (TCJA) of 2017 changed the carryforward rules significantly. Under current law for post-2017 NOLs:

- NOLs can be carried forward indefinitely - the prior 20-year expiration limit was eliminated
- NOL deductions are capped at 80% of taxable income in any single year
- No carryback to prior years is permitted

The CARES Act (2020) created a temporary exception: NOLs generated in tax years 2018, 2019, and 2020 could be carried back five years. For NOLs generated after December 31, 2020, the carryback is unavailable entirely. In deal due diligence on any target with pre-2021 loss history, the carryback period is worth examining.

Pre-2017 NOLs operate under the old rules - 20-year carryforward, 2-year carryback, 100% income offset - but the Section 382 annual limitation applies regardless of which regime the NOL falls under.

Companies accumulate large NOLs by losing money. Startups that spend years pre-profitability, cyclical businesses during downturns, capital-intensive companies in development mode, businesses that took large write-downs - all of these can generate significant NOL carryforwards. By the time these companies become M&A targets, the NOLs represent real value - provided they can actually be used.

---

## Section 382: The Ownership Change Trigger

Section 382 is triggered by an "ownership change." An ownership change occurs when the aggregate ownership of the loss corporation's stock held by "5-percent shareholders" increases by more than 50 percentage points over a rolling three-year testing period.

The concept is not complicated even if the mechanics are: if more than half the company's stock has moved from old owners to new owners in a three-year window, Congress decided that the new owners should not get unlimited access to the old losses. The company still has the NOLs - they do not disappear - but the annual amount usable is capped.

Most M&A transactions trigger an ownership change. If an acquirer buys 100% of a target in a merger, the acquirer's ownership has increased from 0% to 100% - a 100 percentage point increase, well above the 50-point threshold. A private equity sponsor buying a controlling stake similarly triggers Section 382 if the cumulative change crosses the threshold.

What surprises deal teams is that Section 382 is not limited to traditional M&A. Plante Moran's practitioner guidance identifies a range of non-M&A triggers: issuance of new stock classes for startup operations, foreign parent ownership with complex attribution structures, multiple-tier entity ownership where partnerships hold corporate interests, and existing shareholders crossing 5% thresholds unknowingly through secondary market purchases. Routine capital raises can inadvertently trip the rule if they shift the 5%-shareholder composition enough.

For startups and venture-backed companies, multiple successive funding rounds can cumulatively trigger Section 382 without any single transaction crossing 50%. Each round that introduces new 5%+ holders contributes to the rolling three-year count. A company that raises a seed round, a Series A, a Series B, and then a growth round may have triggered multiple Section 382 ownership changes before any acquisition occurs - arriving at the deal table with NOLs already partially capped from prior events.

Two exceptions provide relief in limited circumstances. The cash issuance exception covers stock issued solely for cash (such as IPOs) and may not trigger attribution to existing 5% shareholders. The small issuance exception covers annual issuances not exceeding 10% of corporation value. Neither is available in most M&A contexts, but both matter in the pre-deal compliance analysis.

---

## The Annual Limitation: How It Works

After an ownership change, the amount of pre-change NOLs usable in any tax year is limited to the "Section 382 limitation." The formula, confirmed by Baker Tilly's practitioner reference on NOLs under Section 382:

**Section 382 Limitation = Value of Loss Corporation x Long-Term Tax-Exempt Rate**

**Value of the loss corporation:** This is the fair market value of the company's stock immediately before the ownership change. In an acquisition context, this is the equity purchase price.

**Long-term tax-exempt rate:** The IRS publishes this monthly. It is based on the yield on long-term tax-exempt bonds. The rate has swung materially over recent years - Phoenix Strategy Group documents a range from 0.89% in July 2020 to 3.34% in March 2024. Deal teams must use the rate in effect at the ownership change date, not the rate at the time the deal was modeled. A deal signed in a 1% rate environment and closed six months later at 3% has a materially different Section 382 calculation.

**Concrete example from Phoenix Strategy Group:** At a $15 million equity value and a 1.64% long-term tax-exempt rate, the annual Section 382 limitation is $246,000. A $10 million NOL at that cap would take more than 40 years to fully utilize - and must be discounted back to present value against deal economics.

Scaling to a larger transaction:

| Item | Amount |
|---|---|
| Equity value of target | $500,000,000 |
| Long-term tax-exempt rate (illustrative) | 3.0% |
| **Annual Section 382 limitation** | **$15,000,000** |
| Federal tax rate | 21% |
| Annual tax benefit at limit | $3,150,000 |
| Total NOLs | $300,000,000 |
| Years to fully utilize (simplified) | 20 years |

In this example, the acquirer can only use $15 million of NOLs per year. At a 21% tax rate, that is $3.15 million in annual tax savings. To recover the full value of $300 million in NOLs (assuming full utilization and ignoring the 80% income cap), it would take 20 years. Discounted at any reasonable cost of capital, those distant tax savings are worth a fraction of the face value of the NOLs.

This is the Section 382 trap. As Breaking Into Wall Street's merger model training confirms: in a stock purchase, the acquirer may use only a limited amount of the target's NOLs each year and must write down the remaining NOL balance that will go unused.

---

## Post-2017 Stacking: The 80% Cap Compounds Section 382

A mistake candidates and junior bankers make is treating Section 382 as the only NOL constraint. Post-TCJA, two limitations now stack on top of each other.

The 80% cap applies first: even without Section 382, a company can offset only 80% of taxable income in any year using post-2017 NOLs. Then the Section 382 annual dollar cap layers on top. In practical terms, a company cannot use more than the Section 382 annual dollar limit, and within that limit, cannot offset more than 80% of taxable income.

If the Section 382 annual limit is $15 million but taxable income is $10 million, the 80% cap further restricts usage to $8 million - not $10 million. The two limitations operate simultaneously, and the model must apply both.

---

## NUBIG and NUBIL: Built-In Gain and Loss Adjustments

Within the five-year period following an ownership change, built-in gains or losses recognized on assets are treated as pre-change or post-change items depending on the corporation's net unrealized position at the time of the ownership change.

Baker Tilly's practitioner guidance on this is precise:

**Net Unrealized Built-In Gain (NUBIG):** If the fair market value of the corporation's assets exceeds their tax basis at the time of the ownership change, the company is in a NUBIG position. Recognized built-in gains within the following five years increase the annual Section 382 limitation - meaning more NOL can be used in those years than the base formula alone would permit. This is an accelerant that deal teams consistently undervalue.

**Net Unrealized Built-In Loss (NUBIL):** If tax basis exceeds fair market value, recognized losses within five years are treated as pre-change losses subject to the same annual cap. This is an additional constraint on top of the base formula.

The IRS issued guidance on NUBIG and NUBIL calculations through Notice 2003-65 and Notice 2018-30. These notices are referenced in current practitioner literature and are subject to potential regulatory revision - sophisticated interviewers at tax-focused funds may reference them directly.

Many companies neglect NUBIG and NUBIL calculations despite their potential to substantially alter effective annual limits during the critical five-year window. Ignoring a strong NUBIG position understates the buyer's ability to use acquired NOLs; ignoring a NUBIL position understates the restriction.

---

## Deal Structure Determines NOL Fate

How the deal is structured determines whether the acquirer gets access to the target's NOLs at all. This is not nuance - it is binary.

**Stock Purchase:** The acquirer buys the stock of the target, inheriting the corporate entity and its tax attributes. Pre-change NOLs carry over to the acquirer subject to the Section 382 annual limitation. This is the only structure that gives the buyer access to the target's accumulated NOLs.

**Asset Purchase:** The acquirer buys assets, not the corporate entity. The target's NOLs remain with the selling entity and do not transfer. The acquirer gets zero benefit from them. Breaking Into Wall Street's merger model training states this directly: in an asset purchase, the target's NOLs are written down 100% and the acquirer cannot use them at all post-close.

**Section 338(h)(10) Election:** Allows a stock acquisition to be treated as an asset acquisition for tax purposes. The buyer gets a stepped-up tax basis in the target's assets - generating future depreciation and amortization deductions - but does not inherit the NOLs. Same result as an asset purchase from an NOL perspective: zero transfer. Phoenix Strategy Group's deal structure comparison confirms this.

The strategic implication is straightforward: if accessing the target's NOL balance is a priority, the deal must be structured as a stock purchase. The 338(h)(10) election is only preferable when the value of the stepped-up asset basis exceeds the (Section 382-limited, discounted) value of the NOLs.

The quantitative comparison:
- Step-up value = (fair market value minus tax basis of assets) x tax rate x present value factor based on depreciation schedule
- NOL value = present value of Section 382-limited annual tax savings over the carryforward period

Tax counsel runs this calculation. Bankers need to understand what question is being answered.

---

## Continuity of Business Enterprise: The Two-Year Cliff

Section 382 includes a continuity requirement that receives less attention than the annual limitation formula. Phoenix Strategy Group's deal documentation is explicit: buyers must continue the target's historical business or use a significant portion of its assets in an existing business for a minimum of two years post-transaction, or the Section 382 limitation becomes zero.

Not reduced - zero. None of the pre-change NOLs can be used at all.

This matters in distressed deals, carve-outs, and situations where the acquirer plans to integrate or wind down the target's operations quickly. If the target's business is shut down or radically restructured within two years of closing, the entire accumulated NOL balance is forfeit.

Tax counsel must assess the COBE risk before closing, not after. In any deal where significant operational changes are planned post-close, this analysis belongs in the deal structure conversation, not in the post-close integration checklist.

---

## Companion Provisions: Sections 383 and 384

Section 382 covers NOL carryforwards. Two companion provisions extend the same logic to other tax attributes:

**Section 383:** Applies the same annual limitation concept to tax credit carryforwards - R&D credits, alternative minimum tax credits, foreign tax credits. The same formula (equity value x long-term tax-exempt rate) caps annual utilization of these credits after an ownership change. Baker Tilly identifies this explicitly in its practitioner guidance on Section 382. Candidates who only discuss NOLs in the Section 382 context miss the full regulatory picture.

**Section 384:** Prevents a profitable acquirer from immediately using pre-acquisition gains to absorb the target's pre-acquisition losses after closing. It closes a tax arbitrage loophole that would otherwise allow acquirers to use Section 382-limited losses more rapidly by pairing them with recognized built-in gains. GHJ Advisors flags this as a technical complication that arises in transactions where the acquirer itself has unrealized gains.

---

## Bankruptcy Exception: Sections 382(l)(5) and 382(l)(6)

In bankruptcy reorganizations, special rules under Sections 382(l)(5) and 382(l)(6) alter the standard Section 382 framework:

**Section 382(l)(5):** Applies when creditors and former shareholders of the loss corporation receive at least 50% of the stock of the reorganized entity. The loss corporation can emerge with its NOLs intact and with no annual Section 382 limitation - but the NOL balance is reduced by interest paid or accrued on debt converted to equity during the prior two years.

**Section 382(l)(6):** An alternative that imposes the standard Section 382 annual limitation but calculates the equity value using the post-reorganization value (which is typically higher than pre-reorganization value), resulting in a larger annual limit than would otherwise apply.

These provisions are highly relevant in distressed M&A. A bankruptcy reorganization structured to qualify under 382(l)(5) can preserve significant NOL value that would otherwise be largely eliminated by the standard formula applied at pre-bankruptcy equity values.

---

## How NOLs Affect Deal Economics in Practice

In the [deal process](/technical/ma-process-walkthrough-pitch-to-closing/), NOLs enter the valuation through their effect on projected tax payments. Without Section 382, the model shows the company paying no cash taxes until the NOLs are exhausted. With Section 382, the model shows full taxes above the annual utilization limit, with only a gradual NOL drawdown.

The proper [DCF](/technical/dcf-valuation-step-by-step/) treatment:

1. Calculate the Section 382 annual limitation using acquisition equity value and the applicable long-term tax-exempt rate (at the ownership change date, not the modeling date)
2. Apply the 80% income cap to taxable income before the Section 382 dollar limit
3. In each projection year, use up to the annual dollar limit in NOLs to offset taxable income
4. Carry forward unused annual limitation to future years under the unused limitation rules
5. Calculate cash taxes paid each year as (taxable income minus NOLs used) x tax rate
6. Discount projected tax savings from NOL utilization at the appropriate rate

The NPV of tax savings after applying Section 382 limitations and discounting is the true value of the NOLs. This number is routinely 30-60% below the face value of the NOLs multiplied by the tax rate - which is why preliminary models that assume full NOL utilization overstate value materially.

NOLs are also a negotiation lever. OffDeal's M&A practitioner analysis on tax shields in M&A frames this directly: NOLs can resolve valuation disagreements between buyers and sellers. Buyers factor anticipated tax savings into purchase price; sellers highlight verified carryforwards to justify premium pricing. "If you're selling a business that holds substantial NOLs, buyers may be motivated to offer a premium" by factoring in anticipated reduced tax costs. Buyers, for their part, should request detailed NOL schedules, demand protective contractual language, and seek price adjustments or earn-outs if disallowance occurs post-close.

One counterintuitive deal mechanic from Baker Tilly: paying a higher acquisition price increases the equity value in the Section 382 formula, which increases the annual limitation. A larger deal creates a larger annual NOL allowance. This does not make overpaying rational, but it does mean that in two competing structures with different equity values, the larger one unlocks more NOL per year.

For the [accretion/dilution analysis](/technical/accretion-dilution-math-and-politics/), the NOL benefit flows through as a reduction in cash taxes in the combined entity's pro forma, then into net income, then into accretion or dilution. The key is applying the limited utilization correctly and not assuming the full NOL balance is available immediately.

---

## Private Equity and Multiple Ownership Changes

Private equity adds structural complexity. PE firms often move companies through multiple rounds of ownership before exit - each recapitalization, add-on acquisition, or secondary transaction that shifts the shareholder base may constitute a Section 382 event. By the time a PE-backed company is sold, it may have accumulated multiple prior ownership changes, each creating its own limitation layer.

Tracking the Section 382 history of a PE-backed company is a specific diligence workstream. The target's tax advisor should have a Section 382 study documenting each prior ownership change date, the applicable limitation at that date, and cumulative NOL utilization against each limitation. This is requested as part of standard tax due diligence in any deal involving a target with significant NOLs and a complex equity history.

The pattern is well-documented: sponsors know Section 382 applies theoretically but fail to track cumulative ownership shifts across multiple transactions. Discovery in exit due diligence that two prior events triggered Section 382 - with NOLs worth 30 cents on the dollar instead of a dollar - is a real outcome in mid-market PE deals.

Plante Moran's guidance on Section 382 ownership studies emphasizes that for privately held corporations, the issue is especially acute. Cap tables typically track direct ownership only. Section 382 requires tracing ownership through partnerships, corporations, and trusts - indirect holdings are frequently missed until an IRS examination. Plante Moran notes that limitation consequences are often discovered during IRS examination when losses are first utilized, even if the ownership change occurred outside the statute of limitations. A Section 382 study at deal entry is cheap insurance against that outcome.

---

## State Tax Complexity

Section 382 is a federal provision. State income taxes have their own NOL conformity rules that diverge materially from federal treatment. Phoenix Strategy Group's research quantifies the gap: approximately 22 states conform to federal NOL rules on a rolling basis; approximately 36 states use post-apportionment NOL calculations rather than the federal pre-apportionment approach. This creates material discrepancies between federal and state NOL utilization that require separate jurisdiction-by-jurisdiction analysis.

For a multi-state target with nexus in high-tax states - California, New York, New Jersey - the state NOL analysis runs parallel to the federal analysis and may produce a substantially different result. Some states have shorter carryforward periods; others disallow NOL carryforwards in specific circumstances. A deal model that applies federal NOL assumptions uniformly to state tax calculations will overstate the combined NOL benefit.

The practitioner guidance from Jennifer Menendez, Managing Director of M&A Tax Services, quoted by Phoenix Strategy Group, frames the due diligence standard: "Section 382 is often a consideration during tax due diligence. If NOLs or credits were utilized in prior years, the buyer will want to confirm those attributes were actually available for use under Section 382." Confirming availability means confirming it at both the federal level and each material state level.

---

## Strategic Use: Deliberately Triggering an Ownership Change

Most Section 382 discussions focus on managing or limiting the damage from an ownership change. GHJ Advisors identifies a less intuitive scenario: when interest rates are elevated, companies approaching the 50% ownership threshold may deliberately trigger an ownership change.

The logic: pre-change NOLs are subject to the Section 382 annual limitation. Post-change NOLs - losses generated after the ownership change - are completely unrestricted. If a company expects to generate significant future losses post-transaction (and thus post-change NOLs that will be unrestricted), and the pre-change NOLs are relatively modest, deliberately crossing the ownership change threshold eliminates the restriction on future losses while accepting a cap on historical ones.

Rate environment matters here. At a 3%+ long-term tax-exempt rate, the annual limitation is meaningfully higher than at a sub-1% rate. Triggering an ownership change at an elevated rate environment is less costly than at a low-rate environment.

GHJ Advisors also highlights that capital raise structure affects the degree of Section 382 impact. Whether new capital comes from existing 5% shareholders versus new public shareholder groups significantly changes how much of the ownership base shifts. Modeling NOL utilization under both ownership-change and non-change scenarios using actual financial forecasts is the recommended approach before finalizing structure.

---

## Section 382 in the Model: What the Spreadsheet Must Show

A financial model that simply deducts the full NOL balance against taxable income is materially wrong for any acquisition that triggers Section 382. The correct model requires:

- Projected earnings before tax (EBT) for each year of the projection period
- Opening and closing NOL carryforward balances tracked by vintage year
- The 80% annual limitation applied to taxable income before the Section 382 cap
- The Section 382 annual dollar cap (equity value x long-term tax-exempt rate at closing)
- Carryforward of unused annual limitation to subsequent years
- State-level NOL calculations computed on a post-apportionment basis where required
- Expiration date prioritization (pre-2017 NOLs have a 20-year limit and must be used before indefinite-carryforward post-2017 NOLs where strategy permits)

This is not complex modeling work, but it requires discipline to build correctly. The default of ignoring Section 382 in preliminary models routinely produces overstatements that surface as valuation adjustments when the tax diligence is completed - late in the process, when adjustments are most disruptive.

---

## Practical Deal Tips

**Request the Section 382 study in initial due diligence.** Any company that knows it has significant NOLs should have a Section 382 study on file. Requesting it upfront identifies whether a limitation has already been triggered, shows prior ownership change dates and applicable limitations, and tells you what the attributes are worth under various scenarios before valuation is locked.

**Do not model NOLs at face value in the preliminary model.** Apply a default Section 382 limitation assumption from day one - even before the actual calculation is done. Using an estimated 3-4% limitation rate as a placeholder is materially more accurate than modeling unlimited NOL utilization. Discovering the limitation late in the process, after showing the client a valuation that assumed full NOL access, creates difficult conversations.

**Understand the seller's tax position.** If the Section 382 limitation has eliminated most of the practical value of the NOLs, the seller may not care whether the deal is structured as stock or assets. But if the NOLs are valuable and the buyer is willing to pay for them through a higher price, the structure becomes a negotiating point with real economic consequences.

**Build the NUBIG/NUBIL analysis into your diligence request list.** Ask the target's tax advisor for the net unrealized built-in gain or loss position at the anticipated closing date. This single input can meaningfully alter the effective annual limitation for the first five years post-close.

**For VC-backed and multi-round startup targets, trace the ownership change history before the LOI.** Each funding round is a potential Section 382 event. The Section 382 history of a heavily-funded startup may reveal multiple prior ownership changes, each with its own limitation. Find this before signing, not after.

---

## What You Should Do Next

1. **Build a Section 382 limitation model for a hypothetical deal.** Take an assumed acquisition equity value, the current IRS long-term tax-exempt rate, and an assumed NOL balance. Calculate the annual limitation, apply the 80% income cap, project annual NOL utilization against projected taxable income, and discount the tax savings stream. Compare the NPV to the face value of NOLs times the tax rate. This exercise permanently recalibrates intuition for how much Section 382 haircuts NOL value.

2. **Read the IRS published long-term tax-exempt rates for recent years.** The IRS publishes these monthly through Revenue Procedure updates. Reviewing the rate history from 2020 through 2024 - spanning 0.89% to 3.34% - illustrates how dramatically rate environment affects NOL economics. The rate at the ownership change date is the single most impactful input in the formula.

3. **On your next deal with a target that has significant NOLs, request the tax diligence report.** Read the Section 382 analysis section directly. Understand what ownership changes have occurred, what the applicable limitations are, and what the advisor estimates the NPV of the tax attributes to be. Comparing their methodology to your own model is one of the fastest ways to develop fluency in this area.

4. **Understand the 338(h)(10) election at a conceptual level.** Know that it exists, when it might be preferred over a straight stock deal, and that the comparison requires calculating both step-up value and limited NOL value. The deal team needs to know when to ask the tax advisor to run the analysis.

5. **For deals involving loss companies, add a dedicated NOL valuation line to your DCF.** Separate the operating business value (pre-tax cash flows discounted at WACC) from the NOL tax shield value (discounted tax savings from NOL utilization, after Section 382 limitation). This makes value attribution transparent and gives both sides a foundation for negotiations where NOL value is contested.
