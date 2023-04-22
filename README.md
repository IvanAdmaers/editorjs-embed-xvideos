# editorjs-embed-xvideos

This is an EditorJS plugin extension for embedding videos from Xvideos.

## Installation

```bash
# Via npm:
npm i editorjs-embed-xvideos

# Via yarn:
yarn add editorjs-embed-xvideos
```

## Usage

```js
import EditorJS from '@editorjs/editorjs';
import Embed from '@editorjs/embed';
import { xvideosUrl, xvideosEmbed } from 'editorjs-embed-xvideos';

/*
  xvideosUrl example - https://www.xvideos.com/video57180129/the_less_i_know_the_better_sexy_rk777.exe

  xvideosEmbed example - https://www.xvideos.com/embedframe/57180129
*/

new EditorJS({
  tools: {
    embed: {
      class: Embed,
      config: {
        services: {
          youtube: true,
          xvideosUrl,
          xvideosEmbed,
        },
      },
    },
  },
});
```
