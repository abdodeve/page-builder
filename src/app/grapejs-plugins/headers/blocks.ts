export default (editor, config = {}) => {

  // Header 1
  editor.BlockManager.add('Header_1', {
    category:'Creasouk',
    label: 'Header 1',
    content: `
    <div class="container">
        <!-- This is just a sample existing content (content can be loaded from a database) -->
        <div class="row">
           <div class="col-12">
              <div class="text-center">
                 <img src="assets/img/logo.png" class="logo img-fluid">
                 <h5 style="
                    font-weight: 300;
                    ">BEAUTIFUL CONTENT</h5>
                 <div class="display">
                    <h1 class="adev_class_color">LOREM IPSUM IS SIMPLY DUMMY TEXT</h1>
                 </div>
              </div>
           </div>
        </div>
        <hr>
        <div class="row">
           <div class="col-12 col-md-6">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus.</p>
           </div>
           <div class="col-12 col-md-6">
              <img src="https://innovastudio.com/builderdemo/assets/minimalist-basic/e09-1.jpg" class="img-fluid">
           </div>
        </div>
     </div>
    `,
    attributes: { class:'gjs-fonts gjs-f-b1' }
  });

}
