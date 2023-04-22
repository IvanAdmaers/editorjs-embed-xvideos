import { xvideosUrl, xvideosEmbed } from '.';

const videoId = '57180129';
const randomUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

describe('editorjs-embed-xvideos', () => {
  describe('xvideosUrl', () => {
    const url = `https://www.xvideos.com/video${videoId}/the_less_i_know_the_better_sexy_rk777.exe`;

    it('should catch a url', () => {
      expect(url.match(xvideosUrl.regex)?.[1]).toBe(videoId);
    });

    it('should not catch a url', () => {
      expect(randomUrl.match(xvideosUrl.regex)?.[1]).not.toBe(videoId);
    });
  });

  describe('xvideosEmbed', () => {
    const url = `https://www.xvideos.com/embedframe/${videoId}`;

    it('should catch a url', () => {
      expect(url.match(xvideosEmbed.regex)?.[1]).toBe(videoId);
    });

    it('should not catch a url', () => {
      expect(randomUrl.match(xvideosEmbed.regex)?.[1]).not.toBe(videoId);
    });
  });
});
