# Research Notes: Sensitivity Analysis and Tornado Charts

## Sources Consulted

### 1. IB Interview Questions - Sensitivity and Scenario Analysis in Valuation Models
- URL: https://ibinterviewquestions.com/guides/valuation-investment-banking/sensitivity-scenario-analysis-valuation-models
- Key content: This is the most comprehensive practitioner-facing guide found. It defines sensitivity analysis as varying one or two inputs mechanically across a range using Excel data tables to show how output (share price, enterprise value, IRR) responds to assumption changes - distinct from scenario analysis which models complete, internally consistent alternative cases. The guide provides a standard pairing conventions table: DCF uses WACC vs. terminal growth rate (primary) and WACC vs. exit multiple (secondary); LBO uses entry multiple vs. exit multiple (primary) and leverage vs. EBITDA growth (secondary); merger models use purchase premium vs. synergies (primary) and cash/stock mix vs. synergies (secondary). A tornado chart is defined as "a horizontal bar visualization ranking assumptions by individual impact on valuation output, with the widest bar indicating greatest influence." The guide flags a critical common error: labeling mechanical sensitivity changes as "scenarios," which misrepresents how variables co-move in real environments.

### 2. IB Interview Questions - Sensitivity Analysis and Scenario Modeling in a DCF
- URL: https://ibinterviewquestions.com/guides/valuation-investment-banking/sensitivity-analysis-scenario-modeling-dcf
- Key content: Provides the technical mechanics of sensitivity table construction - the two-variable data table is the standard format, most commonly pairing WACC vs. terminal growth rate (for perpetuity growth method) or WACC vs. exit multiple (for exit multiple method), with WACC varying in 0.5% increments and terminal growth rate in 0.25% increments. Scenario framework covered: base case uses management guidance as most likely outcome, upside case has higher growth/margin expansion/lower WACC, downside case has slower growth/margin compression/higher WACC. Best practice for scenario toggle uses a single selector cell with a CHOOSE formula: =CHOOSE($ScenarioCell, BaseValue, UpsideValue, DownsideValue), which lets the entire model recalculate with one click and is essential for live client presentations. Key quote: "Never Present Single-Point Values - Stating 'the company is worth $5.1B' without sensitivity analysis implies false precision and invites immediate challenge."

### 3. Corporate Finance Institute - Sensitivity Analysis Definition
- URL: https://corporatefinanceinstitute.com/resources/financial-modeling/what-is-sensitivity-analysis/
- Key content: CFI defines sensitivity analysis as a financial modeling technique examining how changes in input variables affect output results, addressing "what-if analysis" scenarios and helping analysts understand which variables most significantly impact valuation outcomes. The resource covers Excel-based What-If analysis functionality, best practices for financial modeling, and how to structure sensitivity analyses for professional valuations. CFI's materials note that Data Table, Tornado Chart, and the INDEX MATCH MATCH function are used together to perform a complete sensitivity analysis. Tornado charts are described as "a great way of showing the impact of changes to many variables at once" - sorted from most impactful to least impactful in a way that shapes the chart like a tornado cone. CFI covers this in their Sensitivity Analysis in Excel course within the FMVA certification program.

### 4. Edward Bodmer - Fundamentals of Creating a Tornado Diagram
- URL: https://edbodmer.com/fundamentals-of-creating-a-tornado-diagram-and-creating-sensitivity-analysis/
- Key content: This practitioner blog by a corporate finance expert provides step-by-step construction methodology for tornado diagrams. The process: establish a base case, create low and high case scenarios, then modify one variable at a time from the base case. The Excel execution steps are: set up 7+ variables with base/downside/upside values, create 14 additional sensitivity rows (one downside, one upside per variable), apply the TRANSPOSE function to reorganize data structure, build a comparison table showing high/low case impacts versus base, then convert to bar chart format. Key Excel functions used include INDEX (to assign scenario codes linking inputs to base assumptions), TRANSPOSE (to convert variable lists from rows to columns), one-way data tables (to compare each sensitivity case against base), and conditional formatting (to highlight which variables differ from baseline using the <> operator). Bodmer emphasizes that tornado diagrams function as risk visualization tools demonstrating "the importance of different variables and whether there is more downside or upside risk."

### 5. Wall Street Prep - DCF Model Interview Questions
- URL: https://www.wallstreetprep.com/knowledge/dcf-model-interview-questions/
- Key content: Wall Street Prep confirms that sensitivity analysis is the final mandatory step in any DCF model - after forecasting FCF, calculating terminal value, discounting to present value, and converting to per-share value, the analyst must perform sensitivity analysis. A critical data point: terminal value can represent approximately "three-quarters of the implied valuation," creating significant vulnerability to assumption errors - this is why sensitizing WACC and terminal growth rate is so important. WSP recommends using both perpetuity growth and exit multiple approaches for terminal value validation, and the sensitivity table should compare results from both methods. The guide also covers why equity risk premium historically ranges 4-6% based on S&P 500 spreads over Treasury yields, which directly feeds the CAPM-based WACC and therefore the sensitivity ranges. Common mistakes flagged: over-relying on perpetual growth terminal value without exit multiple validation, and using book rather than market values for capital structure weights when building WACC.

### 6. Private Equity Bro - Sensitivity Analysis in Financial Modelling
- URL: https://privateequitybro.com/sensitivity-analysis-in-financial-modelling-impact-and-risks/
- Key content: Practitioner-focused overview covering real-world applications across investment valuation, M&A transaction structuring, portfolio management, and credit risk assessment. Distinguishes three methodologies: one-way sensitivity (adjusts individual variables while keeping others constant - straightforward but may overlook interactions), two-way sensitivity (tests two variables simultaneously to observe combined effects), and scenario analysis (examines multiple variables changing at once, ideal for stress-testing in uncertain markets). The guide provides a concrete numerical example: a 10% traffic increase yields 7% sales increase, 20% traffic increase yields 14% revenue increase - demonstrating the non-linear relationships that sensitivity analysis can uncover. The article emphasizes that tornado charts enable "quick stakeholder communication about which factors matter most" and that sensitivity analysis prevents "making decisions in the dark" by providing quantified risk exposure before capital deployment.

### 7. Financial Edge Training - DCF Sensitizing for Key Variables
- URL: https://www.fe.training/free-resources/valuation/dcf-sensitizing-for-key-variables/
- Key content: Financial Edge Training confirms the two primary variables for DCF sensitivity testing are the long-term growth rate and the weighted average cost of capital (WACC), calling them "the most impactful drivers of valuation outcomes." The practical framework: identify 2-3 most material assumptions (typically WACC and terminal growth rate), test variables across reasonable ranges, present results in tabular or graphical format, and demonstrate which assumptions most significantly impact enterprise value. Key purpose highlighted: sensitivity analysis enables analysts to communicate realistic valuation ranges under different assumptions, the relative importance of each assumption, risk factors embedded in the model, and confidence levels around base case scenarios - all critical when presenting valuations to boards, investors, or transaction counterparties.

---

## Key Themes

### 1. Sensitivity Analysis Is Non-Negotiable in IB Deliverables
Every valuation deliverable - DCF, LBO, M&A merger model - requires sensitivity analysis. Presenting a single-point valuation without sensitivity context is analytically irresponsible and implies false precision. Banks and clients expect a range, not a number.

### 2. Two-Variable Data Tables Are the Workhorse
The Excel two-variable data table (Data > What-If Analysis > Data Table) is the standard output format. WACC vs. terminal growth rate is the canonical pairing for DCF; entry multiple vs. exit multiple is standard for LBO.

### 3. Sensitivity vs. Scenario - A Distinction Interviewers Test
Sensitivity analysis = mechanical, one or two variables in isolation. Scenario analysis = multiple assumptions shifted simultaneously to create a coherent economic narrative (recession, boom, base). Conflating them is a red flag in interviews.

### 4. Terminal Value Dominates DCF Sensitivity
Terminal value represents 60-80% of total enterprise value (some sources cite up to 75%). A 50 basis point move in WACC or terminal growth rate can swing implied value by 10-20% or more. This is why WACC and terminal growth rate always appear at the top of any tornado chart for a DCF.

### 5. Tornado Charts Communicate Hierarchy
Tornado charts rank variables by impact on output. They are particularly useful for investment committee presentations and board materials because they immediately show which assumptions drive the most uncertainty. The widest bar sits at the top; bars narrow toward the bottom in a tornado shape.

### 6. Scenario Toggle Best Practice
Best-in-class models use a single scenario selector cell with a CHOOSE formula so the entire model updates with one click. This is essential for live client presentations where switching between cases must be instant and error-free.

### 7. Internal Consistency Is the Core Requirement for Scenarios
A recession scenario must simultaneously lower revenue growth, compress margins, elevate WACC, and defer capex. Adjusting only one variable while calling it a scenario is a common modeling error that will draw scrutiny in any technical review.

---

## Interview-Ready Facts

- Terminal value typically represents 60-80% of total DCF enterprise value (WSP cites "approximately three-quarters")
- A 50 basis point change in WACC can swing implied DCF value by 10-20% or more
- Standard WACC sensitivity increment: 0.25%-0.50% steps
- Standard terminal growth rate sensitivity increment: 0.25% steps
- Equity risk premium historically ranges 4-6% (S&P 500 spread over Treasury yields)
- The base case cell in a sensitivity table should always be highlighted/bolded to guide reader attention
- DCF sensitivity canonical pairing: WACC vs. terminal growth rate (perpetuity method) or WACC vs. exit multiple (exit multiple method)
- LBO sensitivity canonical pairing: entry multiple vs. exit multiple (measures sponsor IRR across deal structure assumptions)
- Merger model sensitivity canonical pairing: purchase premium vs. synergies
- Tornado chart construction: vary each assumption individually (hold all others at base), plot resulting output change as horizontal bar, sort widest to narrowest
- Best-practice scenario toggle uses =CHOOSE($ScenarioCell, BaseValue, UpsideValue, DownsideValue)
- Excel path for data table: Data > What-If Analysis > Data Table (row input = one variable, column input = other variable)
- Presenting a single-point valuation without sensitivity is described by practitioners as "analytically irresponsible" and implying "false precision"

---

## Common Mistakes

1. **Presenting a single-point value** - stating "the company is worth $5.1B" without a sensitivity range implies false precision and will immediately draw a challenge in any client or committee setting

2. **Confusing sensitivity with scenarios** - labeling a mechanical one-variable tweak as a "scenario" misrepresents how variables co-move in real economic environments; interviewers test this distinction explicitly

3. **Breaking scenario internal consistency** - building a "downside scenario" that only cuts revenue growth while leaving WACC, margins, and capex unchanged is not a coherent scenario

4. **Sensitizing the wrong variables** - novices often sensitize revenue growth most prominently, but in a DCF the terminal value assumptions (WACC and growth rate) dominate - they should be the primary sensitivity pair

5. **Forgetting to highlight the base case** - in presentation format, the base case intersection in a sensitivity table must be clearly marked (bold, shaded) so readers can orient themselves

6. **Using unrealistic extreme combinations** - sensitivity tables should show a reasonable range around the base case, not extreme outlier combinations that will never occur simultaneously

7. **Adjusting only one variable in a claimed scenario** - a recession scenario requires simultaneous changes across revenue, margins, WACC, and capex; changing only one input while calling it a scenario is a technical error

8. **Over-relying on perpetuity growth terminal value** - without cross-checking against exit multiple method, the terminal value assumption is unvalidated; best practice uses both methods and compares results

9. **Using book values for WACC weights** - capital structure weights in WACC must use market values for debt and equity, not book values

10. **Extending Stage 1 forecasts beyond 10 years** - DCF Stage 1 typically runs 5-10 years; going beyond 10 years without justification reduces credibility and increases terminal value dominance

---

## Practitioner Quotes and Frameworks

- "Sensitivity shows mechanical input-output relationships; scenario shows what actually happens under different business conditions" - IB Interview Questions guide
- "Every deliverable requires both - sensitivity for analytical credibility, scenarios for decision-making realism" - IB Interview Questions guide
- "A proper LBO sensitivity shows IRR across entry/exit multiple grids - the two variables that determine sponsor returns" - IB Interview Questions guide
- "Terminal value can represent approximately three-quarters of the implied valuation" - Wall Street Prep
- Tornado diagrams demonstrate "the importance of different variables and whether there is more downside or upside risk" - Edward Bodmer
- Sensitivity analysis prevents "making decisions in the dark" by providing quantified risk exposure before capital deployment - Private Equity Bro
- "The company is worth $5.1B" without sensitivity analysis "implies false precision and invites immediate challenge" - IB Interview Questions guide

---

## Excel Mechanics Reference

**Two-Variable Data Table:**
1. Set up grid with one variable along top row, other down left column
2. Place output formula in top-left corner cell
3. Select entire grid including header row/column and corner cell
4. Data > What-If Analysis > Data Table
5. Row input cell = variable driving top row; Column input cell = variable driving left column
6. Excel calculates all combinations automatically

**Tornado Chart Construction:**
1. Establish base case values for all key assumptions
2. For each variable: set to low case, record output; set to high case, record output; reset to base
3. Calculate low swing (base minus low output) and high swing (high output minus base)
4. Sort variables by total swing magnitude (largest at top)
5. Build horizontal bar chart with two series (downside bar, upside bar)
6. Apply TRANSPOSE and INDEX functions to organize data structure efficiently

**Scenario Toggle (best practice):**
- Single selector cell (1=Base, 2=Upside, 3=Downside)
- Each assumption cell uses: =CHOOSE($ScenarioCell, BaseValue, UpsideValue, DownsideValue)
- Entire model recalculates with one selector change
- Prevents manual errors and ensures consistency across all assumptions
