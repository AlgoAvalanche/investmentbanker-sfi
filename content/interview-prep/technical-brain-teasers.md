---
title: "Technical Brain Teasers: The 20 Most Common and Why They're Asked"
description: "The 20 most common technical brain teasers in IB interviews, with full answer frameworks and the reasoning behind why banks use them."
primary_keyword: "technical brain teasers"
secondary_keywords: ["IB brain teasers", "market sizing", "logic puzzles", "quant interview", "mental math"]
category: "interview-prep"
date: "2026-05-25"
author: "Sterling Prentice"
internal_links: ["/interview-prep/investment-banking-interview-questions/", "/interview-prep/stress-interview-what-mds-test/", "/interview-prep/superday-what-to-expect/"]
---

# Technical Brain Teasers: The 20 Most Common and Why They're Asked

Brain teasers in investment banking interviews occupy a strange position. They are simultaneously overrated as a filtering mechanism and underrated as a signal of how a candidate thinks under pressure.

They are overrated because whether you can figure out how many piano tuners are in Chicago has essentially no bearing on whether you can build a credible LBO model or manage a client call at 11pm. Plenty of excellent bankers freeze on cold logic puzzles. Plenty of candidates who ace brain teasers turn out to be mediocre analysts. Mergers and Inquisitions, the practitioner-oriented interview guide, is blunt on this point: brain teasers belong in the "what NOT to worry about" category for standard IB interview prep, and candidates are better served by networking, Excel modeling, and technical fundamentals than by solving puzzles about golf balls in a 747 [(1)](https://mergersandinquisitions.com/investment-banking-math/).

They are underrated because they reveal something real: whether you structure your thinking, whether you stay composed when you do not immediately know the answer, and whether you can communicate your reasoning process to another person in real time. Those skills do matter in banking.

The right way to approach technical brain teasers is not to memorize the answers. It is to understand the underlying methodology - estimation, decomposition, and structured reasoning - and apply it consistently regardless of the specific question. This article covers the 20 most common types and exactly what interviewers are watching for.

For the broader interview question landscape, see [/interview-prep/investment-banking-interview-questions/](/interview-prep/investment-banking-interview-questions/).

---

## Why Banks Ask Brain Teasers

Before the questions: understanding the purpose changes how you answer them.

**Stress calibration.** Brain teasers are often used as proxies for the stress interview. The question is designed to be difficult enough that a significant percentage of candidates will not know the answer immediately. Interviewers watch what happens next. Does the candidate freeze? Do they say "I don't know" and stop? Or do they say "I'm not sure I can get to the exact answer, but let me work through this" - and then actually work through it? The latter is what they are looking for. Circle Square, a recruitment firm specializing in IB placements, states explicitly that the goal is to evaluate "composure and structured thinking, not correct answers," because IB involves "complex financial models, intricate transactions, and solving challenging issues that can come up in the eleventh hour" [(2)](https://www.circlesquare.co.uk/blog/blog/brain-teasers-in-investment-banking-interviews). The brain teaser simulates that pressure deliberately.

**Quantitative reasoning.** Banking requires the ability to estimate quickly. You will regularly need to sanity-check numbers in a model, assess whether a revenue figure is in the right ballpark, or make a quick back-of-envelope calculation in front of a client. Brain teasers test whether you can do that without a spreadsheet open.

**Communication under uncertainty.** One of the most practical skills in banking is the ability to say "here's my logic" rather than just "here's my answer." Brain teasers explicitly reward the process, not just the conclusion. If you get to the wrong number through rigorous logic, you will often do better than a candidate who guesses the right number but cannot explain how they got there. As the practitioner guide at Cookd.ai documents: "The process matters more than the answer. Interviewers evaluate how you break down problems and communicate your logic." [(3)](https://www.cookd.ai/blog/investment-banking-brain-teasers)

**Role-specific frequency.** It is worth calibrating expectations before you over-index on this category of preparation. Wall Street Oasis forum data confirms that brain teasers appear more frequently in sales and trading, hedge fund, and private equity interviews than in core M&A and coverage banking roles [(4)](https://www.wallstreetoasis.com/resources/interviews/investment-banking-interview-questions-answers). Cookd.ai research puts brain teaser prevalence at roughly 11% of business-sense questions at Superdays, concentrated at Goldman Sachs, J.P. Morgan, and Morgan Stanley. For a standard IB analyst role, you are far more likely to be asked about the three financial statements, DCF mechanics, and LBO logic than about the minimum number of socks you need to pull from a dark drawer to guarantee a matching pair.

That said: when they do appear, how you handle them matters. Mergers and Inquisitions notes that mental math and estimation do matter more in S&T and quantitative roles - and the skills transfer. A candidate who cannot reason numerically in public, under observation, sends a weak signal regardless of role.

---

## Category 1: Market Sizing Questions (The Most Common Type)

Market sizing questions test your ability to decompose a large problem into estimable components and combine them into a reasonable answer. The format is almost always: "How many [X] are there in [Y]?" or "What is the market size of [industry]?"

The framework for every market sizing question, as documented by MBA Crystal Ball's practitioner guide on IB and consulting brain teasers [(5)](https://www.mbacrystalball.com/blog/2020/01/06/brain-teasers-interviews/):

1. Define the scope (which country, what counts as X, what time horizon)
2. Identify the population or denominator
3. Apply a reasonable frequency or incidence rate
4. Do the math and state the key assumption explicitly
5. Sanity check the result against intuition

MBA Crystal Ball emphasizes asking clarifying questions before diving in - for instance, when asked how many golf balls fit in a Boeing 747, asking whether passengers are aboard is entirely appropriate and signals structured thinking. The interviewer may not even know the correct answer and is prioritizing your approach.

**Q1: How many gas stations are there in the United States?**

Population: 330 million people. Average household size: 2.5, giving approximately 130 million households. Car ownership rate: roughly one car per household (a simplifying assumption worth stating). So approximately 130 million cars. Average car fills up once per week, consuming roughly 10 gallons. Annual fuel demand: 130 million x 52 x 10 = approximately 67.6 billion gallons per year. A typical gas station pumps roughly 1,000-1,500 gallons per day, so around 500,000 gallons per year. 67.6 billion / 500,000 = approximately 135,000 stations. The actual number is around 145,000, so this approach gets you to the right order of magnitude.

State your approach, show your math, and name your most sensitive assumption (gallons per day per station drives the result here).

**Q2: How many taxi cabs are there in New York City?**

NYC population: approximately 8 million. Fraction taking a cab on any given day versus subway or walking: maybe 5-10%, skewed toward Manhattan. Call it 500,000 cab trips per day. Average cab does roughly 20-25 trips per day (accounting for waiting, traffic, time to pick up). 500,000 / 22 = approximately 22,000 cabs. The actual licensed yellow cab count has run around 13,000-14,000, with rideshare inflating total supply significantly. State the gap and the assumption driving it.

**Q3: How many golf balls fit in a school bus?**

School bus interior: roughly 8 feet wide, 6 feet high, 20 feet long = 960 cubic feet. Subtract seats and frame: call it 750 cubic feet of usable space. A golf ball is approximately 1.68 inches in diameter. Volume of a golf ball: (4/3) x pi x r^3 = approximately 0.0026 cubic feet. Random sphere packing fills about 64% of available space. Usable volume for golf balls: 750 x 0.64 = 480 cubic feet. 480 / 0.0026 = approximately 185,000 golf balls. Acceptable range is anywhere from 100,000 to 500,000 with clearly stated assumptions.

**Q4: What is the market size for wedding photography in the US?**

Approximately 2 million weddings per year in the US. Fraction hiring a professional photographer: roughly 80-85%, so 1.6-1.7 million. Average spend on photography: roughly $2,500-$4,000 at the median - use $3,000. 1.65 million x $3,000 = $4.95 billion. Round to $5 billion. This aligns with published market research estimates in the $3-5 billion range.

**Q5: How many smartphones are sold in the US per year?**

US population: 330 million. Adults and teenagers using smartphones: roughly 250 million. Average replacement cycle: every 2.5-3 years. Annual purchases: 250 million / 2.75 = approximately 90 million. Add new adopters (a small increment at market maturity). Round to 90-100 million units. Actual figures including all device types have run in the 175-190 million range, so the pure "adult replacement" estimate is conservative - state that and the result is defensible.

---

## Category 2: Mental Math and Estimation (Quick Calculation Tests)

These are shorter, faster, and test raw numerical comfort. Banking involves numbers constantly. Interviewers want to see that arithmetic does not slow you down or require a calculator.

The research notes from Wall Street Oasis practitioner forums confirm that real questions from live interviews have included "What is 3 to the power of 12?" and "What is 5 to the power of 5?" - quick powers and multiples that test whether you have basic numerical building blocks memorized [(4)](https://www.wallstreetoasis.com/forum/investment-banking/brain-teasers-examples).

**Q6: What is 17% of 300?**

Break it into pieces: 10% of 300 = 30. 7% of 300 = 21. Total: 51. Always decompose percentages into multiples of 10% and 5% when you cannot do the multiplication instantly.

**Q7: A company has $500M in revenue growing at 8% per year. What is the revenue in five years?**

Use the rule of 72 to estimate doubling time: 72 / 8 = 9 years to double. Five years is roughly 55% of the way to doubling. Revenue is approximately 1.47 times $500M = approximately $735M. The actual answer (500 x 1.08^5) = $734M. Getting to $735M mentally is excellent.

**Q8: What is the square root of 2,500?**

50. Questions like this test whether you recognize perfect squares. Know your squares up to 20 (400), and a few useful ones: sqrt(2500) = 50, sqrt(4900) = 70, sqrt(14400) = 120.

**Q9: A stock goes up 50% and then falls 50%. What is the net change?**

Down 25%. Start at 100. Up 50%: 150. Down 50%: 75. This is a trap question testing whether you know the asymmetry of percentage changes. Getting this right immediately signals numerical fluency.

**Q10: Approximately what is 1/7 as a decimal?**

0.143, or close to 14.3%. Memorize basic fractions: 1/6 = 0.167, 1/7 = 0.143, 1/8 = 0.125, 1/9 = 0.111. These appear constantly in quick back-of-envelope calculations.

A useful shortcut documented in the MBA Crystal Ball guide: to multiply by 999, reframe as (1000 x N) - N. So 999 x 53 = 53,000 - 53 = 52,947 [(5)](https://www.mbacrystalball.com/blog/2020/01/06/brain-teasers-interviews/). Similarly, to multiply by 15: 15 x N = 10N + (10N / 2). These are finite, learnable, and worth drilling before any interview where quantitative reasoning is expected.

---

## Category 3: Logic and Probability Puzzles

These tend to appear more in quantitative groups. They require structured logical thinking rather than estimation. The most dangerous category is probability puzzles, where the intuitive answer is frequently wrong.

**Q11: You have 12 balls, one of which is either heavier or lighter than the others. You have a balance scale and three weighings. How do you find the odd ball?**

This is a classic information theory problem. Three weighings with a balance scale give 3^3 = 27 possible outcomes, sufficient to identify 1 of 24 possible outcomes (12 balls x 2 possible deviations). The optimal strategy: weigh 4 vs 4 with 4 aside. If balanced, the odd ball is in the remaining 4. Weigh 2 vs 2 from that group. Then 1 vs 1 from the heavier pair. If the first weighing is unbalanced, you have more information to work with - the odd ball is in the heavier group of 4, and you know the direction of deviation.

The interviewer usually does not expect the full derivation. They want to see you recognize the structure, work through the first step, and reason forward.

**Q12: You flip a fair coin and get heads 10 times in a row. What is the probability the 11th flip is heads?**

50%. The coin has no memory. This tests whether you know the difference between correct probability reasoning and the gambler's fallacy. Say 50% confidently and explain why - previous outcomes do not affect independent events. Hedging with "tails is due" is the wrong answer.

**Q13: Three light switches control three light bulbs in a room you cannot see. You can flip switches as much as you want, then enter the room once. How do you determine which switch controls which bulb?**

Turn switch 1 on for several minutes, then turn it off. Turn switch 2 on. Enter the room. The bulb that is on = switch 2. The bulb that is off but warm = switch 1. The bulb that is off and cold = switch 3. The key insight uses a physical property - heat retention - beyond the binary on/off state. Circle Square identifies this as one of the five puzzle types most commonly seen in IB interviews [(2)](https://www.circlesquare.co.uk/blog/blog/navigating-brain-teasers-a-guide-to-success-in-investment-banking-interviews). If the interviewer objects about LED bulbs, treat that as an invitation to discuss your assumption - that is also a good signal.

**Q14: You have a 3-gallon jug and a 5-gallon jug. How do you measure exactly 4 gallons?**

Fill the 5-gallon jug. Pour from the 5 into the 3, filling the 3. You now have 2 gallons in the 5. Empty the 3. Pour the 2 gallons into the 3. Fill the 5 again. Pour from the 5 into the 3 (which already has 2 gallons, so it takes 1 more gallon). You now have 4 gallons in the 5. Done in four steps.

**Q15: What is the probability that two people in a room of 23 share a birthday?**

Greater than 50% - this is the birthday paradox. The intuitive answer is "very low" because 23 out of 365 days seems small. The correct calculation considers the probability that no two people share a birthday, which falls below 50% faster than intuition suggests because each new person is compared to all previous people, not just one. The exact probability is approximately 50.7%. You do not need to derive this precisely. Being able to explain why the answer is counterintuitively high is sufficient.

The broader lesson here: probability questions in IB interviews are frequently designed to exploit faulty intuition. Before answering any probability puzzle, slow down. The Monty Hall problem, the two-headed coin (conditional probability), and the birthday paradox all have answers that feel wrong the first time you encounter them. The research documents the two-headed coin question specifically: if you have two coins, one fair and one double-headed, and you flip a random coin and get heads, the probability the coin is double-headed is 2/3, not 1/2. Three equally likely "heads" outcomes exist - heads-1 or heads-2 from the double-headed coin, or heads from the fair coin. Two of the three came from the double-headed coin. Intuition says 50/50. The math says 2/3. Practicing these specifically prepares you to pause before answering rather than reflexively stating the wrong intuitive response.

---

## Category 4: Finance-Specific Brain Teasers

These combine logical reasoning with financial intuition. They are more directly relevant to banking work and more likely to appear in IB-specific interviews.

**Q16: If you were going to invest in one sector for the next ten years and could not change, what would you choose and why?**

This is not a trick question. It is a disguised research and conviction question. They want to see a thesis, not a hedge. Choose a sector you actually know something about. Name a structural tailwind - demographics, regulation, technology shift, or supply constraints. Identify why the sector will have durable pricing power. Have a counter-argument ready because they will push back.

**Q17: Why might a company's stock price fall after reporting strong earnings?**

Because the earnings, while strong in absolute terms, fell short of consensus expectations. Or because management guidance for the next quarter disappointed. Or because the strong earnings reflected one-time items rather than operating performance. The stock market prices expectations, not results. This is a fundamental concept and a common screening question in first-round interviews.

**Q18: If interest rates rise, what happens to bond prices? Now what happens to equity valuations?**

Bond prices fall - the inverse relationship: fixed coupon payments are discounted at a higher rate. For equities: higher discount rates reduce the present value of future cash flows, compressing P/E multiples and reducing DCF-based valuations, all else equal. The effect is most pronounced for long-duration assets - high-growth companies with most of their value in terminal cash flows feel the impact more than mature, low-multiple businesses with near-term earnings. This question appears frequently in first-round screens and tests whether you can trace a macro variable through to asset pricing in real time.

On the finance-specific side, research notes also surface perpetuity pricing as a brain teaser format: the present value of $1 per day forever at discount rate r = 1/r. At r = 5%, PV = $20/day x 365 = approximately $7,300 per year in perpetuity value. Lump sum vs. perpetuity trade-offs - at what discount rate do they become equivalent - follow the same structure: set the lump sum equal to C/r and solve for r.

**Q19: What is more valuable: $1 million today or $2 million in ten years?**

Depends on the discount rate. At a 7% discount rate, $1M today compounds to $1.97M in ten years - so $2M in ten years has a slight edge. At 10%, $1M today is worth $2.59M in ten years, making the $1M today clearly superior. State the concept (time value of money), set up the comparison, and give the threshold rate where the answer flips. That structure is the correct answer, not a single yes or no.

**Q20: You're advising a company that just received a $10 billion acquisition offer. How do you think about whether to recommend they accept?**

Decompose the analysis: (1) is $10B above or below intrinsic value - run a DCF, look at comparable companies and precedent transactions, assess the premium implied over current share price; (2) what is the strategic rationale - what does the acquirer gain and is this a fair sharing of synergies; (3) what are the alternatives - can the company get a higher price from another bidder, run a process, or create more value remaining independent; (4) what does the board's fiduciary duty require and what does the shareholder base want. This is an M&A advisory framework question dressed as a brain teaser.

---

## How to Handle a Question You Cannot Answer

The worst thing you can do is silence. The second worst is to say "I don't know" and stop.

The best approach, consistent across Mergers and Inquisitions, Wall Street Oasis recruiting threads, and Cookd.ai's practitioner documentation, is to say: "I don't know the answer off the top of my head, but let me work through the logic." Then work through the logic, naming your assumptions as you go, and arrive at a reasoned estimate [(1)](https://mergersandinquisitions.com/investment-banking-math/) [(3)](https://www.cookd.ai/blog/investment-banking-brain-teasers) [(4)](https://www.wallstreetoasis.com/forum/investment-banking/what-brainteasers-has-everyone-been-asked-in-interviews).

An interviewer who sees you do that is watching you do almost exactly what they need you to do in front of a client when you get asked a question you did not anticipate. The parallel is direct and deliberate. As Cookd.ai's practitioner guide puts it: "Brain teasers test something technical screens can't: your ability to think clearly under pressure, structure ambiguous problems, and communicate your reasoning in real time." [(3)](https://www.cookd.ai/blog/investment-banking-brain-teasers)

What you should not do: guess a number without any framework, go silent for an extended period, get visibly flustered, or apologize for not knowing the answer. Wall Street Oasis forum contributors consistently report the same observation from interviewers: the candidate who narrates their dead ends while working through the problem signals more than the candidate who arrives at the right answer silently [(4)](https://www.wallstreetoasis.com/forum/investment-banking/brain-teasers-examples).

The MBA Crystal Ball guide adds one more tool: treat the brain teaser as a conversation. Ask the interviewer if they agree with your approach direction before committing to the full calculation. This is appropriate, it buys time, and it maps directly to how senior bankers work - checking assumptions with counterparties before going deep on analysis [(5)](https://www.mbacrystalball.com/blog/2020/01/06/brain-teasers-interviews/).

---

## Common Mistakes in Brain Teaser Interviews

**Rushing to answer without narrating.** The single most common error. Silence while thinking reads as being stuck or panicked. Even narrating the dead ends - "I tried this approach and it didn't work because..." - is better than silence.

**Overcomplicating simple problems.** Many brain teasers have elegant solutions. If your approach is running to three pages of calculation, you have likely missed a simpler angle. The lightbulb switches problem has a one-sentence solution once you realize you can use heat as a signal.

**Accepting the intuitive answer on probability questions.** Monty Hall, the two-headed coin, and conditional probability questions are designed to exploit faulty intuition. Slow down. The Cookd.ai practitioner guide specifically calls out this pattern: "The candidates who perform best are rarely the smartest in the room. They're the ones who've practiced under realistic conditions and learned to narrate their thinking while solving." [(3)](https://www.cookd.ai/blog/investment-banking-brain-teasers)

**Failing to sanity-check.** Always close with: does this answer make intuitive sense? Is the order of magnitude right? Stating the most sensitive assumption and noting what would change if that assumption shifts by 50% is precisely what senior bankers do and precisely what good interviewers want to see.

**Over-weighting brain teaser prep.** Core technical questions - accounting, valuation, DCF mechanics, LBO logic - carry far higher ROI in IB interview preparation than brain teasers. Candidates for core M&A roles should put technical fundamentals first, mental math drills second, and brain teaser practice third, in that order. Candidates for S&T, quantitative research, and quant fund roles should weight the brain teaser and mental math categories more heavily.

---

## Preparation Protocol

For brain teasers specifically, preparation should focus on:

1. **Internalize the estimation framework.** Practice decomposing any large-number question into: population or base, rate or frequency, and arithmetic. Apply it to any estimation question you encounter in daily life. How many cars pass this intersection in an hour? How many restaurants are in this city? Build the habit so the decomposition is reflexive.

2. **Know your mental math shortcuts.** Percentage decomposition (break into 10% + 5% + remainder), rule of 72 for doubling time, approximate fractions (1/6, 1/7, 1/8, 1/9), powers of 2 and 3 up to useful limits (2^10 = 1,024; 3^6 = 729; 3^12 = 531,441). These are finite and learnable in a weekend of focused practice.

3. **Practice stating assumptions out loud.** Do this while doing practice problems alone - literally talk to yourself. The skill of narrating your logic while computing is not natural and requires deliberate repetition. Solving brain teasers silently on paper does not prepare you for performing under observation.

4. **Accept the uncertainty explicitly.** At the end of any estimation answer, say: "The most sensitive assumption in this estimate is [X]. If I'm off by 50% on that, the answer shifts to roughly [Y]." That kind of self-aware calibration is exactly what senior bankers do.

5. **Do not memorize answers - understand the structure.** If you memorize the 12-balls solution and the interviewer changes it to 9 balls and 2 weighings, you are stuck. If you understand the information theory underlying the problem, you can adapt. Circle Square's recruitment guidance makes this point directly: the goal is never to recite a solution but to demonstrate how you navigate unfamiliar territory [(2)](https://www.circlesquare.co.uk/blog/blog/navigating-brain-teasers-a-guide-to-success-in-investment-banking-interviews).

For the stress-test dimension of these questions, see [/interview-prep/stress-interview-what-mds-test/](/interview-prep/stress-interview-what-mds-test/), which covers how interviewers use difficulty and pressure to assess character rather than knowledge.

---

## What You Should Do Next

1. **Run through the 20 questions in this article with a timer.** Set a 90-second limit per question. Practice saying your reasoning out loud from the first second - do not sit in silence working through it internally and then present the answer.

2. **Add ten custom market sizing questions to your practice set.** Pick industries you do not know well. The discomfort of estimating in unfamiliar territory is exactly the condition you are preparing for.

3. **Practice the finance-specific questions (Q16-Q20) in depth.** These are the brain teasers most likely to appear in banking specifically. The interest rate / bond price / equity valuation question (Q18) in particular appears frequently in first-round screens.

4. **Do not over-prepare the answers - prepare the methodology.** If you memorize the 12-balls answer and the interviewer tweaks the question, you are stuck. If you understand the underlying structure, you can adapt.

5. **Review [/interview-prep/superday-what-to-expect/](/interview-prep/superday-what-to-expect/) to understand the full structure of the day** where these questions most commonly appear, including which interviewers tend to use them and what other question types you will face back-to-back.

---

## Citations

1. Mergers and Inquisitions - Investment Banking Math: https://mergersandinquisitions.com/investment-banking-math/
2. Circle Square - Brain Teasers in Investment Banking Interviews: https://www.circlesquare.co.uk/blog/blog/brain-teasers-in-investment-banking-interviews | https://www.circlesquare.co.uk/blog/blog/navigating-brain-teasers-a-guide-to-success-in-investment-banking-interviews
3. Cookd.ai - Investment Banking Brain Teasers: 8 IB Interview Questions: https://www.cookd.ai/blog/investment-banking-brain-teasers
4. Wall Street Oasis - IB Interview Questions and Brain Teaser Forums: https://www.wallstreetoasis.com/resources/interviews/investment-banking-interview-questions-answers | https://www.wallstreetoasis.com/forum/investment-banking/brain-teasers-examples | https://www.wallstreetoasis.com/forum/investment-banking/what-brainteasers-has-everyone-been-asked-in-interviews
5. MBA Crystal Ball - How to Answer Brain Teasers in Consulting and IB Interviews: https://www.mbacrystalball.com/blog/2020/01/06/brain-teasers-interviews/
