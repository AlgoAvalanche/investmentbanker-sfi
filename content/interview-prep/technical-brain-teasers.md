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

They are overrated because whether you can figure out how many piano tuners are in Chicago has essentially no bearing on whether you can build a credible LBO model or manage a client call at 11pm. Plenty of excellent bankers would freeze on a cold logic puzzle while plenty of candidates who ace brain teasers turn out to be mediocre analysts.

They are underrated because they reveal something real: whether you structure your thinking, whether you stay composed when you do not immediately know the answer, and whether you can communicate your reasoning process to another person in real time. Those skills do matter in banking.

The right way to approach technical brain teasers is not to memorize the answers. It is to understand the underlying methodology - estimation, decomposition, and structured reasoning - and apply it consistently regardless of the specific question. This article covers the 20 most common types and exactly what interviewers are watching for.

For the broader interview question landscape, see [/interview-prep/investment-banking-interview-questions/](/interview-prep/investment-banking-interview-questions/).

---

## Why Banks Ask Brain Teasers

Before the questions: understanding the purpose of these questions changes how you answer them.

**Stress calibration.** Brain teasers are often used as proxies for the stress interview - the question is designed to be difficult enough that a significant percentage of candidates will not know the answer immediately. Interviewers watch what happens next. Does the candidate freeze? Do they say "I don't know" and stop? Or do they say "I'm not sure I can get to the exact answer, but let me work through this" - and then actually work through it? The latter is what they are looking for.

**Quantitative reasoning.** Banking requires the ability to estimate quickly. You will regularly need to sanity-check numbers in a model, assess whether a revenue figure is in the right ballpark, or make a quick back-of-envelope calculation in front of a client. Brain teasers test whether you can do that.

**Communication under uncertainty.** One of the most practical skills in banking is the ability to say "here's my logic" rather than "here's my answer." Brain teasers explicitly reward the process, not just the conclusion. If you get to the wrong number through rigorous logic, you will often do better than a candidate who guesses the right number but cannot explain how they got there.

According to Wall Street Oasis, brain teasers are more commonly used at quantitative-heavy groups - structuring desks, LevFin, quantitative research - than at classic M&A coverage groups, though they appear across the spectrum at first-round screening level.

---

## Category 1: Market Sizing Questions (The Most Common Type)

Market sizing questions test your ability to decompose a large problem into estimable components and combine them into a reasonable answer. The format is almost always: "How many [X] are there in [Y]?"

**The framework for every market sizing question:**

1. Define the scope (which country, what counts as X)
2. Identify the population or denominator
3. Apply a reasonable frequency or incidence rate
4. Do the math and state the assumption explicitly
5. Sanity check the result

**Q1: How many gas stations are there in the United States?**

Population: 330 million people. Average household size: 2.5, giving approximately 130 million households. Car ownership rate: roughly one car per household for simplicity (actually higher, but this is an estimate). So approximately 130 million cars. Average car fills up once per week, consuming maybe 10 gallons. Annual fuel demand: 130 million x 52 x 10 = approximately 67.6 billion gallons per year. A typical gas station pumps perhaps 1,000-1,500 gallons per day, so roughly 500,000 gallons per year. 67.6 billion / 500,000 = approximately 135,000 stations. The actual number is around 145,000, so this approach gets you to the right order of magnitude.

State your approach, show your math, and name your key assumption (gallons per day per station is the most sensitive one here).

**Q2: How many taxi cabs are there in New York City?**

NYC population: approximately 8 million. The fraction that takes a cab versus subway versus walking: maybe 5-10% on any given day, skewed toward Manhattan. Let's say 500,000 cab trips per day in the city. Average cab does roughly 20-25 trips per day (accounting for waiting, traffic, time to pick up). 500,000 / 22 = approximately 22,000 cabs. The actual licensed yellow cab number has been around 13,000-14,000 (plus rideshare, which inflates total supply significantly). Given the model, this is a reasonable range.

**Q3: How many golf balls fit in a school bus?**

This is a volume problem. School bus interior: roughly 8 feet wide, 6 feet high, 20 feet long = 960 cubic feet. Subtract seats and frame, call it 750 cubic feet of usable space. A golf ball is approximately 1.68 inches in diameter, so about 0.14 feet. Volume of a golf ball: (4/3) x pi x r^3 = approximately 0.0026 cubic feet. But golf balls packed randomly fill about 64% of the space (sphere packing efficiency). So usable volume for golf balls: 750 x 0.64 = 480 cubic feet. 480 / 0.0026 = approximately 185,000 golf balls. Acceptable range is anywhere from 100,000 to 500,000 with clearly stated assumptions.

**Q4: What is the market size for wedding photography in the US?**

Approximately 2 million weddings per year in the US. The fraction that hire a professional photographer: maybe 80-85%, so 1.6-1.7 million. Average spend on photography: roughly $2,500-$4,000 at the median. Use $3,000. 1.65 million x $3,000 = $4.95 billion. Round to $5 billion. Checks out against market research figures (the market has been estimated in the $3-5 billion range).

**Q5: How many smartphones are sold in the US per year?**

US population: 330 million. Adults and teenagers who use smartphones: roughly 250 million. Average replacement cycle: every 2.5-3 years. Annual purchases: 250 million / 2.75 = approximately 90 million. Add new adopters (small increment at this point in market maturity). Round to 90-100 million units. Actual figures have run in the 175-190 million range including feature phones and children's devices, so the pure "adult replacement" estimate is conservative. State that assumption and the result is defensible.

---

## Category 2: Mental Math and Estimation (Quick Calculation Tests)

These are shorter, faster, and are testing raw numerical comfort. Banking involves numbers constantly - interviewers want to see that arithmetic does not slow you down.

**Q6: What is 17% of 300?**

Break it into pieces: 10% of 300 = 30. 7% of 300 = 21. Total: 51. Always decompose percentages into multiples of 10% and 5% when you cannot do the multiplication instantly.

**Q7: A company has $500M in revenue growing at 8% per year. What is the revenue in five years?**

Use the rule of 72 to estimate doubling time: 72 / 8 = 9 years to double. Five years is roughly 55% of the way to doubling. So revenue is approximately 1.47 times $500M = approximately $735M. The actual answer (500 x 1.08^5) = $734M. Getting to $735M mentally is excellent.

**Q8: What is the square root of 2,500?**

50. Questions like this are testing whether you recognize perfect squares. Know your squares up to 20 (400), and a few useful ones: sqrt(2500) = 50, sqrt(4900) = 70, sqrt(14400) = 120.

**Q9: A stock goes up 50% and then falls 50%. What is the net change?**

Down 25%. Start at 100. Up 50%: 150. Down 50%: 75. The asymmetry of percentage changes - a common error. This is a trap question and being able to answer immediately is the point.

**Q10: Approximately what is 1/7 as a decimal?**

0.143, or close to 14.3%. Memorize basic fractions: 1/6 = 0.167, 1/7 = 0.143, 1/8 = 0.125, 1/9 = 0.111. These come up in quick back-of-envelope calculations constantly.

---

## Category 3: Logic and Probability Puzzles

These tend to appear more in quantitative groups. They require structured logical thinking rather than estimation.

**Q11: You have 12 balls, one of which is either heavier or lighter than the others. You have a balance scale and three weighings. How do you find the odd ball?**

This is a classic information theory problem. Three weighings with a balance scale give you 3^3 = 27 possible outcomes. You need to identify 1 of 24 possible outcomes (12 balls x 2 possible deviations). The solution exists but is complex - the interviewer usually does not expect you to solve this fully. They want to see you: (1) recognize that it is possible in theory, (2) work through the first weighing (4 vs 4, with 4 aside), and (3) reason through what each outcome tells you. Process over answer.

**Q12: You flip a fair coin and get heads 10 times in a row. What is the probability the 11th flip is heads?**

50%. The coin has no memory. This is a test of whether you will say 50% confidently (correct) or hedge with some version of "the law of large numbers means tails is due" (the gambler's fallacy). The interviewer is explicitly testing whether you know the difference.

**Q13: Three light switches control three light bulbs in a room you cannot see. You can flip switches as much as you want, then enter the room once. How do you determine which switch controls which bulb?**

Turn switch 1 on for several minutes, then turn it off. Turn switch 2 on. Enter the room. The bulb that is on = switch 2. The bulb that is off but warm = switch 1. The bulb that is off and cold = switch 3. The key insight: the question assumes incandescent bulbs that retain heat. If the interviewer objects, pivot to discussing the assumption explicitly - that is also a good signal.

**Q14: You have a 3-gallon jug and a 5-gallon jug. How do you measure exactly 4 gallons?**

Fill the 5-gallon jug. Pour from 5 into the 3, filling the 3. You now have 2 gallons in the 5. Empty the 3. Pour the 2 gallons into the 3. Fill the 5 again. Pour from 5 into 3 (which already has 2 gallons, so it takes 1 more). Now you have 4 gallons in the 5. Done.

**Q15: What is the probability that two people in a room of 23 share a birthday?**

Greater than 50% - this is the birthday paradox. The intuitive answer is "very low" because 23 out of 365 days seems small. The correct calculation considers the probability that no two people share a birthday, which falls below 50% faster than intuition suggests because every new person is compared to all previous people. The exact probability is approximately 50.7%. You do not need to derive this - being able to explain why the answer is counterintuitively high is sufficient.

---

## Category 4: Finance-Specific Brain Teasers

These combine logical reasoning with financial intuition. They are more directly relevant to banking work.

**Q16: If you were going to invest in one sector for the next ten years and could not change, what would you choose and why?**

This is not a trick question - it is a disguised research and conviction question. They want to see a thesis, not a hedge. Choose a sector you actually know something about. Name a structural tailwind (demographics, regulation, technology shift). Identify why the sector will have durable pricing power. Have a counter-argument ready because they will push back.

**Q17: Why might a company's stock price fall after reporting strong earnings?**

Because the earnings, while strong in absolute terms, fell short of consensus expectations. Or because management guidance for the next quarter disappointed. Or because the strong earnings reflected one-time items rather than operating performance. The stock market prices expectations, not results. This is a fundamental concept and a very common screening question.

**Q18: If interest rates rise, what happens to bond prices? Now what happens to equity valuations?**

Bond prices fall (inverse relationship - fixed coupon payments are discounted at a higher rate). For equities: higher discount rates reduce the present value of future cash flows, which should compress P/E multiples and reduce DCF-based valuations, all else equal. The effect is most pronounced for long-duration assets - high-growth companies with most of their value in terminal cash flows feel the impact more than mature, low-multiple businesses.

**Q19: What is more valuable: $1 million today or $2 million in ten years?**

Depends on the discount rate. At a 7% discount rate, $1M today is worth $1.97M in ten years - so $2M in ten years has a slight edge. At 10%, $1M today is worth $2.59M in ten years, making the $1M today clearly superior. State the concept (time value of money), set up the comparison, and give a threshold rate where the answer flips. That is the correct structure for this question.

**Q20: You're advising a company that just received a $10 billion acquisition offer. How do you think about whether to recommend they accept?**

Decompose the analysis: (1) is $10B above or below intrinsic value - run a DCF, look at comps and precedent transactions, assess the premium implied over the current share price; (2) what is the strategic rationale - what does the acquirer gain and is this a fair sharing of the synergies; (3) what are the alternatives - can the company get a higher price from another bidder or create more value remaining independent; (4) what is the board's fiduciary duty and what does the shareholder base want. This is an M&A advisory framework question dressed as a brain teaser.

---

## How to Handle a Question You Cannot Answer

The worst thing you can do is silence. The second worst is to say "I don't know" and stop.

The best approach, as noted in Mergers & Inquisitions' interview guides and echoed across Wall Street Oasis recruiting threads, is to say: "I don't know the answer off the top of my head, but let me work through the logic." Then work through the logic, naming your assumptions as you go, and arrive at a reasoned estimate.

An interviewer who sees you do that is watching you do almost exactly what they need you to do in front of a client when you get asked a question you did not anticipate. The parallel is direct.

What you should not do: guess a number without any framework, get visibly flustered, or apologize for not knowing the answer. Composure and process are the entire test.

---

## Preparation Protocol

For brain teasers specifically, preparation should focus on:

1. **Internalize the estimation framework.** Practice decomposing any large-number question into: population/base, rate/frequency, and arithmetic. Apply it to any estimation question you encounter in daily life. How many cars pass this intersection in an hour? How many restaurants are in this city? Build the habit.

2. **Know your mental math tricks.** Percentage decomposition, rule of 72, approximate fractions. These should be reflexive.

3. **Practice stating assumptions out loud.** Do this while doing practice problems alone - literally talk to yourself. The skill of narrating your logic while computing is not natural and requires practice.

4. **Accept the uncertainty explicitly.** At the end of any estimation answer, say: "The most sensitive assumption in this estimate is [X]. If I'm off by 50% on that, the answer would shift to roughly [Y]." That kind of self-aware calibration is exactly what senior bankers do and exactly what good interviewers want to see.

For the stress-test dimension of these questions, see [/interview-prep/stress-interview-what-mds-test/](/interview-prep/stress-interview-what-mds-test/), which covers how interviewers use difficulty and pressure to assess character rather than knowledge.

---

## What You Should Do Next

1. **Run through the 20 questions in this article with a timer.** Set a 90-second limit per question. Practice saying your reasoning out loud from the first second - do not sit in silence working through it internally and then present the answer.

2. **Add ten custom market sizing questions to your practice set.** Pick industries you do not know well. The discomfort of estimating in unfamiliar territory is exactly the condition you are preparing for.

3. **Practice the finance-specific questions (16-20) in depth.** These are the brain teasers most likely to appear in banking specifically. The interest rate / bond price / equity valuation question (Q18) in particular appears frequently in first-round screens.

4. **Do not over-prepare the answers - prepare the methodology.** If you memorize the 12-balls answer and the interviewer tweaks the question to 9 balls and 2 weighings, you are stuck. If you understand the underlying information theory, you can adapt.

5. **Review [/interview-prep/superday-what-to-expect/](/interview-prep/superday-what-to-expect/) to understand the full structure of the day** where these questions most commonly appear, including which interviewers tend to use them and what other question types you will face back-to-back.
