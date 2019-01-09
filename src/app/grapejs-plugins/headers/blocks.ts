export default (editor, config = {}) => {

  // Header 1
  editor.BlockManager.add('Header_1', {
    category:'Headers',
    label: 'Header 1',
    content: `<div style="padding-top:50px; padding-bottom:50px; text-align:center">Test block</div>`,
    attributes: { class:'gjs-fonts gjs-f-b1' }
  });

  // Header 2
  editor.BlockManager.add('Header_2', {
    category:'Headers',
    label: 'Header 2',
    content: `<div style="padding-top:50px; padding-bottom:50px; text-align:center">Test block</div>`,
    attributes: { class:'gjs-fonts gjs-f-b1' }
  });
}
