<h1>WhatDoTheyThink</h1>
<h4> General Assembly Project 3 by Mark Goldstein and Peter Amadon</h4>

<h2>Technologies Used:</h2>
<ol>
<li>Html + Css</li>
<li>Node.js</li>
<li>Mongodb: We used Mongodb and Mlab for our database</li>
<li>Angular.js for simple and easy to use format</li>
<li>Async Node module to handle our linked API calls</li>
<li>Watson Natual language API: The watson natual language API allows us to process the sentiment of each article. By doing so we can view how positive or negative the article views its topic as well as the individuals written about there in.</li>
<li>NewsAPI: The NewsAPI was used to grab articles from a few sources to be put through WATSON. </li>
<li>AMcharts.js: used to visual the data we collected</li>
</ol>

<h2>>Use Cases/User Stories:</h2>
<ul>
<li>Informed daily Consumer: Many individuals consume media from many  sources in a single day. It is possible that without your knowledge you are being subjected to a specific view point and do not even know that you dont see the other side. By checking the sentiment score for a topic you frequently read from the sources your typically go to it will be possible to identify if they lean positive or negative on the subject to illuminate for you reader whether or not they are recieving a balanced view.   </li>
<li>Bloggers: Bloggers highlighting the differences between reporting styles and rhetoric could download our graphs as examples of the sources proclivity to report on an issue in a certain way. By continuing to grab the graphs they build a detailed timeline for a specific sources movement more negative or positive reporting.  </li>
<li>Local news stations: Running stories on the alt right or new liberals can be difficult! By running analysis on their rhetoric it has become to easy to identify the fearmongering tactics used by those who wish to divide us! Watson natural language API tracks the emotions associated with articles and can allow local news stations to report of the divisiveness of these groups.  </li>
<li>Personal Interest: Whatdotheythink can also provide interesting data for those simple trolling the interenet for intersting things. Ever wonder whether the BBC and the New York Times feel the same way about NATO? By combining the search and analysis into one step we have created a one stop shop for interested parties. </li>
</ul>


<h2>The Issue/Approach</h2>
<p>On a daily basis thousands of articles are written around the world and are read by millions of people. Every single organization is likely to have some kind of lean on a specific topic. We set out to find a way to indentify how these sources lean and to attempt to find a pattern in the way that they do. While limited in scope the NEWSAPI provided us the neccesary starting point for what could be a much larger project. With only three sources currently being utilized we can identify the differences in sentiment across multiple topics and return the information in a way that is easy to digest. By also providing the articles that were analyzed we empower our users to find for themselves why specific sources may lean one way or the other and what the prediliction actually looks like. </p>


<h2>Continuing issues/Future plans</h2>
<p>One of the major issues we faced in the creation of this web app was how to limit the scope of the idea. The NEWSAPI quickly solved that issue for us as it was really the only free API source for news articles from mulitple sources. Had we been able to/willing to start and continue paying $50 a month for what seems like a small number of articles we could be funneling the news from every major country though this web app. We believe that it would be very interesting to see how sources report on domestic, foreign, international, military, scientific, and every other type of article under the sun. It is supremely important for readers to know what the information says and why it's saying it!</p>


<h2>Links</h2>
<a href="https://whatdotheythink.herokuapp.com/">WhatDoTheyThink HerokuApp</a>
<a href="https://github.com/Pamadon/WhatDoYouThinkOfUS">GitHub</a>

<h2>Installing Locally:</h2>
<ul>Follow Steps:
    <li>Fork and/or clone REPO.</li>
    <li>Run "npm install" in your terminal</li>
    <li>Run Mongod: to ensure they data as a place to go</li>
		<li>Retireve API keys from both NEWSAPI and WATSON NATURAL LANGUAGE</li>
    <li>Create a .env file and populate it with your keys making sure they look like KEY_NAME="KEY".</li>
</ul>
