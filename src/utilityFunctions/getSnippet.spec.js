import getSnippet from './getSnippet.js';
import songJSON from '../data/lyricsJson.json';
const songLyrics = songJSON[0];

it('returns a string', () => {
  expect(typeof getSnippet(songLyrics)).toEqual('string');
});
it('the string is not empty', () => {
  expect(getSnippet(songLyrics).length).toBeGreaterThan(0);
});
