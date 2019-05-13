const getSnippet = (songInput) => {
  let snippetArray = songInput.lyrics.trim().split(" ");
  let start = Math.round(Math.random() * (snippetArray.length / 2));
  let possibleLengths = [30, 45, 20, 20, 26, 30, 16, 26, 40];
  let snippetLength = possibleLengths[Math.floor(Math.random() * possibleLengths.length)];
  let end = start + snippetLength;
  let lyricsSnippet = snippetArray.slice(start, end).join(" ");
  if (lyricsSnippet.length === 0) {
    snippetArray = songInput.lyrics.trim().split(" ");
    start = Math.round(Math.random() * (snippetArray.length / 2));
    possibleLengths = [30, 45, 20, 20, 26, 30, 16, 26, 40];
    snippetLength = possibleLengths[Math.floor(Math.random() * possibleLengths.length)];
    end = start + snippetLength;
    lyricsSnippet = snippetArray.slice(start, end).join(" ");
    if (lyricsSnippet.length === 0) {
      snippetArray = songInput.lyrics.trim().split(" ");
      start = Math.round(Math.random() * (snippetArray.length / 2));
      possibleLengths = [30, 45, 20, 20, 26, 30, 16, 26, 40];
      snippetLength = possibleLengths[Math.floor(Math.random() * possibleLengths.length)];
      end = start + snippetLength;
      lyricsSnippet = snippetArray.slice(start, end).join(" ");
      if (lyricsSnippet.length === 0) {
        lyricsSnippet = "Sorry, there has been an error. Please restart the quiz!";
      }
    };
  };
  return lyricsSnippet;
};

export default getSnippet;