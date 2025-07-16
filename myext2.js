(function(Scratch) {
  'use strict';
  class MyExtensionExtension {
    getInfo() {
      return {
        id: 'myext2',
        name: 'My Extension',
        color1: '#142ca3',
        color2: '#142ca3',
        color3: '#142ca3',
        blocks: [
          {
            opcode: 'myBlock3',
            blockType: Scratch.BlockType.EVENT,
            text: 'when mouse clicks',
          },
        ]
      };
    }
    myBlock3(args) {
      {
      document.addEventListener('mousedown', function() {
      runtime.startHats('utility_myBlock3');
      });
      }
    }
  }
  Scratch.extensions.register(new MyExtensionExtension());
})(Scratch);
