# Research Notes: Accretion/Dilution: The Math and the Politics

## Sources Consulted

### 1. Wall Street Prep - Accretion/Dilution Analysis (Excel Template)
- URL: https://www.wallstreetprep.com/knowledge/financial-modeling-quick-lesson-accretion-dilution-model/
- Key content: WSP frames accretion/dilution as "one of the core models" that IB analysts and associates build during acquisition evaluations. The full model requires purchase price allocation mechanics, deferred tax treatments, R&D valuation in purchase accounting, asset sales vs. stock transactions (including 338(h)(10) elections), target debt assumptions, and calendar-year/stub-period Excel modeling challenges. WSP emphasizes that introductory templates omit significant complexity - deal structure variations and timing mechanics materially shift EPS outcomes. The source positions this as genuinely foundational M&A modeling work, not a theoretical exercise.

### 2. Corporate Finance Institute - Accretion Dilution Analysis
- URL: https://corporatefinanceinstitute.com/resources/valuation/accretion-dilution/
- Key content: CFI defines accretion-dilution as "a simple test used to determine whether a proposed merger or acquisition will increase or decrease post-transaction EPS." The source is explicit that this is a screening tool, not a standalone decision metric - it should complement DCF valuations and other analyses. CFI highlights four common mistakes: (1) treating accretion as the primary deal justification, which can mask value destruction; (2) ignoring long-term synergies and strategic benefits; (3) oversimplifying based on near-term EPS only; and (4) failing to stress-test assumptions across scenarios. Interview prep focus areas: mechanics of the accretion calculation, when dilution occurs, financing method implications, and limitations of the tool.

### 3. IB Interview Questions - Accretion/Dilution Analysis Step-by-Step Guide
- URL: https://ibinterviewquestions.com/blog/accretion-dilution-analysis-guide
- Key content: Provides the most complete formula set of any source consulted. Core formulas: Standalone EPS = Acquirer NI / Acquirer Shares; Pro Forma EPS = Combined NI / Pro Forma Shares; Accretion/Dilution % = (Pro Forma EPS - Standalone EPS) / Standalone EPS x 100; After-Tax Interest = New Debt x Interest Rate x (1 - Tax Rate); New Shares Issued = Equity Purchase Price / Acquirer Share Price. Provides a ranked hierarchy of deal structures from most accretive to most dilutive: all-cash (existing cash) > all-cash (debt-financed) > mixed consideration > all-stock. Includes a worked example: TechCo acquires StartupCo, acquirer standalone EPS $5.00, pro forma EPS $5.27, result +5.4% accretive. Notes the multi-year trajectory: Year 1 often dilutive due to integration costs, Years 2-3 become accretive as synergies reach full run-rate. Key practitioner quote: "Accretion/dilution is rarely asked in isolation - typically emerges as follow-up to broader M&A discussions or deal walkthrough questions."

### 4. Investment Banking Council of America (IBCA) - Accretion/Dilution Analysis in Merger Modeling
- URL: https://www.investmentbankingcouncil.org/blog/accretiondilution-analysis-in-merger-modeling
- Key content: IBCA provides real industry benchmark data rarely found elsewhere. Integration cost benchmarks by sector: Healthcare & life sciences ~10.1% of target revenues; Consumer ~7.5% of target revenues; Technology/media/telecom >5.6% of target revenues. Includes a concrete multi-year table: Year 1 standalone EPS $2.50, pro forma $2.45, -2.0% dilutive; Year 2 standalone $2.70, pro forma $2.80, +3.7% accretive; Year 3 standalone $2.90, pro forma $3.05, +5.2% accretive - illustrating how initial dilution reverses into accretion. Cites Deloitte 2025 Survey: 88% of corporate respondents changed deal-targeting approaches within last two years. Cites Bain & Company 2025 Report: global M&A deal value up 15% in 2024 to ~$3.5 trillion, corporate M&A up 12% - boards are increasingly accepting short-term dilution for long-term strategic positioning. Cites Andrade Study of 224 large acquisitions: predicted EPS accretion positively affects announcement returns but not significantly for long-term stock performance.

### 5. Finance-Able - Accretion/Dilution: The Ultimate Guide
- URL: https://finance-able.com/accretion-dilution/
- Key content: Presents the cleanest three-step calculation framework: (1) Pro Forma Net Income = acquirer earnings + target earnings + synergies - interest expense and foregone interest income, all after-tax; (2) Pro Forma Share Count = acquirer shares + newly issued shares; (3) Pro Forma EPS = combined NI / combined shares. Notes that accretion/dilution can apply beyond EPS to EBIT, EBITDA, and Free Cash Flow, though EPS is the primary lens. Emphasizes synergy integration: cost synergies typical range 5-15% of target cost base, sourced from headcount reduction, facility consolidation, procurement savings, and technology rationalization. Interest expense quantification: each $1B debt at 5% interest reduces after-tax earnings approximately $37.5M at a 25% tax rate. Highlights the P/E shortcut rule for all-stock deals: deal is accretive if target P/E < acquirer P/E (rule breaks down with synergies, debt, or cash).

### 6. Carpenter Wellington PLLC - Valuing an M&A Transaction: Accretion/Dilution Analysis
- URL: https://carpenterwellington.com/post/valuing-an-ma-transaction-accretion-dilution-analysis/
- Key content: Provides a legal/practitioner perspective on the analysis, notable because it emphasizes that understanding accretion/dilution outcomes "will inform the approach taken to legal negotiations and impact how the legal documentation is drafted." Specifies essential data inputs: fully diluted share counts for both parties, purchase price breakdown (cash vs. stock percentage), exchange ratio calculations, LTM net income, and projected net income. Details the pro forma net income formula comprehensively: Target NI + Acquirer NI - after-tax interest expense on new debt - after-tax foregone interest income (if using cash reserves) + after-tax synergies - after-tax amortization of intangibles - after-tax depreciation on tangibles. Recommends sensitivity analysis via data tables to stress-test synergy assumptions, acquisition premiums, and stock-versus-cash funding percentages.

### 7. Process Street - Accretion Dilution Analysis Guide
- URL: https://www.process.st/accretion-dilution-analysis/
- Key content: Emphasizes the strategic rationale context - dilutive acquisitions can still create shareholder value through market expansion, technology acquisition, or competitive positioning that drives future earnings growth. Points out that many transformational deals remain dilutive short-term but become accretive within two to three years as synergies materialize. Highlights practical limitations: sensitivity to market volatility, difficulty integrating complex financial data across organizations, risk of inaccurate synergy projections, and challenge communicating nuanced findings to diverse stakeholders. The six-step framework includes a critical step often omitted in textbooks: Accuracy Verification - cross-check calculations, run scenario analyses, and conduct internal audits before presenting results.

---

## Key Themes

### The Math: Core Mechanics
- Accretion/dilution answers one binary question: does pro forma EPS exceed standalone EPS post-close?
- Three-step structure: (1) build pro forma net income, (2) calculate pro forma share count, (3) divide to get pro forma EPS, then compare to standalone
- Pro Forma NI = Acquirer NI + Target NI + After-Tax Synergies - After-Tax Interest Expense on New Debt - After-Tax Foregone Interest Income on Cash Used - After-Tax Intangible Amortization
- Pro Forma Shares = Acquirer Diluted Shares + New Shares Issued to Target (stock deals only)
- Accretion/Dilution % = (Pro Forma EPS - Standalone EPS) / Standalone EPS x 100

### The P/E Shortcut Rule
- For all-stock deals with no synergies: accretive if and only if target P/E < acquirer P/E
- High-P/E acquirer buys earnings cheaply when target trades at a lower multiple
- Rule breaks down immediately with synergies, debt financing, cash consideration, or integration costs
- Useful for back-of-envelope estimates in interviews; never sufficient for actual deal analysis

### Deal Structure Hierarchy (Most to Least Accretive)
1. All-cash financed from existing cash balance (no new shares, no interest)
2. All-cash financed with new debt (no new shares, but after-tax interest expense reduces NI)
3. Mixed consideration (partial dilution, partial interest cost)
4. All-stock (maximum share dilution, no interest expense)

### The Multi-Year Dimension
- Year 1 is typically dilutive even for well-structured deals: integration costs, partial synergy realization, one-time charges
- Years 2-3 cross into accretion as synergies reach full run-rate
- Management teams and boards should present and evaluate accretion on a 3-year horizon, not just year 1
- Illustrative trajectory (IBCA data): Y1 -2.0%, Y2 +3.7%, Y3 +5.2%

### The Politics: Why This Metric Has Outsize Influence
- For public company management, EPS is a closely watched metric tied to stock price and executive compensation
- Announcing a dilutive deal often triggers immediate negative market reaction
- Management teams are incentivized to structure deals specifically to achieve accretion - even at the cost of strategic logic
- This creates a systemic bias: acquirers may overpay to make a deal technically accretive, or reject strategically sound deals because they're dilutive in year 1
- Andrade study of 224 acquisitions: accretion prediction improves announcement returns but does NOT significantly improve long-term stock performance - the market is being somewhat fooled
- Bain 2025: global M&A up 15% in 2024 to $3.5 trillion; boards increasingly accept short-term dilution, suggesting the orthodoxy is loosening at the top end of the market
- Deloitte 2025: 88% of corporate respondents changed deal-targeting approaches within two years - the analytical framework around accretion is evolving

### Synergies: The Wild Card
- Synergies are the most powerful lever for making a deal accretive
- Cost synergies (easier to model): headcount reduction, facility consolidation, procurement savings, technology rationalization
- Revenue synergies (harder to model): cross-selling, market entry, product bundling - depends on market acceptance
- Typical cost synergy assumptions: 5-15% of target cost base
- Integration cost benchmarks by sector: Healthcare 10.1%, Consumer 7.5%, TMT 5.6% of target revenues
- Aggressive synergy assumptions are the primary mechanism by which investment bankers make dilutive deals look accretive in pitch books - this is the "politics" of the analysis

### The Fundamental Limitation
- Accretion is an accounting measure, not an economic one
- A deal can be EPS accretive while destroying shareholder value (overpayment, increased balance sheet risk, strategic misalignment)
- DCF analysis, IRR analysis, and ROIC evaluation are required complements
- Short-term EPS focus can cause rejection of long-term value-creating deals (technology acquisitions, market entry plays)
- The analysis does not risk-adjust for leverage increase or execution risk

---

## Interview-Ready Facts

1. **The one-line definition**: Accretion/dilution measures whether a deal increases or decreases the acquirer's earnings per share post-close.

2. **The P/E rule**: In an all-stock deal with no synergies, the deal is accretive if the target's P/E is lower than the acquirer's P/E. This is because the acquirer is effectively buying earnings at a cheaper multiple than the market values its own earnings.

3. **Cash vs. stock**: Cash deals are generally more accretive than stock deals because they avoid share dilution. However, if cash is debt-financed, after-tax interest expense partially offsets this advantage.

4. **The three adjustments to net income**: (1) subtract after-tax interest expense on new acquisition debt, (2) subtract after-tax foregone interest income on cash deployed, (3) add after-tax synergies.

5. **The most common interview error**: Forgetting to tax-affect the interest expense on acquisition debt. Always apply (1 - tax rate) to the interest cost.

6. **Year 1 vs. Year 3**: Most bankers present deals on a 2-3 year accretion horizon. Year 1 is often dilutive even in good deals because integration costs and partial synergy realization weigh on earnings.

7. **The big limitation**: Accretion is an accounting metric, not a value metric. A deal that is EPS accretive can still destroy shareholder value if the acquirer overpays relative to the target's intrinsic value. Always pair with DCF and ROIC analysis.

8. **Synergy range**: Typical cost synergy assumptions are 5-15% of the target's cost base. Revenue synergies are harder to model and more often challenged by investors.

9. **Integration cost benchmarks**: Healthcare M&A integration costs run ~10.1% of target revenues; Consumer ~7.5%; TMT >5.6%.

10. **Market data**: Global M&A deal value reached ~$3.5 trillion in 2024, up 15% year-over-year (Bain 2025). Boards are increasingly accepting short-term dilution for strategic value.

11. **Quantifying interest impact**: $1B of acquisition debt at 5% interest, with a 25% tax rate, reduces after-tax earnings by approximately $37.5M.

12. **New shares formula**: In a stock deal, new shares issued = equity purchase price / acquirer's current share price.

---

## Common Mistakes

### Modeling Mistakes
1. **Forgetting to tax-affect interest expense** - the single most frequent calculation error; must apply (1 - tax rate) to debt interest
2. **Using basic share count instead of fully diluted** - options, warrants, and convertibles must be included in the denominator
3. **Omitting foregone interest income** - if cash on the balance sheet is used, the company loses the after-tax return it was earning on that cash
4. **Excluding intangible amortization** - purchase price allocation creates amortizable intangibles that reduce reported earnings (and are not tax-deductible in stock deals)
5. **Applying synergies pre-tax** - synergies flow through as additional net income, so they must be tax-affected
6. **Ignoring integration costs** - one-time restructuring and integration charges suppress Year 1 earnings significantly

### Analytical/Conceptual Mistakes
7. **Treating accretion as equivalent to value creation** - the most dangerous conceptual error; EPS accretion does not mean the deal creates economic value
8. **Using Year 1 only** - single-year analysis misses the typical trajectory where initial dilution reverses into material accretion by Year 2-3
9. **Over-optimistic synergy projections** - the primary way deals are reverse-engineered to look accretive; revenue synergies in particular are routinely overstated
10. **Underestimating integration costs** - integration costs vary materially by industry (Healthcare 10.1% vs. TMT 5.6% of target revenues) and are frequently understated in pitch books
11. **Ignoring the strategic context** - a dilutive deal may be the right deal; refusing to recommend it purely on Year 1 EPS grounds is a failure of analysis

### Interview Mistakes
12. **Not clarifying assumptions first** - before calculating, always ask: tax rate? financing mix? synergy amount and timing? share price for exchange ratio?
13. **Leading with the formula before the logic** - interviewers want to know you understand WHY each component matters, not just that you can plug numbers
14. **Failing to address limitations** - every interviewer expects a candidate to acknowledge that accretion/dilution is a screening tool, not a comprehensive valuation

---

## The "Politics" Angle - Article-Specific Notes

- The accretion/dilution test has become a political instrument in M&A: management teams under EPS-linked compensation pressure will structure deals specifically to achieve accretion, regardless of intrinsic value
- Bankers know this dynamic - synergy assumptions in pitch books are frequently sized to make the accretion math work, not derived independently from operational analysis
- The result: deals get done that are EPS accretive but economically value-destructive, and deals get killed that would create long-term value because year 1 shows dilution
- Andrade's research confirms the asymmetry: the market reacts positively to accretion announcements, but long-term returns are not significantly better than dilutive deals - the market is partially responding to optics
- The sophisticated counter-argument (increasingly mainstream post-2020): Amazon, Meta, Alphabet, and other technology acquirers have explicitly accepted multi-year EPS dilution for strategic acquisitions; the 2024 M&A market acceleration (Bain: +15% to $3.5T) shows boards are breaking from pure EPS orthodoxy
- For the article: frame accretion/dilution as a necessary but insufficient test - the math is the starting point, the politics is understanding why management cares about it, and the sophistication is knowing when to override it

---

## Source Quality Notes
- Wall Street Prep, CFI, and IBCA are considered primary authoritative sources for IB training content
- ibinterviewquestions.com provided the most formula-specific and interview-targeted content
- IBCA provided the only source with cited industry research (Deloitte, Bain, Andrade study)
- Carpenter Wellington (law firm perspective) adds useful angle: legal documentation and negotiation are downstream consequences of accretion/dilution analysis
- Wall Street Oasis (403 error - could not fetch) and Macabacus were not successfully retrieved; recommend retry
