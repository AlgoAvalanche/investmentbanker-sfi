---
title: "DCF Valuation Step-by-Step: Building a 3-Statement Model from Scratch"
description: "A comprehensive guide to building a discounted cash flow model from scratch, including 3-statement integration, WACC calculation, and terminal value approaches used at top investment banks."
primary_keyword: "DCF valuation"
secondary_keywords: ["3-statement model", "discounted cash flow", "WACC", "terminal value", "investment banking modeling"]
category: "technical"
date: "2026-05-28"
author: "Sterling Prentice"
internal_links: ["/technical/lbo-modeling-how-sponsors-think/", "/technical/comparable-companies-analysis/", "/interview-prep/walk-me-through-dcf/"]
---

The discounted cash flow analysis remains the cornerstone of intrinsic valuation in investment banking. Every analyst learns it, every associate refines it, and every MD has opinions about it. Yet most DCF guides online skip the parts that actually matter on the desk.

This is the version nobody publishes: how DCFs actually get built, debated, and weaponized in live deal processes.

## Why the DCF Still Matters

Despite decades of criticism - Aswath Damodaran himself calls most DCFs "garbage in, garbage out" exercises - the DCF remains central to investment banking for a simple reason: it forces you to make explicit assumptions about the future. Unlike trading comps or precedent transactions, which anchor to market sentiment, the DCF requires you to defend every line item.

That discipline is the point. The number itself is often secondary.

One figure illustrates why this matters: according to [Damodaran's January 2026 industry dataset](https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/wacc.html), the overall market WACC stands at 6.96%, but individual sector WACCs range from 4.36% for utilities to 10.66% for internet software companies. A single percentage point shift in your discount rate can swing implied equity value by 15% or more on a ten-year DCF. When you are advising a client on a $500 million deal, that precision is not academic - it is the difference between getting a transaction done and watching it fall apart at the fairness opinion stage.

## Step 1: Build the Three Statements

Before you touch a single WACC calculation, you need a working three-statement model. This means an income statement, balance sheet, and cash flow statement that are fully integrated - every change in one flows correctly through the others. The [Wall Street Prep 3-statement model guide](https://www.wallstreetprep.com/knowledge/build-integrated-3-statement-financial-model/) covers the mechanics thoroughly. What it cannot teach you is judgment.

### Income Statement Projections

Start with revenue. Always. The rest follows.

For most companies, revenue projections come from a combination of:

- **Top-down**: TAM/SAM/SOM analysis, market growth rates from industry research providers
- **Bottom-up**: Unit economics, pricing trends, customer counts, same-store sales, contract backlog
- **Management guidance**: Earnings calls, investor presentations, private information in M&A contexts

The key mistake analysts make is building complexity where simplicity suffices. If you are modeling a mature industrial company, you do not need a cohort-based revenue model. Revenue growth rate plus margin assumptions gets you 90% of the way there. Save the complexity for companies where the unit economics actually differ by cohort - SaaS businesses, subscription media, specialty finance.

From revenue, you project gross margin, operating expenses, and EBITDA. The margin trajectory matters as much as the level. If you assume 200 basis points of annual margin expansion, you need an explicit operational story: labor automation, pricing power, fixed cost leverage, or mix shift toward higher-margin products. "Management said margins would improve" is not a defense that survives a second-round question from a senior banker or a cross-examination in a fairness hearing.

Project out five to ten years of income statement. [Street of Walls](https://www.streetofwalls.com/finance-training-courses/investment-banking-technical-training/discounted-cash-flow-analysis/) identifies the standard range as five to ten years, with longer periods appropriate for companies still early in their growth cycle and shorter periods for mature businesses where visibility is limited.

### Balance Sheet Integration

The balance sheet is where models break. It is also where junior analysts reveal whether they understand the business or are just copying formulas.

Common failure points:

1. **Working capital**: Days sales outstanding, days payable outstanding, and inventory days must tie to revenue and COGS trends. Do not hard-code these as dollar amounts - express them as days metrics and drive them from operating assumptions. A company growing revenue at 15% annually while DSO holds flat is implicitly assuming perfect receivables collection at scale. That assumption needs to be deliberate.

2. **PP&E and CapEx**: Capital expenditures minus depreciation drives the net PP&E balance. As [Mergers and Inquisitions notes](https://mergersandinquisitions.com/dcf-model/), CapEx should exceed depreciation when a business is growing. If your model shows flat CapEx alongside 10% revenue growth, you are implicitly assuming the company can grow on zero additional investment. For asset-light businesses this may be defensible. For manufacturing, distribution, or infrastructure businesses, it is a mistake.

3. **Debt schedule**: Interest expense on the income statement must tie to the average debt balance. This creates the circular reference that breaks most student models - interest expense reduces net income, which affects retained earnings on the balance sheet, which affects the cash sweep, which affects debt reduction, which affects next period's interest expense. Solve it with Excel iteration enabled or a dedicated macro. Every bank has its preference. Do not fight the template.

4. **Deferred taxes**: Accelerated depreciation for tax purposes creates deferred tax liabilities that belong on the balance sheet and affect your effective tax rate. Ignoring these in a multi-year model creates systematic errors in free cash flow.

### Cash Flow Statement

The cash flow statement is mechanical if your income statement and balance sheet are correct. Start with net income, add back non-cash charges (D&A, stock-based compensation, amortization of intangibles), adjust for working capital changes, subtract CapEx, and you arrive at unlevered free cash flow.

The formula that matters:

**UFCF = EBIT x (1 - Tax Rate) + D&A - CapEx - Change in Net Working Capital**

This is what you discount. Not net income. Not EBITDA. Not levered free cash flow. Unlevered free cash flow strips out the effects of capital structure so the DCF gives you enterprise value - the value of the entire business to all capital providers - before you bridge down to equity value.

Stock-based compensation deserves a separate note. There is an ongoing debate about whether to treat it as a real cash expense in UFCF. Damodaran has written extensively that you should. The logic: SBC dilutes existing shareholders and creates real economic cost even if it does not appear in cash flow from operations. In practice, most bankers add it back to EBITDA but then deduct it as a separate line item in the equity value bridge. Whatever approach you use, be consistent and be able to defend it.

## Step 2: Calculate WACC

The weighted average cost of capital blends the cost of equity and the after-tax cost of debt, weighted by their respective shares of the target capital structure. [Wall Street Prep's WACC guide](https://www.wallstreetprep.com/knowledge/wacc/) covers the formula mechanics. The judgment calls are what separate competent analysts from excellent ones.

### Cost of Equity via CAPM

Ke = Rf + Beta x (Rm - Rf)

Where:

- **Risk-free rate (Rf)**: The yield on the 10-year US Treasury. As of early 2026, this has ranged in the 4% to 5% band - materially higher than the near-zero environment of 2020-2021, which means WACC assumptions built in that era are almost certainly stale.
- **Equity risk premium (ERP)**: The additional return investors demand for holding equities over the risk-free rate. The standard range is 5% to 6% for US equities. Damodaran's regularly updated data is the practitioner standard.
- **Beta**: The measure of a company's systematic risk relative to the market. Raw beta from Bloomberg or FactSet is levered to the company's current capital structure. For DCF purposes, you unlever the betas of comparable companies using the Hamada equation, average them, then re-lever at your target capital structure. The choice of lookback period (two years versus five years), return frequency (daily versus weekly versus monthly), and benchmark index all affect the result.

The beta calculation alone generates more debate than most other inputs combined. The [McKinsey Valuation textbook](https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/valuation-measuring-and-managing-the-value-of-companies) (Koller et al.) remains the definitive practitioner reference on this topic.

### What Real WACCs Look Like

The disconnect between textbook examples and live deal work is significant. Using [Damodaran's January 2026 data](https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/wacc.html) as the authoritative benchmark:

- Internet software: 10.66%
- Semiconductors: 10.55%
- Retail (building supply): 9.51%
- Biotech: 8.49%
- Pharmaceutical: 7.85%
- Healthcare products: 7.54%
- Retail (general): 7.27%
- Oil and gas exploration: 6.25%
- Regional banks: 4.98%
- Utilities: 4.36%

The spread between a utility (4.36%) and an internet software company (10.66%) is more than six percentage points. Apply that difference to the same set of projected cash flows and you get implied enterprise values that differ by 60% or more. This is why sector context matters when you are setting your discount rate - and why it is a red flag when you see a WACC that looks like it was picked without reference to industry data.

### Cost of Debt

Use the yield to maturity on the company's existing publicly traded bonds if available. For private companies or unrated issuers, derive a synthetic credit rating from the interest coverage ratio and apply the corresponding credit spread to the risk-free rate. Tax-effect the result: Kd x (1 - marginal tax rate). The US federal marginal corporate tax rate is 21%, and most models add 3-5% for state and local taxes to arrive at an effective marginal rate of roughly 24-26%.

### Target Capital Structure

Use the target or optimal capital structure, not the current book value mix. In practice, most analysts use the median debt-to-equity ratio of the comparable company set. For a company mid-acquisition that will be more leveraged post-close, the standard practice is to use the expected long-run capital structure the acquirer intends to maintain - typically disclosed in acquisition financing materials.

## Step 3: Terminal Value

This is where 60% to 80% of your DCF value sits, depending on the projection period. As [Macabacus documents explicitly](https://macabacus.com/valuation/dcf-terminal-value): in a five-year DCF, terminal value accounts for approximately 75% of total enterprise value. In a ten-year DCF, it accounts for roughly 50%. That concentration of value in a single assumption - the perpetuity growth rate - should tell you something about the precision of the exercise. You are not computing a number. You are making an argument.

Two approaches are standard in investment banking:

### Gordon Growth Model (Perpetuity Growth Method)

TV = UFCF(n+1) / (WACC - g)

Where g is the long-term perpetuity growth rate. As [Wall Street Prep's terminal growth rate reference](https://www.wallstreetprep.com/knowledge/terminal-growth-rate/) confirms, practitioners set this between 2.0% and 4.0%, averaging approximately 3.0%. The upper bound is disciplined by a straightforward constraint: a company cannot grow faster than the economy forever. A perpetuity growth rate above long-run nominal GDP growth implies the company eventually becomes larger than the global economy - which is not a modeling outcome you want to defend at a board meeting.

A 1% change in the perpetuity growth rate assumption can shift terminal value by 15% to 30% depending on the discount rate applied. This sensitivity is why experienced bankers present a range of growth assumptions rather than a single point estimate, and why Delaware courts reviewing appraisal cases scrutinize terminal growth rate assumptions specifically.

### Exit Multiple Method

TV = EBITDA(n) x Exit Multiple

The exit multiple comes from current trading comps or precedent transactions. [Street of Walls' investment banking curriculum](https://www.streetofwalls.com/finance-training-courses/investment-banking-technical-training/discounted-cash-flow-analysis/) uses a 6.0x to 8.0x EV/EBITDA range as a representative example for a middle-market industrial business - consistent with what you will see in practice for that sector.

As [Wall Street Prep notes](https://www.wallstreetprep.com/knowledge/terminal-value/), the exit multiple approach is "viewed more favorably" in practice because the assumptions are easier to explain and defend by reference to observable market data. The irony is that it makes the DCF partially circular - you are importing market sentiment into what is supposed to be an intrinsic value exercise. Most practitioners acknowledge this and present both methods, then let the range of outputs anchor the discussion.

The best practice is to cross-validate: calculate the implied perpetuity growth rate from your exit multiple, and calculate the implied exit multiple from your perpetuity growth rate. If the implied growth rate from your exit multiple is 5% when your terminal growth rate assumption is 2.5%, one of your inputs is inconsistent with the other. Fix it before the model goes to a client.

## Step 4: Discount and Sum the Cash Flows

With projected UFCFs and a terminal value in hand, discount everything back to the present:

PV = sum of [UFCF(t) / (1 + WACC)^t] + [TV / (1 + WACC)^n]

The sum gives you enterprise value. To get to equity value, you subtract net debt (total debt minus cash), minority interests, preferred equity, and any other non-operating claims. You add back any non-operating assets not reflected in your cash flow projections - real estate held for sale, equity investments, tax assets with value.

The enterprise-to-equity bridge is where many models fail silently. Analysts who are rigorous about their cash flow projections then apply a rough net debt figure without checking whether all debt instruments are included, whether operating leases should be capitalized, or whether the pension liability belongs in the bridge.

## Step 5: Sensitivity Analysis

No DCF presentation is complete without a sensitivity table. The standard format tests WACC across the x-axis and terminal growth rate (or exit multiple) across the y-axis, with implied share price or enterprise value in each cell.

| | WACC 7.5% | WACC 8.5% | WACC 9.5% | WACC 10.5% |
|---|---|---|---|---|
| **Growth 1.5%** | $48.20 | $41.30 | $36.10 | $32.20 |
| **Growth 2.0%** | $51.40 | $43.80 | $38.10 | $33.80 |
| **Growth 2.5%** | $55.30 | $46.80 | $40.50 | $35.70 |
| **Growth 3.0%** | $60.10 | $50.40 | $43.30 | $37.90 |

The tornado chart variant - showing how much each individual assumption moves the output when varied by one standard deviation - tells you which assumptions drive the most variance. Senior bankers care about this because it reveals where the negotiation leverage is. If enterprise value is highly sensitive to the revenue growth rate and insensitive to the terminal growth rate, that tells you something about where management's credibility will be tested in a buyer's diligence process.

The sensitivity table is not an afterthought. Build it before you finalize your base case assumptions, because it will tell you whether your point estimate is in the middle of a reasonable range or sitting at an extreme that requires more defensible support.

## Common Mistakes That Get You Dinged

**Double-counting growth CapEx**: If your revenue is growing at 8% annually, your capital expenditures need to reflect the investment required to support that growth. Many analysts project maintenance CapEx only while showing aggressive revenue expansion. The inconsistency is obvious to anyone who understands the business.

**Inconsistent margins**: Margin expansion requires a mechanism. Fixed cost leverage, pricing power, product mix shift, operational improvement - each is a story that can be quantified and tested against comparable companies. "Management expects margins to improve" is a quote, not an assumption.

**Terminal value sanity check failure**: If your terminal value implies a forward P/E of 45x in year ten for a mature business, something in your model is wrong. Back into the implied multiples at terminal value as a standard quality control step. [Mergers and Inquisitions](https://mergersandinquisitions.com/dcf-model/) recommends this as a core validation technique.

**Ignoring minority interests and non-controlling interests**: The DCF gives enterprise value attributable to all capital providers, including minority shareholders in consolidated subsidiaries. If you have a 70% owned subsidiary, 30% of its enterprise value belongs to minority holders. The bridge to equity value must reflect this.

**Inconsistent tax treatment**: UFCF uses EBIT x (1 - tax rate) as the starting point. If you use the effective tax rate in one year and the marginal rate in another, or if you fail to account for NOL carryforwards that reduce near-term cash taxes, your free cash flow projections are overstated. Be explicit about which tax rate you use and why.

**Stale WACC**: If someone hands you a model built in 2021 with a WACC of 6% for a technology company, that number reflects a 0.5% risk-free rate. With the 10-year Treasury at 4% to 5% in early 2026, the same company's WACC should be materially higher. Models migrate across deal teams and persist in banks longer than they should. Always check when the WACC was last calibrated.

## What You Should Do Next

**Build a clean three-statement model from scratch** for a public company with straightforward financials - avoid banks, insurance companies, or REITs for your first model, as their financial statements require specialized treatment. Use a consumer or industrial company where the revenue and cost drivers are intuitive.

**Compare your output to sell-side research**: Pull two or three equity research reports for the same company and find where your assumptions diverge from consensus. This teaches you what "market consensus" looks like in practice and forces you to articulate why you agree or disagree.

**Calibrate your WACC to Damodaran's data**: After you calculate WACC, check it against [Damodaran's industry averages](https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/wacc.html). If your number is more than 200 basis points away from the sector average without a clear explanation, re-examine your inputs.

**Cross-validate your terminal value**: Calculate the perpetuity growth rate implied by your exit multiple and the exit multiple implied by your perpetuity growth rate. They should tell a consistent story about the long-run competitive position of the business.

**Practice the 60-second summary**: In a live deal, you will be asked to walk someone through your DCF in a meeting where they have not seen the model. The answer is not a technical lecture - it is a crisp summary of your three or four most consequential assumptions and why your implied range is defensible. The sensitivity table is your visual aid. Know what drives the spread.

**Read Damodaran's "Investment Valuation"**: Not a summary. Not a blog post. The book. It remains the single most rigorous reference on valuation theory and practice available to investment banking practitioners, and every serious analyst who has read it carries a permanent advantage over those who have not.

The DCF is ultimately a structured argument about the future value of a business. The model is the form; the assumptions are the substance. Get comfortable defending every line, because on a live deal, someone will ask.
