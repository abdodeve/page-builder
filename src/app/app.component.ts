import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from "jquery";
import * as grapesjs from "grapesjs" ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'my-app';

  ngOnInit() {
    // grapesjs.init({
    //   showOffsets: 1,
    //   noticeOnUnload: 0,
    //   container: '#gjs',
    //   height: '100%'
    // });
    grapesjs.init({
      container : '#gjs',
      components: '<div class="txt-red">adeeeeeeeeeeeev</div>',
      style: '.txt-red{color: red}',
    });
  }

  ngAfterViewInit() {
      



    // let editor = grapesjs.init({
    //   container : '#gjs',
    //   components: '<div class="txt-red">Hello world!</div>',
    //   style: '.txt-red{color: red}',
    //   fromElement: true,
    //   storageManager: { autoload: 0 },
      // styleManager : {
      //   sectors: [{
      //       name: 'General',
      //       open: false,
      //       buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom']
      //     },{
      //       name: 'Dimension',
      //       open: false,
      //       buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
      //     },{
      //       name: 'Typography',
      //       open: false,
      //       buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-shadow'],
      //     },{
      //       name: 'Decorations',
      //       open: false,
      //       buildProps: ['border-radius-c', 'background-color', 'border-radius', 'border', 'box-shadow', 'background'],
      //     },{
      //       name: 'Extra',
      //       open: false,
      //       buildProps: ['transition', 'perspective', 'transform'],
      //     }
      //   ],
      // },
   // });

    // editor.BlockManager.add('testBlock', {
    //   label: 'Block',
    //   attributes: { class:'gjs-fonts gjs-f-b1' },
    //   content: `<div style="padding-top:50px; padding-bottom:50px; text-align:center">Test block</div>`
    // });
  }

}
