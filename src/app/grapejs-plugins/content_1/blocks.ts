export default (editor, config = {}) => {

  // content_1
  editor.BlockManager.add('content_1', {
    category:'Creasouk',
    label: 'Content 1',
    content: `
   <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="text-center">
             <h1>Beautiful content. Responsive.</h1>
             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
   </div>
   <hr>
   <div class="row">
      <div class="col-12 col-md-6">
         <img src="https://innovastudio.com/builderdemo/assets/minimalist-basic/w04-1.png" class="img-fluid">
      </div>
      <div class="col-12 col-md-6">
         <div style="margin:30px 0 0 0">
            <p><i class="fas fa-cog size-48 icon_content_1"></i> Lorem Ipsum is simply dummy text.</p>
            <p><i class="far fa-heart size-48 icon_content_1"></i> Lorem Ipsum is simply dummy text.</p>
            <p><i class="far fa-edit size-48 icon_content_1"></i> Lorem Ipsum is simply dummy text.</p>
         </div>
      </div>
   </div>
   </div>
    `,
    attributes: { class:'gjs-fonts gjs-f-b1' }
  });

}
