Eurovision 2019 Quiz

A React.js app where you have only a snippet of the lyrics from a song to use to guess which country the song is by.

The utility folder contains a function that i used to scrape the data about all the songs, the artists, their related information and images.

I used Cheerio and the Request.js to get the data and Node's 'fs' module to write them to file.

I also made use of the Speech Synthesis API in modern browsers so you can have the words spoken to you in the very natural sounding robot voice. It's amusing but not really helpful. Good luck!

To run the project locally you will need to have Node.js and NPM installed. 

First type

  git clone https://github.com/ffraniel/eurovision2019.git

cd into the folder and type 

  npm install

This will install all the dependencies. From here you can type

  npm start 

to run the project locally.