export default (editor, config = {}) => {
  // const domc = editor.DomComponents;
  // const defaultType = domc.getType('default');
  // const defaultModel = defaultType.model;
  // const defaultView = defaultType.view;
  // ...

  // editor.on('load', () => editor.addComponents(`<div style="margin:100px; padding:25px;">Content loaded from the plugin</div>`, { at: 0 }));
  // editor.addComponents(`<div style="margin:100px; padding:25px;">Content loaded from the plugin</div>`, { at: 0 });

  editor.DomComponents.addComponent({
    tagName: 'div',
    removable: true, // Can't remove it
    draggable: true, // Can't move it
    copyable: true, // Disable copy/past
    content: 'Content text', // Text inside component
    style: { color: 'red'},
    attributes: { title: 'here' }
  });

}
