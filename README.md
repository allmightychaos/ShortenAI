# ShortenAI - Your Summarizations Tool
*(We will implement a feature soon, that allows you to summarize text from a file or paste it directly onto the site, but pssh!)*<br>

### Coming Soon...

1. White-/ Darkmode switch
2. Paste text directly onto the site
3. Upload text from files
4. soon... (You'll see)

<br><br>

### What is ShortenAI?

[ShortenAI](https://shortenai.almightychaos.dev) is a powerful summarizer, which gives you the best summarizations from articles or websites compared to our competition, as it uses the newest technology of AI, and not just one.<br>

It makes getting the most useful and important informations from an article and makes enhances your reading experience. <br>
As it uses GPT-3, and other models soon, it will just get better and better. <br>
<br>

### How it all started:

We were working on a project, when we discovered that ChatGPT can summarize websites by just giving it the URL. At least we thought. <br>
Well, as ChatGPT's information is cut off at September 2021, we thought "How does it do that?". So we started to look into it more. As it turns out, ChatGPT does **not** scrapes the data off the website and summarizes it, it analyzes the URL and then provides you with a hallucinated summary. <br>
<br>

### Issues we encountered:

That's when we started creating found out about a Webscraping tool, which then get's processed via the GPT-3 API and can summarize text. We loved that, but it was only accessible via terminal. Not really user-friendly. 
<br>
As time in development wen't on, GPT-4 with for example the new Bing with it's AI was released. At first, we wanted to utilize that, however it uses your computer resources to load the data so it can process it. Not a good option either.
<br>
Lastly, we discovered that OpenAI's API Token System was more expensive with Unicode characters instead of latin. To mitigate this, the Article Extracor checks if the article text contains non-latin symbols and tries to precess the text with translit - a library that converts non-latin characters to latin characters. <br>

### How we solved it:

So, we made use of the "Webscraper" (takes the most important information from the site - nothing illegal, don't worry!), takes the text and summarizes it with the OpenAI's API. Created in React and TailwindCSS to make it look pretty and user-friendly. <br>