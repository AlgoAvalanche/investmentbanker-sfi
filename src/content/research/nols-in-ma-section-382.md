# Research Notes: NOLs in M&A and Section 382 Limitations

slug: nols-in-ma-section-382
category: technical
date compiled: 2026-06-01

---

## Sources Consulted

### 1. Breaking Into Wall Street - Section 382 Limitations and NOLs in M&A
URL: https://breakingintowallstreet.com/kb/ma-and-merger-models/section-382/

Core IB training resource covering Section 382 in the context of merger models. Confirms that in a Stock Purchase, the acquirer may use only a limited amount of the target's NOLs to reduce taxable income each year and must write down the remaining NOL balance that will go unused. In an Asset Purchase or 338(h)(10) deal, the target's NOLs are written down 100% and the acquirer cannot use them at all post-close. Therefore, if an acquirer finds a target with a large NOL balance, it must structure the deal as a Stock Purchase or the NOLs are worthless. Site uses video tutorials and worked examples to walk through the formula and its modeling implications.

---

### 2. Plante Moran - How Section 382 Can Unexpectedly Impact NOL Carryforwards (2025)
URL: https://www.plantemoran.com/explore-our-thinking/insight/2025/06/how-section-382-can-unexpectedly-impact-nol-carryforwards

Practitioner article emphasizing that Section 382 triggers are not limited to traditional M&A - routine capital raises, stock class issuances, and complex ownership structures can inadvertently trip the rule. Key insight: "taxable income of a 'new loss corporation' for any post-change year can't be reduced by pre-change losses in excess of the section 382 limitation." For privately held corporations the issue is more complex since ownership interests may be held through partnerships, corporations, and trusts - cap tables typically track direct ownership only, missing indirect holdings. Limitation consequences are often discovered during IRS examination when losses are first utilized, even if the ownership change occurred outside the statute of limitations. Recommends engaging tax professionals to perform Section 382 ownership studies, especially during M&A due diligence. Study costs are minimal compared to the expense of undetected limitations discovered during profitable years.

**Attributes specifically limited by Section 382:**
- Net operating loss carryovers
- Recognized built-in losses (RBILs) within five years post-change
- Pre-change capital loss carryovers
- Section 163(j) disallowed business interest deductions
- Tax credit carryforwards (governed by companion Section 383)

**Common non-M&A triggers:**
- Issuance of new stock classes for startup operations
- Foreign parent ownership with complex attribution structures
- Multiple-tier entity ownership (partnerships within corporations)
- Existing shareholders crossing 5% thresholds unknowingly

**Exceptions:**
- Cash issuance exception: stock issued solely for cash (e.g., IPOs) may not trigger attribution to existing 5% shareholders
- Small issuance exception: annual issuances not exceeding 10% of corporation value may escape attribution

---

### 3. Phoenix Strategy Group - FAQs on NOLs in M&A Deal Structuring
URL: https://www.phoenixstrategy.group/blog/faqs-on-nols-in-ma-deal-structuring

Comprehensive practitioner FAQ covering deal structure, valuation, and modeling. Includes a concrete numerical example: $15M equity value x 1.64% IRS long-term tax-exempt rate = $246,000 annual NOL usage limit. Notes that rate volatility materially affects deal economics - rates ranged from 0.89% (July 2020) to 3.34% (March 2024). Post-2017, NOLs can offset up to 80% of future taxable income and carry forward indefinitely. The CARES Act (2020) allowed NOLs from 2018-2020 to carry back five years. Cites Fortune 1000 companies reporting approximately $200 billion in deferred tax assets tied to NOL carryforwards. Highlights that ~22 states align with federal rules on a rolling basis; 36 states use post-apportionment calculations vs. the federal pre-apportionment approach, creating material state-level complexity. Includes practitioner quote from Jennifer Menendez, Managing Director M&A Tax Services (formerly Moss Adams): "Section 382 is often a consideration during tax due diligence. If NOLs or credits were utilized in prior years, the buyer will want to confirm those attributes were actually available for use under Section 382."

**Deal structure comparison:**

| Structure | NOL Treatment | Key Advantage | Primary Limitation |
|-----------|---------------|---------------|-------------------|
| Stock Purchase | NOLs transfer to buyer with restrictions | Retains full carryforward | Subject to Section 382 limits |
| Asset Purchase | NOLs don't transfer to buyer | No inherited liabilities; step-up basis | Buyer cannot access seller's NOLs |

**Continuity requirement:** Buyers must continue the target's historical business or use a significant portion of assets in an existing business for a minimum of 2 years post-transaction, or the Section 382 limitation becomes zero (i.e., no pre-change NOLs can be used at all).

---

### 4. Baker Tilly - Credits and NOLs Under Section 382
URL: https://www.bakertilly.com/insights/credits-and-nols-under-section-382

Practitioner reference from a top accounting firm. Confirms the base formula: annual limitation = corporation's stock value prior to ownership change x applicable federal long-term tax-exempt rate. Covers NUBIG/NUBIL in detail: if fair market value of assets exceeds tax basis (NUBIG position), recognized built-in gains over the following five years can substantially increase the annual limitation, enabling greater NOL utilization. Conversely, when tax basis exceeds asset value (NUBIL position), recognized built-in losses are treated like pre-change NOLs and face the same annual restrictions. Identifies three key reasons to perform a Section 382 study: (1) financial statement disclosures to support deferred tax asset reporting; (2) validate NOL/credit usage amounts for tax returns; (3) M&A transactions to quantify asset value attributable to tax benefits for buyer negotiations. Common oversight: many companies neglect NUBIG/NUBIL calculations despite their potential to substantially enhance or constrain limitation amounts during the critical five-year window.

---

### 5. GHJ Advisors - Understanding Section 382: NOL in a Transaction
URL: https://www.ghjadvisors.com/ghj-insights/understanding-section-382-net-operating-loss-in-a-transaction

Transaction advisory firm perspective covering strategic use of Section 382, not just defensive management. Three significant technical complications flagged: (1) determination of five-percent shareholder status; (2) allocation between public groups; (3) application of small issuance/redemption rules. Strategic insight: when interest rates are elevated, companies approaching the 50% ownership threshold may deliberately trigger an ownership change - the benefit being that pre-change NOLs face limitations, but post-change losses remain unrestricted. Capital raise structure matters: whether new capital comes from existing 5% shareholders vs. new public groups significantly affects the degree of Section 382 impact. Recommends modeling NOL utilization under both ownership-change and non-change scenarios using actual financial forecasts.

---

### 6. OffDeal - Net Operating Losses: Using Tax Shields in M&A
URL: https://offdeal.io/blog/net-operating-losses-using-tax-shields-in-m-and-a

Middle-market M&A practitioner perspective on NOLs as a negotiation lever. NOLs can resolve valuation disagreements between buyers and sellers: buyers anticipate tax savings and factor them into purchase price; sellers highlight verified carryforwards to justify premium pricing. "If you're selling a business that holds substantial NOLs, buyers may be motivated to offer a premium" by factoring in anticipated reduced tax costs. Post-closing compliance requires maintaining substantially similar business operations. Document retention critical for potential IRS challenges. Buyer-side best practice: request detailed NOL schedules, demand protective contractual language, seek price adjustments or earn-outs if disallowance occurs post-close.

---

## Key Themes

### 1. The Section 382 Formula - Core Mechanic
The annual NOL usage cap after an ownership change = equity value of the loss corporation at the time of the ownership change x the IRS applicable federal long-term tax-exempt rate (published monthly). This rate has ranged significantly: 0.89% in July 2020 to 3.34% in March 2024. At low rates, even a large NOL may be nearly useless. Example: $15M equity value x 1.64% = $246,000/year cap. A $10M NOL would take over 40 years to fully utilize at that cap.

### 2. Ownership Change Trigger - The 50% Rule
Section 382 is triggered when 5%+ shareholders increase their combined ownership by more than 50 percentage points over a rolling three-year testing period. This is not just about one deal - it tracks cumulative changes. Companies can trigger Section 382 repeatedly over years, with each change creating new limitations on all prior attributes.

### 3. Deal Structure Determines NOL Fate
- Stock Purchase: NOLs carry over to the buyer, subject to Section 382 annual caps
- Asset Purchase: NOLs stay with the seller entity and do not transfer - buyer gets no benefit
- 338(h)(10) Election: Treated as an asset purchase for tax purposes - NOLs are written down 100%
- The acquirer must choose Stock Purchase if accessing the target's NOL balance is a priority

### 4. Post-2017 (TCJA) Rule Changes
- NOLs can now carry forward indefinitely (no 20-year limit)
- But usage is capped at 80% of taxable income per year for losses generated after Dec. 31, 2017
- CARES Act (2020) restored 5-year carryback for NOLs generated in 2018-2020 tax years
- NOLs generated after Dec. 31, 2020 cannot be carried back at all

### 5. NUBIG and NUBIL - Built-In Gain/Loss Adjustments
Within the five-year period following an ownership change, built-in gains or losses recognized are treated as pre-change or post-change items:
- Net Unrealized Built-In Gain (NUBIG): if asset FMV > tax basis at time of ownership change, recognized gains within 5 years increase the annual 382 limitation - more NOL can be used
- Net Unrealized Built-In Loss (NUBIL): if tax basis > asset FMV, recognized losses within 5 years are treated as pre-change losses and face the same 382 annual cap - limiting deductions further

### 6. Companion Provisions - Sections 383 and 384
- Section 383: applies the same annual limitation concept to tax credit carryforwards (e.g., R&D credits, AMT credits) - not just NOLs
- Section 384: prevents a profitable acquirer from using its pre-acquisition gains to absorb the target's pre-acquisition losses immediately after closing, closing a tax arbitrage loophole

### 7. Continuity of Business Enterprise (COBE)
If the acquirer fails to continue the target's historic business or use a significant portion of the target's assets for at least two years after the ownership change, the Section 382 limitation drops to zero - meaning none of the pre-change NOLs can be used at all.

### 8. Valuation Impact and Deal Negotiation
- NOLs are a real asset - Fortune 1000 companies report ~$200 billion in deferred tax assets from NOL carryforwards
- Buyers model the NPV of the NOL tax shield, discounted for Section 382 annual caps and business risk
- Higher acquisition prices increase the 382 annual limit (larger equity value in the formula) - counterintuitively, paying more for the target can unlock more of its NOL
- Sellers use verified NOL schedules to justify premium pricing
- Buyers request contractual protections (price adjustments or earn-outs) if NOLs are later disallowed

### 9. State Tax Complexity
Approximately 22 states conform to federal NOL rules on a rolling basis. Approximately 36 states use post-apportionment NOL calculations vs. the federal pre-apportionment approach. This creates material discrepancies between federal and state NOL utilization, requiring separate state-level analysis in any deal model.

---

## Interview-Ready Facts

1. **The trigger:** Section 382 fires when 5%+ shareholders increase combined ownership by more than 50 percentage points over any rolling 3-year period. A standard acquisition of >50% stock ownership always triggers it.

2. **The formula:** Annual NOL usage cap = equity value of target at ownership change date x IRS long-term tax-exempt rate. Example: $15M equity value x 1.64% = $246,000/year.

3. **Rate sensitivity:** The IRS long-term tax-exempt rate is published monthly and has swung from 0.89% (July 2020) to 3.34% (March 2024) - deal teams must use the rate in effect at closing, not when the deal was modeled.

4. **80% income cap:** Post-TCJA (2017), even without Section 382, NOLs can only offset up to 80% of taxable income in any given year. Section 382 layers an additional annual dollar cap on top of this.

5. **Deal structure rule:** Asset purchases and 338(h)(10) elections eliminate NOLs entirely for the buyer - the only way to access an acquired company's NOL is through a Stock Purchase.

6. **Continuity of business:** Fail to continue the target's historic business for 2 years and the annual 382 limitation drops to zero - all pre-change NOLs become permanently unusable.

7. **NUBIG accelerator:** If the target's assets are worth more than their tax basis at closing, the buyer gets an enhanced 382 limit for the first five years post-close - recognized gains increase the annual cap above the base formula.

8. **Section 383:** Same annual cap applies to tax credit carryforwards (R&D credits, etc.) - not just NOLs.

9. **Fortune 1000 scale:** Fortune 1000 companies collectively report approximately $200 billion in deferred tax assets tied to NOL carryforwards - this is not a niche issue.

10. **Private company blind spot:** Cap tables for private companies track direct ownership only. Section 382 requires tracing ownership through partnerships and corporations - indirect holdings are frequently missed until an IRS examination.

11. **Strategic trigger:** When rates are elevated, a company near the 50% threshold may deliberately trigger an ownership change - post-change NOLs have no 382 restriction, only pre-change ones are capped.

12. **CARES Act carryback:** NOLs from tax years 2018-2020 could be carried back five years under the CARES Act - relevant when analyzing targets with pre-2021 loss history in deal due diligence.

---

## Common Mistakes

### Mistake 1: Assuming Stock Purchase Always Preserves NOLs Fully
A stock purchase is necessary to transfer NOLs but not sufficient to preserve them. Section 382 still caps annual usage. Candidates who say "just do a stock purchase and you get the NOLs" miss the limitation entirely.

### Mistake 2: Ignoring the Rate Variable
Many candidates know the formula concept but miss that the IRS long-term tax-exempt rate changes monthly. A deal modeled at a 1% rate environment has a very different NOL value than one closing at a 3%+ rate environment. Always use the rate in effect at the ownership change date.

### Mistake 3: Forgetting the 80% Income Cap Stacks With Section 382
Post-2017, NOLs are already limited to 80% of taxable income annually even without Section 382. The two limitations layer on top of each other - a company cannot use more than the 382 annual dollar cap, and within that, cannot offset more than 80% of income.

### Mistake 4: Overlooking NUBIG/NUBIL
Built-in gain/loss adjustments can materially increase or decrease the effective annual limit for the first five years. Ignoring NUBIG understates the buyer's ability to use acquired NOLs; ignoring NUBIL understates the restriction.

### Mistake 5: Missing Section 383 and 384
Section 382 covers NOLs; Section 383 applies the same cap to tax credits (R&D, AMT, foreign tax). Section 384 prevents immediate cross-company loss utilization in an acquisition. Candidates who only discuss 382 miss the full regulatory picture.

### Mistake 6: Not Modeling State Taxes Separately
Federal and state NOL rules diverge significantly. About 22 states conform to federal treatment; the rest use different apportionment methods. A deal model that applies federal NOL assumptions to state tax calculations will overstate the NOL benefit.

### Mistake 7: Forgetting the Continuity of Business Requirement
If the buyer plans to shut down or radically restructure the target's operations within two years of closing, the entire Section 382 limitation goes to zero - not just reduced, but eliminated. This is a material deal risk in distressed or carve-out transactions.

### Mistake 8: Treating NOL as a Binary Asset
Candidates often think of NOLs as either "usable" or "not usable." In practice, NOLs are a time-value-of-money problem. Even if the full balance is technically available, an annual cap of $246,000 on a $10M NOL means the last dollars of benefit might not arrive for decades - and must be discounted back to present value against deal economics.

### Mistake 9: Missing Inadvertent Triggers in VC-Backed Companies
For startups and VC-backed companies, multiple successive funding rounds can cumulatively trigger Section 382 without any single transaction crossing 50%. Each round that brings new 5%+ holders can contribute to the rolling three-year count. This is a due diligence trap in growth-company deals.

### Mistake 10: Not Building NOL Schedules Into the Model
In financial modeling, effective NOL management requires: EBT projections, opening/closing NOL carryforward balances, the 80% limitation factor, the annual 382 cap, state NOL calculations (post-apportionment), and expiration date prioritization by vintage year. A model that simply deducts the full NOL against taxable income is materially wrong.

---

## Additional Context for Article Writing

**Historical background:** Congress enacted Section 382 in its modern form as part of the Tax Reform Act of 1986, specifically to close "NOL trafficking" - the practice of acquiring money-losing corporations solely to use their accumulated losses as tax shelters with no legitimate business purpose. The provision replaced an earlier, less restrictive version.

**IRS Notice 2003-65 and Notice 2018-30:** These notices provide guidance on NUBIG/NUBIL calculations and are referenced in current practitioner literature as subject to potential regulatory revision. Interviewers at sophisticated funds may reference these.

**Interaction with Section 269:** Section 269 is a separate provision that can disallow NOL usage if the principal purpose of an acquisition was to evade or avoid federal income tax. It gives the IRS a weapon beyond Section 382 in egregious cases.

**382(l)(5) and 382(l)(6) exceptions:** In bankruptcy reorganizations, special exceptions under 382(l)(5) and 382(l)(6) allow loss corporations to emerge with their NOLs partially or fully intact with reduced or no annual limitation - highly relevant in distressed M&A.
