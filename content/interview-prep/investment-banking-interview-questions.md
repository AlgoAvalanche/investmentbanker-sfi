---
title: "Investment Banking Interview Questions: The 50 That Actually Get Asked at Bulge Brackets"
description: "The 50 investment banking interview questions that bulge brackets actually ask, with frameworks for technical, behavioral, and fit questions."
primary_keyword: "investment banking interview questions"
secondary_keywords: ["bulge bracket interview", "technical questions", "behavioral questions", "IB interview prep"]
category: "interview-prep"
date: "2026-05-28"
author: "Sterling Prentice"
internal_links: ["/interview-prep/walk-me-through-dcf/", "/interview-prep/why-investment-banking/", "/technical/dcf-valuation-step-by-step/", "/interview-prep/behavioral-questions-star-framework/"]
---

# Investment Banking Interview Questions: The 50 That Actually Get Asked at Bulge Brackets

If you search for investment banking interview questions, you will find approximately ten thousand lists. Most of them are bloated with questions nobody asks, padded with definitions a first-year analyst would find condescending, and written by people who interviewed at regional boutiques in 2009.

This is not that list.

What follows are the 50 questions you will actually face at Goldman, Morgan Stanley, JPMorgan, Bank of America, Citi, Barclays, and their equivalents. They are grouped by category, ordered by frequency, and annotated with exactly what the interviewer is looking for - not what they claim to be looking for.

---

## How Bulge Bracket Interviews Are Actually Structured

Before the questions, a note on format. A standard bulge bracket process runs: first-round phone screen (30 min, mostly fit), then a superday (4-6 back-to-back 30-45 minute interviews mixing technical and behavioral). Some banks - Goldman especially - front-load technical questions in rounds one and two, then use the final rounds for culture fit. Others do the reverse.

According to data compiled by Mergers & Inquisitions, roughly 60% of superday interview time at bulge brackets is spent on technical questions. The remaining 40% is behavioral and fit. That ratio shifts toward technical for quantitative groups (leveraged finance, restructuring) and toward behavioral for coverage groups.

One VP on Wall Street Oasis put it plainly: "We know you prepared the technicals. We're trying to figure out if you'll be tolerable at 2am when the model breaks."

---

## Category 1: The Valuation Trilogy (Questions 1-12)

These are the questions that eliminate candidates fastest. Get them wrong and the interview is functionally over.

**Q1: Walk me through a DCF.**

The most common investment banking interview question in existence. See our detailed breakdown at [/interview-prep/walk-me-through-dcf/](/interview-prep/walk-me-through-dcf/) - the short answer is: project free cash flows, discount at WACC, add terminal value, subtract net debt. The interviewer is listening for whether you can explain it in plain language, not whether you memorize the formula.

**Q2: What are the three valuation methodologies and when do you use each?**

DCF (intrinsic value, useful when cash flows are predictable), comparable company analysis (market-based, fast, requires comparable peers), and precedent transactions (M&A context, includes control premium). Every answer that stops there is incomplete - the real answer includes knowing when each breaks down.

**Q3: How do you calculate WACC?**

Weighted average of cost of equity (using CAPM: risk-free rate + beta x equity risk premium) and after-tax cost of debt. Weights are market-value based, not book value. Common mistakes: using book value weights, forgetting the tax shield on debt, using the wrong beta.

**Q4: How do you calculate terminal value?**

Two methods: Gordon Growth Model (final year FCF x (1 + g) / (WACC - g)) and exit multiple method (apply an EV/EBITDA multiple to final year EBITDA). Aswath Damodaran at NYU Stern has written extensively on why the growth rate in perpetuity should never exceed long-run GDP growth - cite this if the interviewer pushes on assumptions.

**Q5: Walk me through the three financial statements.**

Income statement flows to retained earnings on the balance sheet. Net income plus D&A minus capex minus changes in working capital equals free cash flow on the cash flow statement. The cash flow statement reconciles the opening and closing cash balance on the balance sheet. Know the linkages cold.

**Q6: If depreciation increases by $10, walk me through the impact on all three statements.**

Pre-tax income falls by $10. At a 25% tax rate, net income falls by $7.50. On the cash flow statement, net income is down $7.50 but D&A adds back $10, so operating cash flow is up $2.50. Cash on the balance sheet increases by $2.50. PP&E decreases by $10. The net effect on the balance sheet: assets fall by $7.50 ($10 PP&E minus $2.50 cash increase), retained earnings fall by $7.50. Balanced.

**Q7: What is enterprise value and how is it different from equity value?**

Enterprise value = equity value + debt + preferred stock + minority interest - cash. It represents the value of the entire business available to all capital providers. Equity value is just the residual available to common shareholders. Use EV-based multiples (EV/EBITDA, EV/EBIT) for operating comparisons; use equity-based multiples (P/E) when you care about capital structure effects.

**Q8: Why might a company's EV/EBITDA multiple be higher than a peer's?**

Higher growth expectations, stronger competitive moat, better margins, lower capex requirements, cleaner balance sheet, or the market simply likes the story better. Or it could be that the peer is cheap. Interviewers want to hear that you think about this from multiple angles.

**Q9: How do you value a company with negative EBITDA?**

You can't use EBITDA-based multiples. Options: revenue multiples, EV/Gross Profit, DCF with a long forecast horizon to when the company reaches profitability, or comparable transaction analysis if there are relevant precedents. For pre-revenue companies, you are essentially doing a venture-style analysis - not traditional IB methodology.

**Q10: What is a sensitivity analysis and why does it matter?**

A sensitivity table showing how the output variable (typically implied share price or IRR) changes as you vary two key assumptions simultaneously. In a DCF, the most common version varies WACC and terminal growth rate. Macabacus notes that sensitivity analysis is standard practice in any client-facing model because no single set of assumptions is defensible as "the answer."

**Q11: What is a football field chart?**

A bar chart showing the valuation range implied by each methodology - DCF, comps, precedent transactions, 52-week trading range. Useful for showing where the current offer price sits relative to various value estimates. A staple of fairness opinions and board presentations.

**Q12: When would a DCF give a higher valuation than comparable companies?**

When the company is expected to grow faster than peers, when current EBITDA is depressed relative to normalized levels, or when the discount rate used is lower than the implied rate in comps. The DCF is forward-looking; comps are backward-looking (or at best, trailing).

---

## Category 2: M&A and Deal Mechanics (Questions 13-22)

**Q13: Walk me through an accretion/dilution analysis.**

Determine the pro forma EPS after a deal. If pro forma EPS exceeds the acquirer's standalone EPS, the deal is accretive. If it falls, it's dilutive. Funded with stock: dilutive if target P/E > acquirer P/E. Funded with cash: depends on cost of cash vs. earnings yield of target. Most interviewers want the conceptual explanation before the mechanics.

**Q14: What are synergies?**

Cost synergies (headcount reduction, facility consolidation, procurement savings) and revenue synergies (cross-selling, new markets, pricing power). Revenue synergies are harder to achieve and typically discounted more heavily by acquirers and analysts alike. McKinsey research shows that roughly 60% of acquisitions fail to deliver projected synergies within three years.

**Q15: What is a fairness opinion?**

A board-level document prepared by an investment bank stating that the transaction price is fair from a financial point of view to shareholders. It is not a recommendation to proceed - it is a financial analysis with a legal defensibility function. Fairness opinions are a significant revenue line for advisory banks.

**Q16: What are the differences between a merger and an acquisition?**

In practice, most "mergers" are acquisitions where the acquirer frames it as a merger of equals for optics. True mergers involve combining two companies of similar size with shared governance. Acquisitions involve one party paying a premium to gain control. The legal and accounting treatment differs depending on structure.

**Q17: What is a leveraged buyout?**

A financial sponsor acquires a company using a combination of equity (typically 30-40%) and debt (60-70%). The debt is secured by the target's cash flows and assets. Returns are generated through leverage, operational improvement, and multiple expansion. The basic LBO model tests: can this company service the debt at an acceptable purchase price and deliver a 20%+ IRR?

**Q18: What makes a good LBO candidate?**

Stable, predictable cash flows (to service debt), low existing leverage, strong asset base (collateral), defensible market position, potential for operational improvement, and ideally a motivated seller. Asset-heavy, low-growth, but cash-generative businesses are the classic profile. Think industrial distributors, insurance brokers, and software with high retention.

**Q19: What is purchase price allocation?**

In an acquisition, GAAP requires the purchase price to be allocated to the fair value of acquired assets and liabilities. The excess of purchase price over fair value of net assets is recorded as goodwill. Intangibles (brand, customer relationships, patents) are identified and amortized. PPA affects post-acquisition earnings through D&A of written-up assets.

**Q20: What is a hostile takeover?**

An acquisition pursued without the target board's approval, typically through a tender offer directly to shareholders or a proxy fight to replace the board. Hostile deals are rare in practice - they are expensive, disruptive, and risky. Most hostile approaches eventually become negotiated.

**Q21: What is a poison pill?**

A shareholder rights plan that allows existing shareholders to buy additional shares at a discount if a hostile acquirer exceeds a certain ownership threshold (typically 15-20%). This dilutes the hostile bidder's stake and makes the acquisition prohibitively expensive. Boards adopt them to buy time for negotiating or finding a white knight.

**Q22: What is the difference between a strategic buyer and a financial buyer?**

A strategic buyer is an operating company that acquires for synergies, market share, or capabilities. A financial buyer (private equity) acquires for return on invested capital, using leverage, and typically exits in 3-7 years. Strategic buyers can theoretically pay more (synergies justify higher prices); financial buyers are constrained by debt serviceability and required returns.

---

## Category 3: Accounting and Financial Statement Questions (Questions 23-30)

**Q23: What is working capital and why does it matter?**

Current assets minus current liabilities. Net working capital increases typically represent cash outflows (you're funding receivables and inventory). In a DCF, increases in NWC are a use of cash and reduce free cash flow. Growth companies often consume significant working capital, which impacts their actual cash generation versus reported earnings.

**Q24: What is the difference between EBITDA and free cash flow?**

EBITDA ignores capex, changes in working capital, taxes, and interest. Free cash flow (unlevered) = EBIT x (1 - tax rate) + D&A - capex - change in NWC. Companies with high capex intensity can have strong EBITDA but weak free cash flow. This is why infrastructure, utilities, and capital-intensive industrials trade at lower EV/EBITDA multiples.

**Q25: How do you treat operating leases vs. capital leases?**

Post-ASC 842 (effective 2019 for public companies), most leases are capitalized on the balance sheet as right-of-use assets and lease liabilities. The distinction between operating and finance leases still exists, but the off-balance-sheet treatment of operating leases is largely gone. For analysis purposes, you may need to adjust historical figures for comparability.

**Q26: What is deferred revenue and why does it matter?**

Revenue collected but not yet earned - a liability. Software companies often have significant deferred revenue from annual subscriptions paid upfront. In an acquisition, deferred revenue is typically written down in purchase accounting, reducing post-acquisition reported revenue. Analysts adjust for this when modeling SaaS acquisitions.

**Q27: What is goodwill impairment?**

When the carrying value of a reporting unit exceeds its fair value, goodwill must be written down. This is a non-cash charge that hits the income statement. It signals that an acquisition did not perform as expected. Notable examples: AOL Time Warner, HP's Autonomy acquisition. Impairment does not affect cash flow but destroys equity on the balance sheet.

**Q28: What is the difference between a stock deal and an asset deal?**

In a stock deal, the buyer acquires the entire legal entity including all liabilities (known and unknown). In an asset deal, the buyer selects specific assets and assumes only specified liabilities. Asset deals are preferred by buyers (clean liability profile, step-up in tax basis); stock deals are preferred by sellers (capital gains treatment, simpler execution). Most large M&A transactions are stock deals.

**Q29: Walk me through how a stock buyback affects the three statements.**

Cash decreases on the balance sheet. Treasury stock increases (equity decreases). On the income statement, fewer shares outstanding increases EPS mechanically. On the cash flow statement, it appears as a financing outflow. No direct P&L impact.

**Q30: What is the difference between LIFO and FIFO?**

In rising price environments, LIFO results in higher COGS (last purchased, highest cost items sold first), lower inventory, lower taxable income. FIFO results in lower COGS, higher inventory, higher taxable income. LIFO is not permitted under IFRS. When comparing companies across accounting methods, you need to adjust the LIFO reserve.

---

## Category 4: Behavioral and Fit Questions (Questions 31-42)

For detailed frameworks on these, see our guide at [/interview-prep/behavioral-questions-star-framework/](/interview-prep/behavioral-questions-star-framework/).

**Q31: Why investment banking?**

The most important behavioral question. See our dedicated breakdown at [/interview-prep/why-investment-banking/](/interview-prep/why-investment-banking/). The short version: be specific, be honest, and do not say "I want to learn finance." Everyone says that.

**Q32: Tell me about yourself.**

Not an invitation to recite your resume. It is a 90-second pitch connecting your background to why you belong in this seat. Start with where you are now, work backward to a formative experience, then project forward to why this role is the logical next step.

**Q33: Why this bank specifically?**

"Culture" and "deal flow" are non-answers. Cite a specific transaction the bank advised on, a group within the bank known for a sector you care about, or a conversation with someone in the firm that revealed something specific. Interviewers can tell in five seconds whether you've done the work.

**Q34: Tell me about a time you worked under pressure.**

STAR framework: Situation, Task, Action, Result. The situation should be genuinely difficult. The action should show judgment, not just effort. The result should be quantifiable if possible.

**Q35: Tell me about a time you had a conflict with a teammate.**

They are testing for maturity and self-awareness. The conflict should be real, your role in it should be acknowledged honestly, and the resolution should show that you can disagree productively without leaving bodies on the floor.

**Q36: What is your greatest weakness?**

The "my weakness is I work too hard" answer is the fastest way to lose credibility with an experienced interviewer. Name a real weakness, explain what you have done to address it, and demonstrate self-awareness without being so confessional that you raise red flags.

**Q37: Where do you see yourself in five years?**

They are not hiring you expecting you to be there in five years. Answer honestly: two years as an analyst, then assess whether to stay for associate promotion, business school, or go to the buyside. Show ambition without sounding like you are already planning your exit.

**Q38: What has been your most significant achievement?**

Pick something with a clear before/after that you drove. Academic achievements are fine for undergraduates; professional or entrepreneurial achievements are more compelling for MBA candidates.

**Q39: What do you do outside of work?**

They want to know you are a human being. Be honest. Interviewers can tell when someone invented a passion for hiking for the interview. One memorable, specific interest beats three generic ones.

**Q40: Do you have any questions for me?**

Always have three prepared. Best categories: something about their career path, something about the group's deal flow or focus, something about what they wish they had known coming in. Never ask about compensation, hours, or vacation.

**Q41: What is your favorite stock right now and why?**

Pick a company you actually know well. Walk through the bull thesis: industry dynamics, competitive position, valuation relative to peers. Have a counter-argument ready - they will push back to see how you handle disagreement.

**Q42: What makes a good investment banker?**

Judgment, attention to detail, ability to synthesize complexity under time pressure, and client trust. Add the honest one: the willingness to do whatever it takes to get the deal done, even when the work is unglamorous.

---

## Category 5: Markets and Current Events (Questions 43-50)

**Q43: What is happening in the markets right now?**

Know the current level of major indices, the Fed funds rate, recent significant M&A transactions, and at least two macro themes. Read the WSJ and FT daily starting six weeks before your interview.

**Q44: How does interest rate policy affect M&A activity?**

Higher rates increase the cost of debt financing, which compresses LBO returns and reduces the number of viable deals. Higher rates also increase WACC, which reduces DCF valuations. When rates rise sharply, deal volume typically falls with a 6-12 month lag.

**Q45: What is the yield curve and why does it matter to bankers?**

A plot of yields across maturities for comparable debt instruments. An inverted yield curve (short rates above long rates) historically precedes recessions. For bankers, it affects the cost and structure of financing: clients with near-term debt maturities face real rollover risk in an inverted environment.

**Q46: What is a credit rating and why does it matter in M&A?**

An assessment of a borrower's creditworthiness by agencies (Moody's, S&P, Fitch). Investment grade (BBB-/Baa3 and above) vs. high yield (below) is a critical threshold. Acquirers that risk falling below investment grade through a leveraged acquisition face significantly higher financing costs and may lose institutional investors who are restricted to IG holdings.

**Q47: What is a SPAC?**

A Special Purpose Acquisition Company - a blank-check company that raises capital through an IPO with the intent to acquire a private company within two years. The target company effectively goes public by merging with the SPAC. Peak SPAC activity was 2020-2021; the market has contracted significantly since due to poor post-merger performance of many SPAC targets.

**Q48: Walk me through the IPO process.**

Hire bankers, conduct due diligence, prepare the S-1 registration statement, file with the SEC, conduct a roadshow (management presents to institutional investors), build the book of orders, price the deal, and begin trading. The bankers earn a gross spread (typically 3.5-7% of deal size).

**Q49: What is a fairness opinion and when is it required?**

Boards obtain fairness opinions from investment banks to protect themselves against shareholder lawsuits claiming they sold too cheaply or paid too much. Legally required in certain situations (go-shop processes, conflicts of interest). The bank opines that the transaction price is within a range of fairness.

**Q50: How do you think about valuing a startup with no revenue?**

You are valuing optionality and potential rather than current cash flows. Venture-style approaches include: comparable company multiples on projected revenue 3-5 years out (discounted back), recent transaction multiples for similar-stage companies, and a narrative-driven analysis of total addressable market and path to monetization. The honest answer: there is more art than science here.

---

## What You Should Do Next

1. **Drill the accounting questions cold.** Questions 23-30 are where candidates most often stumble in first rounds. The depreciation walk-through (Q6) in particular should be instant and automatic. Use BIWS or Macabacus practice sets.

2. **Build a master answer document for the behavioral questions.** Write out actual answers to Q31-42 using real stories from your experience. STAR format for each. Practice saying them aloud until they sound natural, not rehearsed.

3. **Read the technical foundations.** For DCF specifically, go through [/technical/dcf-valuation-step-by-step/](/technical/dcf-valuation-step-by-step/) and make sure you can build one from scratch in Excel. You will not build models in interviews, but being able to visualize the structure makes verbal answers far sharper.

4. **Do mock interviews with brutally honest feedback.** Wall Street Oasis and Mergers & Inquisitions both have resources here. Better: find someone who has been through the process recently and pay them in coffee or future favors to grill you for an hour.

5. **Stay current on markets.** Set up a daily reading habit: WSJ Deal Journal, FT Lex, and at minimum the headline economic releases. The markets questions (43-50) are where well-prepared candidates differentiate themselves from candidates who only drilled accounting.
