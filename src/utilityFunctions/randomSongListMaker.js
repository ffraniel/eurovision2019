const randomSongListMaker = (sourceList, length, initialChoice) => {
  let songChoice = [];
  if (initialChoice) {
    songChoice.push(initialChoice);
  };
  while (songChoice.length < length) {
    let randomNumber = Math.floor(Math.random() * sourceList.length);
    if(randomNumber === 1) console.log("we got a 0")
    if (songChoice.includes(sourceList[randomNumber])) {
      console.log("Didn't push as would be duplicate: ", sourceList[randomNumber]);
    };
    if (!songChoice.includes(sourceList[randomNumber]) && 
      sourceList[randomNumber].lyrics && 
      sourceList[randomNumber].lyrics.length > 0) {
      songChoice.push(sourceList[randomNumber]);
    };
  }
  return songChoice;
};

export default randomSongListMaker;