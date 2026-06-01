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

Section 382 of the Internal Revenue Code exists to prevent exactly this from becoming a straightforward arbitrage. Congress was concerned about "trafficking in tax losses" - buying loss companies primarily to exploit their tax attributes. Section 382 limits the amount of pre-change NOLs (and certain other tax attributes) that can be utilized annually after an "ownership change." Understanding how Section 382 works, how the annual limitation is calculated, and how it affects deal economics is essential for anyone working on M&A transactions.

This is an area where bankers and lawyers need to have a functional vocabulary, even if the detailed calculations belong to the tax advisors. Walking into a deal process without understanding Section 382 is how you get surprised by a material valuation adjustment at the 11th hour.

---

## What an NOL Actually Is

A net operating loss occurs when a company's deductible expenses exceed its taxable income in a given tax year. Rather than simply losing the deduction, the tax code allows companies to carry the loss forward (and, under pre-2017 law, back) to offset taxable income in other years.

The TCJA (Tax Cuts and Jobs Act of 2017) changed the carryforward rules significantly. Under current law (post-2017 NOLs):
- NOLs can be carried forward indefinitely (no 20-year limit)
- NOL deductions are limited to 80% of taxable income in any year
- No carryback to prior years (with some COVID-related exceptions)

Pre-2017 NOLs are subject to the old rules (20-year carryforward, 2-year carryback, 100% offset), but the Section 382 limitation applies regardless of which regime the NOL falls under.

Companies accumulate large NOLs by losing money. Startups that spend years pre-profitability, cyclical businesses during downturns, capital-intensive companies in development mode, businesses that took large write-downs - all of these can generate significant NOL carryforwards. By the time these companies become M&A targets (perhaps because they've turned the corner toward profitability), the NOLs represent real value.

---

## Section 382: The Ownership Change Trigger

Section 382 is triggered by an "ownership change." An ownership change occurs when the aggregate ownership of the loss corporation's stock held by "5-percent shareholders" increases by more than 50 percentage points over a rolling three-year testing period.

The mechanics are complicated, but the concept is not: if more than half the company's stock has moved from old owners to new owners in a three-year window, Congress has decided that the new owners should not get unlimited access to the old losses. The company still has the NOLs - they don't disappear - but the annual amount that can be used is capped.

Most M&A transactions trigger an ownership change. If an acquirer buys 100% of a target in a merger or acquisition, the acquirer's ownership has increased from 0% to 100% - a 100 percentage point increase, well above the 50-point threshold. A private equity sponsor buying a controlling stake similarly triggers 382 if the change crosses the threshold.

The ownership change can also be triggered by other events: a large secondary offering that shifts the shareholder base, a significant share issuance in a funding round, or even a series of smaller secondary transactions if they cumulatively cross the 50-point threshold. This catches many companies off guard. A startup that raises multiple rounds of venture capital, then an IPO, then does a large follow-on offering may have triggered Section 382 before any M&A transaction occurs.

---

## The Annual Limitation: How It Works

After an ownership change, the amount of pre-change NOLs that can be used in any tax year is limited to the "Section 382 limitation." The formula:

**Section 382 Limitation = Value of Loss Corporation x Long-Term Tax-Exempt Rate**

Breaking this down:

**Value of the loss corporation:** This is the fair market value of the company's stock immediately before the ownership change. In an acquisition context, this is effectively the equity purchase price. In a $500M acquisition of a company with $300M in NOLs, the value is $500M.

**Long-term tax-exempt rate:** The IRS publishes this monthly. It is based on the yield on long-term tax-exempt bonds, and has historically ranged from about 2% to 5%. In recent higher-interest-rate environments (2023-2024), this rate moved meaningfully.

**Example calculation:**

| Item | Amount |
|---|---|
| Equity value of target | $500,000,000 |
| Long-term tax-exempt rate (illustrative) | 3.0% |
| **Annual Section 382 limitation** | **$15,000,000** |
| Federal tax rate | 21% |
| Annual tax benefit at limit | $3,150,000 |
| Total NOLs | $300,000,000 |
| Years to fully utilize (without the 80% cap, simplified) | 20 years |

In this example, the acquirer can only use $15M of NOLs per year. At a 21% tax rate, that's $3.15M in annual tax savings. To recover the full value of $300M in NOLs (assuming full utilization), it would take 20 years. Discounted at the cost of capital, those distant tax savings may be worth only a fraction of the face value of the NOLs.

This is the Section 382 trap: a large NOL balance that looks valuable on the surface becomes significantly less valuable when the limitation is applied and the time-value of money is accounted for.

---

## How NOLs Actually Affect Deal Economics

In the [deal process](/technical/ma-process-walkthrough-pitch-to-closing/), NOLs enter the valuation in the [DCF](/technical/dcf-valuation-step-by-step/) through their effect on the projected tax payments. Without Section 382, the model would show the company paying no cash taxes (or minimal taxes) until the NOLs are exhausted. With Section 382, the model shows the company paying full taxes above the $15M annual utilization limit, and only gradually drawing down the NOL shield.

The proper way to model this:

1. Calculate the Section 382 annual limitation using the acquisition equity value and the applicable long-term tax-exempt rate
2. In each projection year, apply the limitation: the company can use up to the annual limit in NOLs to offset taxable income
3. If taxable income in a given year is below the annual limit, the unused limitation can typically be carried forward to future years (under the "unused annual limitation" rules)
4. Calculate cash taxes actually paid each year as (taxable income minus NOLs used) x tax rate
5. Discount the projected tax savings from NOL utilization at the appropriate rate

The NPV of the tax savings from NOLs, after applying Section 382 limitations and discounting, is the true value of the NOLs to the acquirer. This number is often 30-60% lower than the face value of the NOLs multiplied by the tax rate.

For the [accretion/dilution analysis](/technical/accretion-dilution-math-and-politics/), the NOL benefit shows up as a reduction in cash taxes in the combined entity's pro forma, which flows through to net income and thus to accretion/dilution. The key is modeling the limited utilization correctly, not assuming the full NOL balance is available immediately.

---

## Special Situations: Continuity of Business Enterprise

Section 382 also requires that, for the annual limitation to remain available, the acquired company must continue its "business enterprise" for at least two years post-acquisition. If the acquirer shuts down the target's core business within two years, the right to use pre-change NOLs (subject to the limitation) is eliminated entirely.

This matters in situations where the acquisition is primarily an asset deal in substance - the acquirer buys the target, takes the customers or intellectual property it wanted, and winds down the target's operations. If that happens within two years, the NOLs are gone. Tax counsel needs to assess this risk upfront in any deal where significant operational changes are planned post-close.

---

## Built-In Gains: The Section 382 Side Door Problem

Related to Section 382 is the "built-in gains" concept. If the target company has assets with unrealized gains at the time of the ownership change - appreciated inventory, appreciated real estate, appreciated IP - Section 382 extends to limit the benefit of those built-in losses (if any) and, under the net unrealized built-in gain (NUBIG) rules, can actually accelerate recognition of built-in gains.

Conversely, if the company has "built-in losses" (assets worth less than their tax basis at the time of the ownership change), those losses are treated similarly to NOLs and subject to the same annual limitation.

This is a technical area requiring a tax specialist, but deal lawyers and bankers should know the concept exists. In deals involving companies with significant intangible assets, appreciated real estate, or depreciation-heavy balance sheets, the built-in gain/loss analysis can materially affect the tax picture.

---

## Stock Deal vs. Asset Deal: The Section 338 Election

The Section 382 limitation applies to NOLs in a stock acquisition context - the acquirer buys the stock of the target, inheriting the corporate entity (and its tax attributes, subject to the limitation). In an asset acquisition, the acquirer buys assets, not the corporate entity, and does not inherit the target's NOLs at all.

This creates an interesting dynamic. A loss company with large NOLs generally prefers a stock deal (preserving the NOLs for the acquirer, potentially making the deal more valuable). A buyer who places no value on the NOLs (perhaps because their own taxable income is already shielded) might prefer an asset deal for the step-up in tax basis.

Section 338 elections add complexity. A Section 338(h)(10) election allows a stock acquisition to be treated as an asset acquisition for tax purposes - the buyer gets a stepped-up basis in the target's assets (depreciable, generating future tax deductions) but does not inherit the NOLs. Whether 338(h)(10) is beneficial depends on the relative value of: (a) stepped-up asset depreciation vs. (b) NOLs subject to Section 382 limitation.

The quantitative comparison:
- Step-up value = (fair market value minus tax basis of assets) x tax rate x PV factor based on depreciation schedule
- NOL value = PV of Section 382 limited annual tax savings over the carryforward period

If the step-up value exceeds the NOL value (common when the asset base is large and NOLs are modest), 338(h)(10) may be preferred. If NOLs are large and the asset step-up is modest, preserving the NOLs in a straight stock deal wins.

Tax counsel will run this calculation. Bankers should understand what question is being answered.

---

## Section 382 in Private Equity

Private equity adds a layer of complexity. PE firms often take companies through multiple rounds of ownership before exit. Each recapitalization, add-on acquisition, or secondary transaction that shifts ownership may be a Section 382 event. By the time a PE-backed company is sold, it may have accumulated multiple ownership changes, each creating its own Section 382 limitation.

Tracking the Section 382 history of a PE-backed company is a specific diligence workstream. The target's tax advisor should have a Section 382 study documenting each prior ownership change date, the applicable limitation, and the cumulative NOL utilization. This is requested as part of tax due diligence in any deal involving a company with significant NOLs.

A Wall Street Oasis thread on PE tax diligence noted: "Every time a company does a recap and the sponsor sells a secondary slug to co-investors, you need to check whether you've crossed the 50-point ownership change threshold. Most sponsors know this theoretically but forget to track it in practice. You find out in due diligence of the exit that two prior transactions triggered 382 events and the NOLs are worth 30 cents on the dollar, not a dollar."

This is a real pattern. The NOL diligence is worth doing thoroughly.

---

## State Tax Considerations

Section 382 is a federal tax provision. State income taxes have their own conformity rules for NOLs. Some states conform to federal Section 382 treatment; others have their own limitations; some disallow NOL carryforwards entirely or have shorter carryforward periods.

For a company with significant state tax exposure - a multi-state business with nexus in high-tax states like California, New York, or New Jersey - the state NOL analysis runs parallel to the federal analysis and may produce a materially different picture. A California Section 382 limitation computed on California equity value with California's applicable rate may be different from the federal calculation.

Quantifying the combined federal and state NPV of NOLs requires jurisdiction-by-jurisdiction analysis. For a target with $500M+ in NOLs, this work is worth doing. For a target with $50M in NOLs in a moderate-tax state, the incremental analysis may not justify the fee.

---

## Practical Deal Tips

**Request the Section 382 study in initial due diligence.** Any company that knows it has significant NOLs should have commissioned or received a Section 382 study at some point. Requesting it upfront tells you whether a limitation has already been triggered (making the analysis simpler), and gives the seller's tax counsel the opportunity to explain what the attributes are worth under various scenarios.

**Don't model NOLs at face value in the preliminary model.** The preliminary valuation model should apply a default Section 382 limitation assumption from day one - even before the actual calculation is done. Using an estimated 3-4% limitation rate as a placeholder is more accurate than modeling unlimited NOL utilization. Discovering the limitation late in the process, after you've shown the client a valuation that assumed full NOL access, is how you have difficult conversations.

**Understand the seller's tax position.** In a stock deal, the seller is selling equity in a corporate entity. If the target is a C-corporation, the seller pays capital gains tax on the sale. If the Section 382 limitation has eliminated most of the value of the NOLs, the seller may not care whether the deal is structured as a stock or asset deal (since the NOLs aren't worth much anyway). But if the NOLs are valuable to the buyer and the buyer is willing to pay for them (through a higher price), the structure becomes a negotiating point.

---

## What You Should Do Next

1. **Read the IRS guidance on Section 382 directly.** The IRS publishes Revenue Procedure 2022-01 (and annual updates) with the long-term tax-exempt rates. Review a few months of published rates to understand the range and how it moves with interest rates. The long-term rate is the single most impactful input in the Section 382 limitation calculation.

2. **Build a Section 382 limitation model for a hypothetical deal.** Take an assumed acquisition equity value, an assumed long-term tax-exempt rate, and an assumed NOL balance. Calculate the annual limitation, project annual NOL utilization against projected taxable income, and discount the tax savings stream. Compare the NPV to the face value of NOLs times the tax rate. This exercise will permanently recalibrate your intuition for how much Section 382 haircuts NOL value.

3. **On your next deal with a target that has significant NOLs, request the tax diligence report.** Read the Section 382 analysis section specifically. Understand what ownership changes have occurred, what the limitations are, and what the advisor estimates the NPV of the tax attributes to be. Comparing their methodology to your own model is one of the fastest ways to learn.

4. **Understand the 338(h)(10) election at a conceptual level.** Know that it exists, know when it might be preferred over a straight stock deal, and know that the comparison requires calculating both the step-up value and the limited NOL value. You don't need to be able to compute it, but you need to know when to ask the tax advisor to run the analysis.

5. **For deals involving loss companies, add a dedicated NOL valuation line to your DCF.** Separate the operating business value (pretax cash flows discounted at WACC) from the NOL tax shield value (discounted tax savings from NOL utilization, after Section 382 limitation). This makes the value attribution transparent and helps in negotiations where the parties disagree on how much the NOLs are worth.
