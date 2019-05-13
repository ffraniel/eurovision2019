import randomSongListMaker from './randomSongListMaker';
import songJSON from '../data/lyricsJson.json';

it('generates a random list of songs', () => {
  expect(randomSongListMaker()).toEqual([]);
  expect(randomSongListMaker(songJSON, 5).length).toEqual(5);
});
it('contains no duplicates', () => {
  const randomList = randomSongListMaker(songJSON, 5);
  expect(randomList[0]).not.toEqual(randomList[1]);
});
it('contains a specific item pushed to the list', () => {
  const randomList2 = randomSongListMaker(songJSON, 5, songJSON[0]);
  expect(randomList2).toContain(songJSON[0]);
});