export default (editor, config = {}) => {

  // Services 1
  editor.BlockManager.add('services', {
    category:'Creasouk',
    label: 'Services',
    content: `
    <div class="container">
    <div class="row">
       <div class="col-12">
          <div class="text-center">
             <h1 style="font-size:3em">OUR SERVICES</h1>
             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
       </div>
    </div>
    <div class="row">
       <div class="col-md-4 text-center">
          <i class="fas fa-dharmachakra size-64"></i>
          <h3>Lorem Ipsum</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
       </div>
       <div class="col-md-4 text-center">
            <i class="fas fa-building size-64"></i>
            <h3>Lorem Ipsum</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
       </div>
       <div class="col-md-4 text-center">
            <i class="fas fa-crown size-64"></i>
            <h3>Lorem Ipsum</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
       </div>
       </div>
      </div>
    `,
    attributes: { class:'gjs-fonts gjs-f-b1' }
  });

}
