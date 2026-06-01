# Research Notes: Football Field Charts in Valuation

## Sources Consulted

### 1. Wall Street Prep - Football Field Valuation Chart | Excel Tutorial + Example
- URL: https://www.wallstreetprep.com/knowledge/football-field-valuation-real-example-excel-template/
- Key content: WSP defines the football field valuation matrix as a floating bar chart in Excel that puts several valuation analyses side-by-side to provide clients with the full context of a company's value using a variety of methodologies and assumptions. The standard methodologies included are DCF, LBO analysis, comparable company analysis, precedent transactions, and 52-week trading range, with optional add-ons like liquidation analysis and sum-of-the-parts (SOTP). WSP specifically flags that most templates show bars vertically rather than horizontally (easier to build but less professional), do not support percentile ranges (25th, median, 75th - which is what all banks use in practice), and lack a dynamic share price line that updates automatically. The resource includes a real-world Excel template and video walkthrough showing how to produce a bank-quality output rather than a textbook approximation.

### 2. Corporate Finance Institute - Football Field Chart
- URL: https://corporatefinanceinstitute.com/resources/financial-modeling/football-field-chart/
- Key content: CFI frames the football field as a tool to "summarize a range of values for a business, based on different valuation methods," explicitly designed to acknowledge that multiple methodologies produce different results and no single number is authoritative. A comparable company analysis might show high valuations during strong equity markets while an intrinsic DCF yields a lower figure - the football field presents both without forcing a false reconciliation. CFI identifies four primary practical advantages: transparency (shows how methodologies diverge), decision-making (identifies consensus zones), negotiation (establishes defensible ranges for M&A pricing), and communication (makes complex financial analysis accessible to non-specialists). The chart is used across M&A advisory, fairness opinions, capital raising documentation, and strategic planning presentations. CFI offers a free downloadable Excel template.

### 3. Mergers & Inquisitions - Investment Banking Pitch Books
- URL: https://mergersandinquisitions.com/investment-banking-pitch-books/
- Key content: M&I describes the football field as the core "summary valuation" page in sell-side M&A pitch books and notes that these pages vary dramatically in sophistication - "from simple to more interesting to so complicated they could be eye charts." The valuation section of a pitch book may contain only 1-2 slides in a short book or 20+ slides in a longer one, with the football field serving as the synthesis page that distills all the underlying model outputs. M&I specifically references the Jazz Pharmaceuticals deal as a real-world example where the traditional valuation football field was used alongside long-term projection summaries and sensitivity analysis slides. The standard inputs to the pitch book football field are: DCF model output, comparable public companies, and precedent transactions - often supplemented with the 52-week trading range as a market sanity check.

### 4. Breaking Into Wall Street - Football Field Valuation: Excel Template, Tutorial, and Full Explanation
- URL: https://breakingintowallstreet.com/kb/excel/football-field-valuation/
- Key content: BIWS emphasizes the dynamic share-price reference line as a distinguishing feature of a professional-grade football field - a movable line that adjusts across all methodology bars, allowing a banker or board to instantly see whether a proposed deal price sits within, above, or below the ranges supported by analysis. BIWS notes that the chart works for both public companies (share price axis) and private companies (enterprise value axis), with axis selection driven by the audience: boards and shareholders think in share price terms, while M&A practitioners think in enterprise value. The resource highlights that each bar's width reflects the specific uncertainty within that methodology - peer selection drives comp bar width, transaction type filtering drives precedent bar width, discount rate sensitivity drives DCF bar width, and leverage assumptions drive LBO bar width.

### 5. IB Interview Questions - The Football Field Chart: How Bankers Synthesize Valuation
- URL: https://ibinterviewquestions.com/guides/valuation-investment-banking/football-field-chart-how-bankers-synthesize-valuation
- Key content: This practitioner-focused guide defines the football field as "a horizontal stacked bar chart used in investment banking to display the implied valuation range from multiple methodologies on a single slide" and provides an explicit methodology ranking by typical output level: precedent transactions generally rank highest (control premiums), followed by DCF (assumption-dependent and highly variable), then trading comps (reflect current market without premium), with LBO analysis typically at the bottom (financial buyers constrained by target returns and leverage capacity). The guide explains convergence vs. divergence as the chart's key interpretive framework: when bars overlap significantly, confidence in the valuation range is high; when bars diverge, banker judgment is required to explain why (market undervaluation, overly aggressive DCF assumptions, cyclical conditions, credit availability). Common practitioner errors cited include cherry-picking ranges to support predetermined conclusions, excluding outlier transactions that don't fit, and using unrepresentative peer groups to inflate comparable multiples.

### 6. Macabacus - Building a Football Field Chart in Excel
- URL: https://macabacus.com/blog/build-football-field-chart-excel
- Key content: Macabacus provides the definitive step-by-step Excel construction guide and identifies the chart's four core benefits as: visual comparison (bar format vs. table of numbers), outlier detection (unusual valuations immediately visible), summary statistics (averages and midpoints at a glance), and scalability (works with 2-3 or 10+ methodologies). The construction process involves creating three columns (Valuation Method, Minimum, Maximum), adding a Difference column using =C2-B2, inserting a stacked column chart, and applying "No Fill" to the Minimum series to make it invisible - leaving only the difference band visible. Axis adjustments are critical: the horizontal axis must span the full value range, the vertical axis should order methodologies logically (often from market-based at top to intrinsic at bottom), and unnecessary legends and gridlines should be stripped. Macabacus also offers a built-in football field template that reduces construction time significantly.

### 7. Romero Mentoring - The Definitive Guide to Football Field Charts and Valuations
- URL: https://romeromentoring.com/football-field-charts-and-valuations/
- Key content: This practitioner blog provides a case study on growth-stage companies (specifically Tesla) to illustrate a common real-world challenge: when internal DCF projections reflecting aggressive growth assumptions produce valuations "inches from the end zone" while market trading comps sit "far in the backfield," bankers must exercise judgment on production capacity, economies of scale, and competitive threats rather than mechanically accepting either number. The six valuation methods covered include DCF, comparable company analysis, P/E multiples, EV/EBITDA multiples, LTM sales multiples, and 52-week high/low ranges. The guide flags that high variability in bar positions (except for growth-stage companies) is a red flag indicating model errors or inappropriate peer group selection. The information hierarchy point is key: the chart must present data "clearly and efficiently, so that the investment thesis is impactful and effective" - a cluttered or inconsistently scaled football field undermines credibility.

### 8. Financial Edge Training - Football Field
- URL: https://www.fe.training/free-resources/valuation/football-field/
- Key content: Financial Edge offers a concise definition - "a graph used to compare and summarize the results of different valuation methodologies to value a company" - and situates the football field as foundational educational content for finance professionals. The resource reinforces that the chart is a floating bar chart in Excel that layers multiple valuation scenarios. Financial Edge emphasizes that the football field is considered an essential visualization technique in modern corporate valuation practice, particularly within investment banking workflows where multiple valuation perspectives must be synthesized for non-technical decision-makers like boards and CEOs.

---

## Key Themes

### 1. Multi-methodology synthesis is the core purpose
The football field exists specifically because no single valuation methodology is definitive. Each approach (DCF, comps, precedents, LBO) has structural biases and context-dependence. The chart forces honest presentation of the full range and makes methodology divergence visible rather than hiding it.

### 2. Convergence vs. divergence as the interpretive framework
When methodology bars overlap significantly in a narrow band, confidence in that price range is high and the banker has a defensible anchor for negotiations. When bars diverge widely, the analyst must diagnose why - market overvaluation, aggressive DCF assumptions, cyclical deal activity affecting precedents, or leverage environment affecting LBO floors.

### 3. Standard methodology ranking by output level
Precedent transactions typically highest (control premium included) -> DCF (variable, assumption-driven) -> Trading comps (no control premium, market-based) -> LBO (financial buyer floor, return-constrained). This ranking is not absolute and interviewers probe understanding of when it inverts.

### 4. Football field is a fairness opinion cornerstone
Beyond pitch books, the football field is a required exhibit in fairness opinions - the independent legal/financial opinion that a deal price is fair from a financial point of view. This gives it regulatory and fiduciary significance beyond just a communication tool.

### 5. Build mechanics are specific and learnable
The chart is a floating stacked bar in Excel. The construction trick is making the "minimum" series invisible (No Fill), leaving only the spread visible. Professional versions include percentile ranges (25th/median/75th) and a dynamic share price reference line - features absent from most public templates.

### 6. Axis selection signals audience
Public company context: share price axis. Private company or pure M&A context: enterprise value axis. Mixing these for the same company across different contexts is a presentation error.

---

## Interview-Ready Facts

- The football field is the summary valuation page in every sell-side pitch book and is a required exhibit in fairness opinions.
- Standard methodologies included: 52-week range, trading comps, precedent transactions, DCF, LBO (when applicable). Optional: SOTP, liquidation value.
- Typical ranking from highest to lowest implied value: precedent transactions > DCF > trading comps > LBO. Precedent transactions are highest because they include a control premium (typically 20-40% above unaffected share price in practice).
- Convergence of bars signals valuation confidence; divergence signals the need for banker judgment and explicit explanation to the client or board.
- The chart is built as a floating stacked bar chart in Excel. The minimum value bar is formatted with No Fill to become invisible, leaving only the spread (max minus min) visible.
- Professional bank-quality football fields use percentile ranges (25th, median, 75th) from comp sets rather than simple min/max, and include a dynamic share price reference line.
- Used in: sell-side M&A pitch books, buy-side pitch books, board presentations, fairness opinions, equity research reports, capital markets presentations.
- The "sanity check" function: a football field that shows a proposed deal price well above all methodology ranges signals the buyer is overpaying; a price at the bottom of all ranges signals potential value creation.

---

## Common Mistakes

### Analytical mistakes
1. **Cherry-picking ranges** - selecting assumptions that produce a pre-determined result rather than using market-standard inputs. A tell is when all bars converge suspiciously neatly around the deal price.
2. **Excluding outlier transactions** - dropping precedent transactions with very high or low multiples without justification to tighten the range and make the analysis look cleaner than it is.
3. **Unrepresentative peer groups** - using only the highest-multiple public comps to inflate the trading comps bar, or vice versa for a buy-side scenario.
4. **DCF sensitivity not shown** - presenting a single DCF output rather than a range driven by WACC and terminal growth rate sensitivities. A single-point DCF output on a football field is a red flag.
5. **Ignoring the LBO floor** - in any transaction where financial sponsors are likely bidders, excluding LBO analysis leaves the buyer's walk-away price undefined.

### Presentation/formatting mistakes
6. **Vertical orientation** - building bars vertically (easier in Excel) rather than horizontally. Professional football fields are horizontal with methodology labels on the y-axis and dollar values on the x-axis.
7. **Inconsistent axis scale** - using different scales for different methodology bars, which distorts visual comparison. The x-axis must span the full range of all methodologies.
8. **No share price reference line** - omitting the current trading price or proposed deal price as a dynamic reference makes the chart harder to interpret instantly.
9. **Too many methodologies crammed in** - adding every possible approach (15+ bars) turns the chart into an "eye chart" (M&I's term) and loses communicative clarity.
10. **Mixing enterprise value and equity value** - some methodologies (DCF, precedents) naturally output enterprise value while others (52-week range) output equity value per share. Converting all to a consistent basis before building the chart is essential.
11. **High variability without explanation** - bars that are very wide (large min-to-max spread) without a narrative explanation signal sloppy comp selection or wide assumption ranges that haven't been stress-tested.

### Conceptual mistakes (interview context)
12. **Treating the chart as definitive** - the football field is a framework for discussion, not a precise answer. Presenting it as "the company is worth $X" rather than "the analysis supports a range of $X to $Y" misrepresents the tool's purpose.
13. **Not knowing which bar is typically highest/lowest** - a standard interview question. Candidates must know the control premium logic driving precedent transactions to the top.
