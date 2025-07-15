(function(Scratch) {
  'use strict';
  class MyExtensionExtension {
    getInfo() {
      return {
        id: 'myext',
        name: 'My Extension',
        color1: '#14a357',
        color2: '#14a357',
        color3: '#14a357',
        blocks: [
          {
            opcode: 'block1',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set page html to [html]',
            arguments: {
              html: { type: Scratch.ArgumentType.STRING, defaultValue: '<h1>hi!<h1/>' },
            },
          },
        ]
      };
    }
    block1(args) {
      const {html} = args;
      {
      document.body.innerHTML = html;
      }
    }
  }
  Scratch.extensions.register(new MyExtensionExtension());
})(Scratch);
