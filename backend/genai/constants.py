aiModel = "gemini-2.5-flash-lite"

summaryInstruction = """
Assignment: Summarize the news.

Notes:

* Only generate a response when the input contains valid HTML.
* If the input is null or undefined, return an empty string: `""`.
* Return only the generated response in HTML — no additional phrases or explanations.
* You may include links, images, videos, etc., from the input.

Additional Instructions:

* Produce a concise summary.
* Separate the information clearly for better readability.
* Examples of inputs that MUST return "":
  * 123 (number)
  * true / false (boolean)
  * {} (object)
  * [] (array)
  * "Hello world" (plain text without HTML tags)
  * "<not-a-real-tag>" (unknown or invalid tag)
  * Any other input that does not contain valid HTML

Examples of INCORRECT input and the output that MUST be returned:

Example 1  
Input: 123  
Output: ""

Example 2  
Input: true  
Output: ""

Example 3  
Input: false  
Output: ""

Example 4  
Input: {}  
Output: ""

Example 5  
Input: []  
Output: ""

Example 6  
Input: "Hello world"  
Output: ""

Example 7  
Input: "<not-a-real-tag>"  
Output: ""

Examples of CORRECT input that must be summarized:

Example 1:

Input:

<p>Tech companies are pumping bnstructionsillions into the growth of artificial intelligence, with OpenAI this month signing a <a href="https://www.theguardian.com/technology/2025/nov/03/openai-cloud-computing-deal-amazon-aws-datacentres-nvidia-chips">$38bn (£29bn)</a> cloud computing deal with Amazon as part of a <a href="https://www.theguardian.com/technology/2025/nov/02/global-datacentre-boom-investment-debt">$3tn</a> datacentre spending spree. </p>
<p>But as people increasingly use AI chatbots – such as OpenAI’s ChatGPT, Google’s Gemini, Microsoft’s Copilot, Meta AI and Perplexity – for advice and task completion, some observers have concerns about <a href="https://www.theguardian.com/technology/2025/oct/18/are-we-living-in-a-golden-age-of-stupidity-technology">misinformation, hullicinations</a> and irresponsible advice. </p>
<p>A survey this year from KPMG and the University of Melbourne found that <a href="https://kpmg.com/uk/en/insights/ai/uk-attitudes-to-ai.html">80 percent</a> of people in the UK believe AI regulation is required.</p>
<p>We want to hear from people who have asked chatbots for financial advice. Have you asked AI tools for help with money, debt or personal finance? Were you recommended anything unexpected, or unsuitable? What was the financial result? Do you have concerns?</p>
<div class="element element-callout" data-campaign-id="4b4b5e9f-db40-4f45-a33a-645a275947b1">
    <h2>Callout</h2>
</div>
<p><em><strong>If you’re having trouble using the form click <a href="https://guardiannewsandmedia.formstack.com/forms/ai_money_advice">here</a>. Read terms of service <a href="https://viewer.gutools.co.uk/help/terms-of-service">here</a> and privacy policy <a href="https://viewer.gutools.co.uk/help/privacy-policy">here</a>.</strong></em></p>

Output:

<p>Tech companies continue to invest heavily in AI, with OpenAI signing a <a href="https://www.theguardian.com/technology/2025/nov/03/openai-cloud-computing-deal-amazon-aws-datacentres-nvidia-chips">$38bn (£29bn)</a> cloud deal with Amazon as part of a <a href="https://www.theguardian.com/technology/2025/nov/02/global-datacentre-boom-investment-debt">$3tn</a> global datacentre expansion.</p>
<p>As users rely more on chatbots like ChatGPT, Gemini and Copilot, experts warn about <a href="https://www.theguardian.com/technology/2025/oct/18/are-we-living-in-a-golden-age-of-stupidity-technology">misinformation and hallucinations</a> in AI-generated advice.</p>
<p>A KPMG and University of Melbourne study found <a href="https://kpmg.com/uk/en/insights/ai/uk-attitudes-to-ai.html">80% of UK citizens</a> support stronger AI regulation.</p>
<p>The outlet asks readers to share their experiences with AI-driven financial advice — whether helpful, misleading or harmful.</p>

Example 2:

Input:

<p>The EU has opened an investigation into Google Search over concerns the US tech company has been “demoting” commercial content from news media sites.</p>
<p>The bloc’s executive arm announced the move after monitoring found that certain content created with advertisers and sponsors was being given such a low priority by Google that it was in effect no longer visible in search results.</p>
<p>European Commission officials said this potentially unfair “loss of visibility and of revenue” to media owners could be a result of an anti-spam policy Google operates.</p>
<p>Under the rules of the Digital Market Act (DMA), which governs competition in the tech sectors, Google must apply “fair, reasonable and non-discriminatory conditions of access to publishers’ websites on Google Search”.</p>
<p>Commission officials said the investigation was not into the overall indexing of newspapers or their reporting on Google Search, just into commercial content provided by third parties.</p>
<p>Media partnerships with businesses selling goods or services ranging from holidays to trainers were “normal commercial practice in the offline world” and they should also exist in a fair online marketplace such as Google, officials said.</p>
<p>For example a newspaper may have teamed up with Nike to offer discounts, but there was evidence that under a Google search, that sub-domain of the newspaper would be “demoted to a point that users will not be able to find it any more”. That in turn affects the newspaper.</p>
<p>“We are concerned that Google’s policies do not allow news publishers to be treated in a fair, reasonable and non-discriminatory manner in its search results,” said Teresa Ribera, the executive vice-president for clean, just and competitive transition policies at the European Commission.</p>
<p>Officials will ask publishers to submit evidence of any impacts to its traffic and revenues as a result of suspected breaches of fair practices in the coming days, the commission said.</p>
<p>Ribera added: “We will investigate to ensure that news publishers are not losing out on important revenues at a difficult time for the industry, and to ensure Google complies with the Digital Markets Act.</p>
<p>“Today we are taking action to ensure that digital gatekeepers do not unfairly restrict businesses that rely on them from promoting their own products and services.”</p>
<p>Google hit out at the EU’s investigation, calling it “misguided” and “without merit”.</p>
<p>It said in a blogpost: “Unfortunately, the investigation announced today into our anti-spam efforts is misguided and risks harming millions of European users.</p>
<p>“And the investigation is without merit: a German court has already dismissed a similar claim, ruling that our anti-spam policy was valid, reasonable, and applied consistently.”</p>
<p>It said the policy was designed to build “trustworthy results” and “fight deceptive pay-for-play tactics” that “degrade” Google Search listings.</p>
<p>The EU said it was compelled to take steps to protect traditional media, which were now competing in the marketplace online, given the recent assertion by the commission president, Ursula von der Leyen, in her state of the union address that the media at large were at risk with the arrival of AI and widespread threats to media funding.</p>
<p>Officials stressed the investigation was a “normal non-compliance” inquiry and although fines of up to 20% of revenue could be imposed, that would only be a possibility if Google was found to be practising “systematic non-compliance”.</p>

Output:

<p>The EU has launched an investigation into Google Search after finding that commercial content from news outlets may be unfairly “demoted” in search rankings.</p>
<p>The European Commission says the issue may stem from Google’s antispam policies, which could be reducing visibility and revenue for publishers.</p>
<p>Under the DMA, Google must treat publishers fairly, and officials emphasize the case focuses specifically on sponsored or commercial content.</p>
<p>Google criticized the inquiry as “misguided”, noting a German court previously upheld its antispam policy as valid and consistently applied.</p>

Example 3:

Input:

<p>Tech companies and child protection agencies will be given the power to test whether artificial intelligence tools can produce <a href="https://www.theguardian.com/technology/2025/jul/10/ai-generated-child-sexual-abuse-videos-surging-online-iwf">child abuse images</a> under a new UK law.</p>
<p>The announcement was made as a safety watchdog revealed that reports of AI-generated child sexual abuse material [CSAM] have more than doubled in the past year from 199 in 2024 to 426 in 2025.</p>
<p>Under the change, the government will give designated AI companies and child safety organisations permission to examine AI models – the underlying technology for chatbots such as ChatGPT and image generators such as Google’s Veo 3 – and ensure they have safeguards to prevent them from <a href="https://www.theguardian.com/technology/2025/sep/21/chatbot-site-depicting-child-sexual-abuse-images-raises-fears-over-misuse-of-ai">creating images of child sexual abuse</a>.</p>
<p>Kanishka Narayan, the minister for AI and online safety, said the move was “ultimately about stopping abuse before it happens”, adding: “Experts, under strict conditions, can now spot the risk in AI models early.”</p>
<p>The changes have been introduced because it is illegal to create and possess CSAM, meaning that AI developers and others cannot create such images as part of a testing regime. Until now, the authorities have had to wait until AI-generated CSAM is uploaded online before dealing with it. This law is aimed at heading off that problem by helping to prevent the creation of those images at source.</p>
<p>The changes are being introduced by the government as amendments to the crime and policing bill, legislation which is also introducing a <a href="https://www.theguardian.com/technology/2025/feb/01/ai-tools-used-for-child-sexual-abuse-images-targeted-in-home-office-crackdown">ban on possessing, creating or distributing AI models</a> designed to generate child sexual abuse material.</p>
<p>This week Narayan visited the London base of Childline, a helpline for children, and listened to a mock-up of a call to counsellors featuring a report of AI-based abuse. The call portrayed a teenager seeking help after <a href="https://www.theguardian.com/uk-news/2025/mar/09/children-in-uk-as-young-as-11-targeted-by-sextortion-criminals-data-reveals">he had been blackmailed</a> by a sexualised deepfake of himself, constructed using AI.</p>
<p>“When I hear about children experiencing blackmail online, it is a source of extreme anger in me and rightful anger amongst parents,” he said.</p>
<p>The Internet Watch Foundation, which monitors CSAM online, said reports of AI-generated abuse material – such as a webpage that may contain multiple images – had more than doubled so far this year. Instances of category A material – the most serious form of abuse – rose from 2,621 images or videos to 3,086.</p>
<p>Girls were overwhelmingly targeted, making up 94% of illegal AI images in 2025, while depictions of newborns to two-year-olds rose from five in 2024 to 92 in 2025.</p>
<p>Kerry Smith, the chief executive of the Internet Watch Foundation, said the law change could “a vital step to make sure AI products are safe before they are released”.</p>
<p>“AI tools have made it so survivors can be victimised all over again with just a few clicks, giving criminals the ability to make potentially limitless amounts of sophisticated, photorealistic child sexual abuse material,” she said. “Material which further commodifies victims’ suffering, and makes children, particularly girls, less safe on and off line.”</p>
<p>Childline also released details of counselling sessions where AI has been mentioned. AI harms mentioned in the conversations include: using AI to rate weight, body and looks; chatbots dissuading children from talking to safe adults about abuse; being bullied online with AI-generated content; and online blackmail using AI-faked images.</p>
<p>Between April and September this year, Childline delivered 367 counselling sessions where AI, chatbots and related terms were mentioned, four times as many as in the same period last year. Half of the mentions of AI in the 2025 sessions were related to mental health and wellbeing, including using chatbots for support and AI therapy apps.</p>

Output:

<p>A new UK law allows tech companies and child protection agencies to legally test whether AI models can generate <a href="https://www.theguardian.com/technology/2025/jul/10/ai-generated-child-sexual-abuse-videos-surging-online-iwf">child abuse imagery</a>.</p>
<p>AI-generated CSAM reports more than doubled in a year, prompting the government to act pre-emptively.</p>
<p>The law also supports broader restrictions on AI models designed to create illegal content.</p>
<p>Authorities warn about rising deepfake extortion and note that girls account for 94% of illegal AI-generated images.</p>

"""

recommendationInstruction = """
Assignment: Recommend three sections based on analysed data.

Notes:

* Analyse all items.
* Consider the most recent items.
* Identify the THREE most relevant sections.
* Don't include things like: "Here is your analysed data" or things like that.
* Do not include any explanation, numbering, Markdown, or code blocks.
* Only Return them in a list formatted like: ["football","sport","technology"].

Additional Instructions:

* If the input isn't in the allowed section below, returns a based section.
* If there isn't three different sections, add based ones.
* Always convert ALL section inputs to lowercase.
* Replace all spaces in section names with hyphens ("-"), both in input normalization and output.
* Always return ALL output sections in lowercase and with hyphens when necessary.

Allowed sections for recommendation (all must be handled as lowercase with hyphens if needed):

* technology
* football
* sport
* politics
* business
* environment
* science
* culture
* lifeandstyle
* travel
* uk-news
* us-news
* world
* australia-news
* books
* film
* stage
* music
* artanddesign
* media
* education
* money
* opinion
* fashion
* food
* law
* global-development
* cities
* games

---

### Examples of CORRECT input, analysys and final OUTPUT.

**Example 1:**

Input: [{"section":"football","type":"liveblog","clicked":"11/21/2025"},{"section":"football","type":"article","clicked":"11/21/2025"},{"section":"football","type":"article","clicked":"11/21/2025"},{"section":"football","type":"article","clicked":"11/21/2025"},{"section":"football","type":"liveblog","clicked":"11/21/2025"},{"section":"world","type":"article","clicked":"11/21/2025"},{"section":"politics","type":"liveblog","clicked":"11/21/2025"},{"section":"politics","type":"liveblog","clicked":"11/21/2025"},{"section":"culture","type":"article","clicked":"11/21/2025"}]

Step 1:
Read all data.

Step 2:
Consider only the most recent items (ignore older ones if they exist).

Step 3:
Check if each section exists in the allowed list.
If a section is not in the list, replace it with the closest related (based) section.

Step 4:
Count how many times each section appears among the recent items.

Count:
football → 5x
politics → 2x
world → 1x
culture → 1x

Step 5:
Choose the most frequent sections.
If two or more sections have the same count, break the tie using the next most common ones in the dataset.

Step 6:
Return only the array. Do not include markdown, json, explanations, or steps.
Convert all items to lowercase and replace spaces with hyphens where needed.

Output returned: ["football","politics","world"]

---

**Example 2:**

Input: [{"section":"technology","type":"article","clicked":"11/21/2025"},{"section":"technology","type":"article","clicked":"11/21/2025"},{"section":"technology","type":"article","clicked":"11/21/2025"},{"section":"technology","type":"article","clicked":"11/21/2025"},{"section":"technology","type":"article","clicked":"11/21/2025"},{"section":"technology","type":"article","clicked":"11/21/2025"},{"section":"technology","type":"article","clicked":"11/21/2025"},{"section":"games","type":"article","clicked":"11/21/2025"},{"section":"games","type":"article","clicked":"11/21/2025"},{"section":"games","type":"article","clicked":"11/21/2025"},{"section":"games","type":"article","clicked":"11/21/2025"},{"section":"games","type":"article","clicked":"11/21/2025"},{"section":"games","type":"article","clicked":"11/21/2025"},{"section":"games","type":"article","clicked":"11/21/2025"},{"section":"us-news","type":"liveblog","clicked":"11/21/2025"},{"section":"us-news","type":"article","clicked":"11/21/2025"},{"section":"us-news","type":"article","clicked":"11/21/2025"}]

Step 1:
Read all data.

Step 2:
Check if each section exists in the allowed list.
If a section is not in the list, replace it with the closest related (based) section.

Step 3:
Consider only the most recent items (ignore older ones if they exist).

Step 4:
Count how many times each section appears among the recent items.

Count:
technology → 7x
games → 7x
us-news → 3x

Step 5:
Choose the most frequent sections.
If two or more sections have the same count, break the tie using the next most common ones in the dataset.

Step 6:
Return only the array. Do not include markdown, json, explanations, or steps.
Convert all items to lowercase and replace spaces with hyphens where needed.

Output: ["technology","games","us-news"]

---

**Example 3:**

Input: [
{ "section": "politics", "type": "article", "clicked": "11/21/2025" },
{ "section": "politics", "type": "article", "clicked": "11/21/2025" },
{ "section": "politics", "type": "article", "clicked": "11/21/2025" },
{ "section": "politics", "type": "article", "clicked": "11/21/2025" },
{ "section": "politics", "type": "article", "clicked": "11/21/2025" },
{ "section": "politics", "type": "article", "clicked": "11/21/2025" },

{ "section": "opinion", "type": "article", "clicked": "11/21/2025" },
{ "section": "opinion", "type": "article","clicked": "11/21/2025" },
{ "section": "opinion", "type": "article","clicked": "11/21/2025" },
{ "section": "opinion", "type": "article","clicked": "11/21/2025" },

{ "section": "educational", "type": "article","clicked": "11/21/2025" },
{ "section": "educational", "type": "article","clicked": "11/21/2025" },
{ "section": "educational", "type": "article","clicked": "11/21/2025" },

{ "section": "world", "type": "article","clicked": "11/21/2025" },
{ "section": "world", "type": "article","clicked": "11/21/2025" },
{ "section": "world", "type": "article","clicked": "11/21/2025" },

{ "section": "law", "type": "article","clicked": "11/21/2025" }
]

Step 1:
Read all data.

Step 2:
Consider only the most recent items (ignore older ones if they exist).

Step 3:
Check if each section exists in the allowed list.
If a section is not in the list, replace it with the closest related (based) section.

Step 4:
Count how many times each section appears among the recent items.

Count:
politics → 6x
opinion → 4x
educational → 3x
world → 3x
law → 1x

Step 5:
Choose the most frequent sections.
If two or more sections have the same count, break the tie using the next most common ones in the dataset.

Step 6:
Return only the array. Do not include markdown, json, explanations, or steps.
Convert all items to lowercase and replace spaces with hyphens where needed.

Output: ["politics","opinion","educational"]

---

**Example 4:**

Input: [{"section":"technology","type":"article","clicked":"11/21/2025"},{"section":"technology","type":"article","clicked":"11/21/2025"},{"section":"technology","type":"article","clicked":"11/21/2025"},{"section":"games","type":"article","clicked":"11/21/2025"},{"section":"games","type":"article","clicked":"11/21/2025"},{"section":"games","type":"article","clicked":"11/21/2025"}]

Step 1:
Read all data.

Step 2:
Check if each section exists in the allowed list.
If a section is not in the list, replace it with the closest related (based) section.

Step 3:
Consider only the most recent items (ignore older ones if they exist).

Step 4:
Count how many times each section appears among the recent items.

Count:
technology → 3x
games → 3x

Step 5:
Choose the most frequent sections.

Step 6:
If there are fewer than 3 different sections after selection, complete the list with a thematically related section.
For technology + games, the most related available option in the list is educational.

Step 7:
Return only the array. Do not include markdown, json, explanations, or steps.
Convert all items to lowercase and replace spaces with hyphens where needed.

Output: ["technology","games","educational"]

---

**Example 5:**

Input: [
{"section":"sci-fi","type":"article","clicked":"11/19/2025"},
{"section":"sci-fi","type":"article","clicked":"11/19/2025"},
{"section":"future-tech","type":"article","clicked":"11/19/2025"},
{"section":"future-tech","type":"article","clicked":"11/19/2025"},
{"section":"future-tech","type":"article","clicked":"11/19/2025"}
]

Step 1:
Read all data.

Step 2:
Check if each section exists in the allowed list.
If a section is not in the list, replace it with the closest related (based) section.

Checking...
sci-fi → NOT in list → closest related = science
future-tech → NOT in list → closest related = technology

Step 3:
Consider only the most recent items (ignore older ones if they exist).

Step 4:
Count how many times each section appears among the recent items.

Count:
science → 2x
technology → 3x

Step 5:
Choose the most frequent sections.
technology is more frequent → pick first. science is next.

Step 6:
If there are fewer than 3 different sections after selection, complete the list with a thematically related section.
For technology + science, a related option in the allowed list is education.

Step 7:
Return only the array. Do not include markdown, json, explanations, or steps.
Convert all items to lowercase and replace spaces with hyphens where needed.

Output: ["technology","science","education"]

---

**Example 6:**

Input: [
{"section":"politics","type":"article","clicked":"11/21/2025"},
{"section":"politics","type":"article","clicked":"11/21/2025"},
{"section":"politics","type":"article","clicked":"11/21/2025"},
{"section":"politics","type":"article","clicked":"11/21/2025"},
{"section":"politics","type":"article","clicked":"11/21/2025"},
{"section":"politics","type":"article","clicked":"11/21/2025"}
]

Step 1:
Read all data.

Step 2:
Consider only the most recent items (ignore older ones if they exist).

Step 3:
Check if each section exists in the allowed list.
If a section is not in the list, replace it with the closest related (based) section.

Step 4:
Count how many times each section appears among the recent items.

Count:
politics → 6x

Step 5:
Choose the most frequent sections.
Here we have only one section → politics

Step 6:
If there are fewer than 3 different sections after selection, complete the list with thematically related sections.
For politics, the most related available options in the list are **world** and **law**.

Step 7:
Return only the array. Do not include markdown, json, explanations, or steps.
Convert all items to lowercase and replace spaces with hyphens where needed.

Output: ["politics","world","law"]

---

**Example 7:**

Input: [
{"section":"games","type":"article","clicked":"11/20/2025"},
{"section":"games","type":"article","clicked":"11/20/2025"},
{"section":"games","type":"article","clicked":"11/20/2025"},
{"section":"games","type":"article","clicked":"11/20/2025"}
]

Step 1:
Read all data.

Step 2:
Check if each section exists in the allowed list.
If a section is not in the list, replace it with the closest related (based) section.

Checking...
games → exists → keep

Step 3:
Consider only the most recent items (ignore older ones if they exist).

Step 4:
Count how many times each section appears among the recent items.

Count:
games → 4x

Step 5:
Choose the most frequent sections.
Here we have only one section → games

Step 6:
If there are fewer than 3 different sections after selection, complete the list with thematically related sections.
For games, the most related available options in the list are **technology** and **education**.

Step 7:
Return only the array. Do not include markdown, json, explanations, or steps.
Convert all items to lowercase and replace spaces with hyphens where needed.

Output: ["games","technology","education"]

"""
