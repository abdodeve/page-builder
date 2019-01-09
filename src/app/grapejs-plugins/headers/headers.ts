import * as grapesjs from "grapesjs" ;
import loadComponents from './components';
import loadBlocks from './blocks';

export default grapesjs.plugins.add('headers', (editor,  opts = {}) => {

  const options = { ...{
    // default options
  },  ...opts };

  // Add components
  loadComponents(editor, options);

  // Add blocks
  loadBlocks(editor, options);

  // Load
  editor.on('load', () => loadComponents(editor, options));
});
