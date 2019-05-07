const request = require("request");
const fs = require("fs");
const cheerio = require("cheerio");

function writeData (data){
    fs.writeFile("lyricsJson.json", JSON.stringify(data), 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("saved it!");
    }); 
}

var allSongs = [];
var classes = ".w-full .flex-grid__item";
var officialSite = "https://eurovision.tv/event/tel-aviv-2019/participants";
var lyricsClass = ".whitespace-pre-line";

request(officialSite, function(error, response, body) {
  if (!error) {
    const $ = cheerio.load(body);

    $(classes).each((i, element)=>{
      let item = $(element).html();
      let songTitle = $(item).find('.card__subtitle').text();
      let artistName = $(item).find('.card__title').text().trim();
      let country = $(item).find('.pill').text().trim();
      let lilFlag = $(item).find('.emojione').attr('src');
      let image = $(item).find('img.w-full').attr('src');
      let lyricsLink = $(item).find('.card__title').parent().attr('href');

      request(lyricsLink, function (error, response, body) {
        if(!error) {
          const $2 = cheerio.load(body);
          let lyrics = $2(lyricsClass).text();
          let songObject = {
            song: songTitle,
            artist: artistName,
            country,
            lilFlag,
            image,
            lyrics,
            index: i
          };
          allSongs.push(songObject);
          console.log(songObject.song)
          console.log(allSongs.length)
        }
      })
    });
  }
});

setTimeout(()=>{
  writeData(allSongs);
}, 12000)

