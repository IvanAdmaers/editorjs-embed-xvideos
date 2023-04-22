const params = {
  embedUrl: 'https://www.xvideos.com/embedframe/<%= remote_id %>',
  html: '<iframe frameborder="0" width="510" height="400" scrolling="no" allowfullscreen="allowfullscreen"></iframe>',
  height: 510,
  width: 400,
};

export const xvideosUrl = {
  regex:
    /^https?:\/\/(?:www\.)?(?:xvideos(?:\.xxx)?\.com\/)?video(\d+)\/(?:.*)/,
  ...params,
};

export const xvideosEmbed = {
  regex: /^https?:\/\/(?:www\.)?xvideos\.com\/embedframe\/(\d+)/,
  ...params,
};
