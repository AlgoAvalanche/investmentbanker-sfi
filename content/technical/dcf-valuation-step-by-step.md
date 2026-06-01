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

Despite decades of criticism - Aswath Damodaran himself calls most DCFs "[garbage in, garbage out](https://pages.stern.nyu.edu/~adamodar/)" exercises - the DCF remains central to investment banking for a simple reason: it forces you to make explicit assumptions about the future. Unlike trading comps or precedent transactions, which anchor to market sentiment, the DCF requires you to defend every line item.

That discipline is the point. The number itself is often secondary.

## Step 1: Build the Three Statements

Before you touch a single WACC calculation, you need a working three-statement model. This means:

### Income Statement Projections

Start with revenue. Always. The rest follows.

For most companies, revenue projections come from a combination of:

- **Top-down**: TAM/SAM/SOM analysis, market growth rates from [IBISWorld](https://www.ibisworld.com/) or industry reports
- **Bottom-up**: Unit economics, pricing trends, customer counts, same-store sales
- **Management guidance**: Earnings calls, investor presentations, private information (in M&A contexts)

The key mistake analysts make: building complexity where simplicity suffices. If you are modeling a mature industrial company, you do not need a cohort-based revenue model. Revenue growth rate plus margin assumptions gets you 90% of the way.

> "I've seen first-year analysts spend 40 hours building a revenue model with 15 segments when the MD just wanted three scenarios at different growth rates." - Common sentiment on [r/financialcareers](https://www.reddit.com/r/financialcareers/)

### Balance Sheet Integration

The balance sheet is where models break. Common failure points:

1. **Working capital**: Days sales outstanding, days payable outstanding, and inventory days must tie to revenue and COGS. Do not hard-code these.
2. **PP&E**: CapEx minus depreciation flows through. Make sure your depreciation schedule matches asset lives.
3. **Debt schedule**: Interest expense on the income statement must tie to average debt balance. This is the circular reference that breaks most models.

The circular reference problem (interest expense depends on debt, which depends on cash flow, which depends on interest expense) is solved either with iteration enabled in Excel or a copy-paste macro. Every bank has its preference. [Macabacus](https://macabacus.com/valuation/dcf) has excellent templates that handle this cleanly.

### Cash Flow Statement

The cash flow statement is mechanical if your income statement and balance sheet are correct. Start with net income, add back non-cash charges, subtract working capital increases, subtract CapEx, and you have unlevered free cash flow.

The formula that matters:

**UFCF = EBIT(1-t) + D&A - CapEx - Change in NWC**

This is what you discount. Not net income. Not EBITDA. Unlevered free cash flow.

## Step 2: Calculate WACC

The weighted average cost of capital blends the cost of equity and after-tax cost of debt based on target capital structure.

### Cost of Equity via CAPM

Ke = Rf + Beta * (Rm - Rf)

Where:
- **Rf**: 10-year Treasury yield (currently elevated, use with awareness)
- **Beta**: Levered beta from comparable companies, unlevered and re-levered to target capital structure
- **Equity risk premium**: 5-7% is standard. Duff & Phelps publishes annual estimates.

The beta calculation alone generates more debate than most other inputs combined. Raw beta from Bloomberg versus adjusted beta, 2-year versus 5-year lookback, weekly versus monthly returns - each choice moves the cost of equity materially. The [McKinsey Valuation textbook](https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/valuation-measuring-and-managing-the-value-of-companies) (Koller et al.) is the definitive reference here.

### Cost of Debt

Use the yield to maturity on existing debt or the synthetic rating approach for private companies. Remember to tax-effect: Kd * (1-t).

### Target Capital Structure

Use the company's target or optimal capital structure, not current. In practice, most analysts use the median debt/equity ratio of the comparable company set.

## Step 3: Terminal Value

This is where 60-80% of your DCF value sits, which should tell you something about the precision of the exercise.

Two approaches:

### Gordon Growth Model

TV = UFCF(n+1) / (WACC - g)

Where g is the perpetuity growth rate. This should be at or below long-term GDP growth (2-3% nominal). If your terminal growth rate exceeds inflation plus real GDP growth, you need to defend that assumption.

### Exit Multiple

TV = EBITDA(n) * Exit Multiple

The exit multiple comes from current trading comps. This approach is circular (you are using market multiples in an intrinsic value exercise) but is widely used because it is easier to defend.

In practice, most banks show both and let the client pick.

## Step 4: Sensitivity Analysis

No DCF presentation is complete without a sensitivity table. The standard format:

| | WACC 8.0% | WACC 9.0% | WACC 10.0% | WACC 11.0% |
|---|---|---|---|---|
| **Growth 1.5%** | $42.50 | $38.20 | $34.80 | $32.10 |
| **Growth 2.0%** | $45.30 | $40.50 | $36.70 | $33.60 |
| **Growth 2.5%** | $48.70 | $43.20 | $38.90 | $35.40 |
| **Growth 3.0%** | $52.80 | $46.40 | $41.50 | $37.50 |

The tornado chart variant shows which individual assumptions drive the most variance. Senior bankers care about this because it tells them where the negotiation leverage sits.

> On Wall Street Oasis, a VP at a middle-market bank put it bluntly: "The DCF is a negotiation tool. You build it to support the price you want. The sensitivity table shows the client how much room they have. If you don't understand this, you're just a spreadsheet monkey."

## Common Mistakes That Get You Dinged

1. **Double-counting growth CapEx**: If your revenue is growing, your CapEx should reflect that. Many analysts project maintenance CapEx only while showing 10% revenue growth.

2. **Inconsistent margins**: If you assume margin expansion, you need a reason. "Management said so" is not a reason in a fairness opinion.

3. **Terminal value sanity check**: If your terminal value implies a P/E of 40x in year 10, something is wrong. Always back into implied multiples.

4. **Ignoring minority interests and non-controlling interests**: The DCF gives you enterprise value. The bridge to equity value matters.

5. **Not tax-affecting stock-based compensation**: This is a perennial debate. [Damodaran's blog](https://aswathdamodaran.blogspot.com/) has extensive discussion on this. The short answer: treat it as a real expense.

## What You Should Do Next

1. **Download a clean 3-statement template** from Macabacus or Wall Street Prep and build one from scratch for a public company (pick one with clean financials - avoid banks or insurance companies for your first model).

2. **Compare your output to sell-side research**: Pull 2-3 equity research reports for the same company and see where your assumptions diverge. This teaches you what "market consensus" looks like.

3. **Build the sensitivity table first**: Before you finalize your model, identify which 2-3 assumptions drive the most variance. This is what your MD will ask about.

4. **Practice explaining your assumptions in 60 seconds**: In a live deal, you will be asked "walk me through your DCF" in meetings. The answer is not a 20-minute technical lecture - it is a crisp summary of key assumptions and why your range is reasonable.

5. **Read Damodaran's "Investment Valuation"**: The entire book. Not a summary. Not a blog post. The book. It remains the single best reference on valuation theory and practice, and every serious banker has read it.
