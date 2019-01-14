export default (editor, config = {}) => {

  editor.DomComponents.addComponent({
    tagName: 'div',
    removable: true, // Can't remove it
    draggable: true, // Can't move it
    copyable: true, // Disable copy/past
    content: '<h1>Content text : <h1><b>Bold</b>', // Text inside component
    style: { color: 'red'},
    attributes: { title: 'here' }
  });

}
