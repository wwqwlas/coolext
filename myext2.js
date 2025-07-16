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
            text: 'when page loads',
          },
        ]
      };
    }
    myBlock3(args) {
      {
      // This block should trigger when the page is fully loaded.
      // We can't directly trigger a hat block, so we'll use a workaround:
      // 1. Store a value in a variable to indicate the page is loaded.
      // 2. Use a separate "when flag clicked" script that checks the variable.
      
      // Set a variable in the Scratch project to indicate the page has loaded.
      // The variable must be named "pageLoaded" for this to work.
      // This ensures that a "when flag clicked" script can react when the page is ready.
      this.runtime.ext_scratch3_variables.createVariable('pageLoaded', 'true');
      return;
      }
    }
  }
  Scratch.extensions.register(new MyExtensionExtension());
})(Scratch);
