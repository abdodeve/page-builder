export default (editor, config = {}) => {
  const bm = editor.BlockManager;
  // ...

  editor.BlockManager.add('testBlock', {
    label: 'Block',
    attributes: { class:'gjs-fonts gjs-f-b1' },
    content: `<div style="padding-top:50px; padding-bottom:50px; text-align:center">Test block</div>`
  });
}
