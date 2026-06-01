# Research Notes: Sum of the Parts (SOTP) Valuation

**Slug:** sum-of-the-parts-valuation
**Category:** Technical
**Date Researched:** 2026-06-01

---

## Sources Consulted

### 1. Wall Street Prep - Sum of the Parts (SOTP) | Break-Up Valuation Analysis
**URL:** https://www.wallstreetprep.com/knowledge/sum-of-the-parts-sotp/

Wall Street Prep defines SOTP as a methodology that values each underlying piece of a company separately and then adds them together, rather than valuing the entire company in aggregate. The guide presents a clean four-step process: identify segments, value each independently using appropriate multiples or DCF, sum to derive total enterprise value, then subtract net debt to reach equity value. A worked three-segment example is provided showing how segment EBITDA multiplied by segment-specific EV/EBITDA ranges produces a valuation band - Segment A ($100M EBITDA, 6-8x) = $600-800M, Segment B ($20M EBITDA, 14-20x) = $280-400M, Segment C ($10M EBITDA, 18-24x) = $180-240M, totaling $1.06B-$1.44B enterprise value before netting $200M debt. The guide highlights that SOTP is most powerful in restructuring and distressed scenarios (identifying segments for sale), spin-off and divestiture analysis (answering the "whole vs. parts" question), and biotech (where each pipeline asset must be valued with its own probability-of-success). Key limitations noted: insufficient public segment-level data, broad assumption reliance due to limited disclosures, and the impossibility of isolating cross-divisional synergies.

**Key formula:**
- Enterprise Value by Segment = EV/EBITDA Multiple x Segment EBITDA
- Total Enterprise Value = Sum of All Segment Values
- Equity Value = Total Enterprise Value - Net Debt
- Per-Share Value = Equity Value / Shares Outstanding

---

### 2. Macabacus - Sum-of-Parts Analysis: Segment Valuation Guide
**URLs:**
- https://macabacus.com/valuation/sotp
- https://macabacus.com/valuation/sum-of-the-parts

Macabacus presents the most operationally detailed treatment of SOTP with a seven-step methodology emphasizing data sourcing, financial spreading, and critical adjustments. The guide stresses that segment financials must be spread from 10-K/10-Q filings and investor presentations, with LTM and projected data organized so that segment totals reconcile precisely to consolidated figures - a step that catches data errors early. Corporate overhead allocation is highlighted as a major judgment call: options include allocation as a percentage of segment revenues, by EBIT proportions, by industry benchmarks, or treatment as a standalone negative-value line item; the guide states that allocating overhead is preferable when sufficient data exists. D&A not reported by segment should be distributed using percentage of assets, revenues, or EBIT. Minority interests and segment-specific liabilities must be properly attributed to specific divisions rather than deducted centrally. The guide recommends sanity-checking SOTP output against the company's 52-week trading range, comparable company analysis, and sell-side consensus. Real-world examples cited include Disney (parks, networks, film, retail), United Technologies (HVAC, elevators, aerospace), and Tyco.

**Critical adjustments checklist:**
- Allocate or separately value corporate overhead
- Distribute unallocated D&A using asset/revenue/EBIT proportions
- Attribute minority interests to correct segments
- Assign segment-specific liabilities properly
- Adjust for non-operating assets and net debt centrally

---

### 3. Corporate Finance Institute (CFI) - Sum of the Parts (SOTP) Valuation
**URL:** https://corporatefinanceinstitute.com/resources/valuation/sum-of-the-parts-sotp-valuation/

CFI provides a clean definitional and conceptual treatment of SOTP, emphasizing its use for conglomerate structures, multi-division companies, holding companies with portfolio investments, and companies with significant unlisted subsidiaries. The guide articulates the conglomerate discount mechanism clearly: the discount arises from inefficient capital allocation across disparate businesses, complexity creating operational drag, and market perception that the sum of the parts exceeds the whole. CFI identifies five methodology steps: segment identification, individual valuation (DCF, trading multiples, precedent transactions, or asset-based approaches), aggregation, adjustments for corporate overhead and tax implications, and optional application of a conglomerate discount. The guide lists six common mistakes - inconsistent assumptions across segments, ignoring synergies or operational inefficiencies, applying improper discount rates, double-counting shared costs, neglecting tax implications, and using outdated comparables - which double as strong interview talking points. CFI notes the method is particularly valuable for M&A advisory where direct comparable valuation is difficult and for restructuring where segment-level financial modeling drives the decision.

**Conglomerate discount root causes (CFI):**
- Inefficient capital allocation across disparate businesses
- Complexity creating operational drag
- Market perception: sum of parts exceeds whole
- Management distraction across multiple business lines

---

### 4. Breaking Into Wall Street - Sum of the Parts Valuation: Tutorial and Excel Example
**URL:** https://breakingintowallstreet.com/kb/valuation/sum-of-the-parts-valuation/

Breaking Into Wall Street provides the most interview-ready and technically precise guide, including a fully worked three-segment conglomerate example with specific numbers. The example (Aerospace: $8B revenue, $1.6B EBITDA, 15x multiple = $24B EV; Chemicals: $5B revenue, $0.8B EBITDA, 8x multiple = $6.4B EV; Software: $2B revenue, $0.5B EBITDA, 20x multiple = $10B EV) walks through segment aggregation to $40.4B, then deducts corporate G&A capitalized at $3B (10x $300M), net debt of $8B, and separation dis-synergies of $500M, then adds equity investments of $1.5B to reach $30.4B SOTP equity value. The guide provides model Q&A for three common interview questions including a full step-by-step walkthrough answer and a worked numerical example where different segments use different metric bases (EBITDA for industrial, net income for financial services). Tax considerations are treated seriously: a Section 355 tax-free spin-off preserves full SOTP value while a taxable sale reduces it by capital gains friction (example: $5B value with $1B basis generates $840M tax cost at 21%). The guide notes that 2023-2026 represents the most active conglomerate breakup era since the 1990s, citing GE, J&J/Kenvue, Kellogg, and Honeywell.

**Worked interview Q&A - Walk through SOTP process:**
1. Separate segments using financial reporting
2. Value each independently with industry-appropriate methodology and peer comps
3. Sum segment enterprise values
4. Add non-operating assets
5. Subtract unallocated corporate costs (capitalized at appropriate multiple)
6. Subtract net debt
7. Compare SOTP to current market cap to quantify discount

**Tax-free spin-off (Section 355) requirements:**
- 5+ year operating history for both entities
- Both entities must be active post-separation
- Legitimate business purpose required
- No tax owed if requirements met - preserves full SOTP value

---

### 5. IB Interview Questions - Sum-of-the-Parts Valuation Methodology
**URL:** https://ibinterviewquestions.com/guides/valuation-investment-banking/sum-of-the-parts-valuation-methodology

This guide focuses on the practitioner's application of SOTP in investment banking advisory contexts. The methodology section emphasizes that pure-play comparable companies must be selected within each segment's specific industry - not broad conglomerate peers - which is the key distinction from standard comps analysis. The guide specifically maps valuation multiples to segment types: EV/EBITDA for industrial divisions, EV/Revenue for software/tech segments, P/TBV for financial services subsidiaries, and risk-adjusted NPV (rNPV) for pharmaceutical pipelines. Transfer pricing is flagged as a complication: inter-segment transactions must be re-priced at market rates because internal transfer prices distort reported segment profitability. Standalone margin adjustment is another critical issue - reported segment margins under parent allocation may not reflect true standalone profitability because shared service costs are often allocated non-economically. The pure-play problem is discussed in depth: when a segment has no true pure-play comparable (proprietary technology, vertically integrated operations), analysts must use broader peers and apply judgment adjustments for the structural differences. The guide notes that public segment reporting provides revenue and operating income but rarely segment-level CapEx, D&A, or working capital detail, forcing analysts to estimate using peer company ratios.

**Segment-to-multiple mapping:**
| Segment Type | Preferred Metric | Typical Multiple Range |
|---|---|---|
| Industrial / Manufacturing | EV/EBITDA | 6-12x |
| Technology / Software (growth) | EV/Revenue | 3-10x |
| Technology / Software (mature) | EV/EBITDA | 15-25x |
| Financial Services | P/TBV or P/E | 1-3x TBV, 8-15x P/E |
| Pharmaceutical pipeline | rNPV | n/a (probability-weighted) |
| Real estate / Asset-heavy | EV/EBITDA or NAV | varies |

---

## Key Themes

### 1. Why SOTP Exists
Standard valuation (single comps set, single DCF) fails for conglomerates because a unified multiple blends together divisions with fundamentally different risk profiles, growth trajectories, and capital intensities. A company with a mature industrial segment (8x EBITDA) and a high-growth software segment (20x EBITDA) will trade at some blended discount to the weighted average of the two, not the higher multiple. SOTP makes the individual economics explicit.

### 2. The Conglomerate Discount
The conglomerate discount is the percentage gap between a company's SOTP-implied equity value and its actual market capitalization. Historically documented at 10-15% on average; can reach 20-30% for poorly managed or highly diverse conglomerates. Root causes: capital allocation opacity, investor base mismatch (sector-focused funds avoid conglomerates), management complexity, and excess corporate overhead. The discount is the primary analytical output that justifies activist campaigns and strategic separations.

### 3. The Four Core Use Cases in IB
- **Activist / hostile takeover defense:** Demonstrate undervaluation by showing SOTP equity value per share exceeds current stock price or offer price
- **Strategic advisory (spin-offs, carve-outs, split-offs):** Quantify value unlock from separation vs. maintaining current structure
- **M&A acquisition analysis:** Identify which segments are core vs. non-core when evaluating diversified targets; non-core segments can be divested post-close to fund the deal
- **Fairness opinions:** Complex multi-segment transactions require segment-level analysis to support board fairness determinations

### 4. Corporate Overhead Is a Judgment Call
Unallocated corporate costs (HQ rent, CEO/CFO compensation, shared IT, legal, finance) are a real cost that standalone entities would have to bear themselves. In SOTP, overhead must either be allocated proportionally to segments (reducing their standalone EBITDA) or treated as a negative value line item - typically capitalized as a multiple of annual overhead cost. The choice materially affects output. Over-allocating overhead to strong segments understates their value; ignoring it overstates total SOTP value.

### 5. Section 355 Tax-Free Spin-Off Structure
When a separation is structured as a tax-free spin-off (IRS Section 355), the parent distributes subsidiary shares to existing shareholders with no capital gains tax. This is the value-maximizing structure because it captures full SOTP value with no tax leakage. A taxable divestiture (asset or stock sale) generates capital gains tax that can reduce net proceeds by hundreds of millions on a large transaction. Bankers must flag this distinction in SOTP presentations.

### 6. Dis-Synergies Are Real Costs
Separation creates new standalone costs that did not exist under the conglomerate: separate IT systems, legal entities, finance teams, compliance functions, public company costs. These dis-synergies typically represent 2-5% of separated entity EBITDA and must be deducted from SOTP value to avoid overstating the benefit of separation.

### 7. Data Limitations Are Inherent
Public 10-K segment reporting provides revenue and operating income; CapEx, D&A, and working capital by segment are often unavailable. Analysts must estimate using peer company ratios. This is why SOTP output comes in ranges, not point estimates, and why sanity checks against trading ranges and consensus are essential.

---

## Interview-Ready Facts

- SOTP is also called "break-up analysis" or "sum-of-parts analysis"
- The conglomerate discount averages 10-15% historically; has been documented as high as 25-30%
- GE's three-way split into GE Aerospace, GE HealthCare, and GE Vernova (2023-2024) is the canonical modern example; GE Vernova stock quadrupled post-separation
- Honeywell announced a three-way split in February 2025 following an Elliott Management activist campaign using SOTP analysis
- Johnson & Johnson spun off Kenvue (consumer health) in 2023 - SOTP justified the separation
- Berkshire Hathaway is the classic SOTP candidate: insurance, railroads, utilities, manufacturing, retail all in one entity with vastly different multiples
- Financial services segments must use equity value multiples (P/E, P/TBV), not enterprise value multiples, because debt is part of the product for banks and insurers
- For pharma pipelines, risk-adjusted NPV (rNPV) is used: project peak sales, assign probability of success at each clinical phase, discount back
- A Section 355 tax-free spin-off requires: 5+ years of operating history, both entities must conduct active business post-separation, legitimate business purpose
- Standard SOTP equity value bridge: segment EVs - unallocated corporate overhead (capitalized) - net debt + non-operating assets - dis-synergies = SOTP equity value
- If market cap is $5B and SOTP equity value is $6B, the conglomerate discount is 16.7%
- Activist investors use SOTP as the primary analytical weapon: they build the model, show the discount, and present separation as the path to unlocking shareholder value
- The 2020-2026 period has been the most active conglomerate breakup era since the 1990s conglomerate unwind

---

## Common Mistakes

### 1. Using a Single Multiple for All Segments
Applying one blended EV/EBITDA multiple to a company with industrial, software, and financial services divisions is the cardinal error SOTP is designed to fix. Financial services subsidiaries require equity value (not enterprise value) multiples because debt is operational capital, not financing. Software divisions command higher multiples than industrial divisions. Using one multiple destroys the analytical logic of the entire exercise.

### 2. Ignoring Corporate Overhead
Analysts who forget to deduct unallocated corporate overhead overstate SOTP value. Every separated entity will need its own CEO, CFO, board, audit function, and public company infrastructure. If $200M of corporate costs is not allocated to any segment, it must be capitalized at an appropriate multiple (often 8-12x) and deducted.

### 3. Forgetting Dis-Synergies
The flip side of synergies in M&A. Separations destroy shared cost structures: IT systems get duplicated, transfer pricing agreements become arm's-length contracts, shared service centers must be staffed twice. These costs are real and reduce the net value of separation. Standard estimate: 2-5% of separated entity EBITDA.

### 4. Not Adjusting Segment Margins for Standalone Reality
Reported segment operating margins reflect the parent's cost allocation methodology, which may be arbitrary. A segment that is over-allocated overhead appears less profitable than it would be as a standalone; an under-allocated segment appears more profitable. Analysts should cross-check reported margins against pure-play comparable margins to identify distortions.

### 5. Double-Counting Shared Assets or Costs
Inter-segment transactions create revenues and costs on both sides of the transaction. If an internal supply relationship is not removed from both segments, the asset or cost appears twice. Similarly, shared PP&E or IP licensed internally must not be counted in multiple segment valuations.

### 6. Ignoring Tax Friction on Separation
Presenting SOTP as the realizable value without noting whether a Section 355 tax-free structure is available misrepresents the economics. A taxable sale can consume 15-25% of the theoretical SOTP value in capital gains taxes depending on the tax basis. This is a deal-structuring issue that bankers must address.

### 7. Using the Parent's Reporting Segments Uncritically
Companies define segments for management reporting purposes, not valuation purposes. Two economically distinct businesses may be combined into one reported segment for simplicity, or one business may be split across two segments. Analysts should evaluate whether the disclosed segments reflect true economic distinctions before accepting the reporting structure as the basis for SOTP.

### 8. Selecting Wrong Comparable Peers
SOTP comps must be pure-play companies operating only in the segment's industry - not other conglomerates. Using another diversified company as a comp imports that company's conglomerate discount into the analysis, understating the true standalone multiple. The entire point is to identify what a pure-play acquirer would pay for each division.

### 9. Presenting a Point Estimate Instead of a Range
SOTP involves multiple judgment calls at each step. Presenting a single output implies false precision. The output should always be a range reflecting low/mid/high multiple assumptions, with a football field chart showing the range against the current trading price and any offer price.

### 10. Ignoring Minority Interests and Non-Controlling Stakes
If a segment is 80% owned, the 20% minority interest must be subtracted from that segment's SOTP value contribution. Conversely, equity method investments and non-operating assets (excess cash, pension assets, real estate held for sale) must be added to segment enterprise values to reach total equity value.
