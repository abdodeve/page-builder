import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from "jquery";
import * as grapesjs from "grapesjs" ;
import 'grapesjs-preset-webpage';
import './grapejs-plugins/adev_first_plugin/adev_first_plugin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit {
  title = 'my-app';

  ngOnInit() {

  //   var editor = grapesjs.init({
  //     container : '#gjs',
  //     plugins: ['gjs-preset-webpage'],
  //     pluginsOpts: {
  //       'gjs-preset-webpage': {
  //         // options
  //       }
  //     }
  // });

    var editor = grapesjs.init({
      showOffsets: 1,
      noticeOnUnload: 0,
      container: '#gjs',
      height: '100%',
      // plugins: ['gjs-preset-webpage', 'adev_first_plugin'],
      plugins: ['adev_first_plugin'],
      // pluginsOpts: {
      //               'gjs-preset-webpage': {
      //                 // options
      //               },
      blockManager: {
        blocks: [
          {
            id: 'section', // id is mandatory
            label: '<b>Section</b>', // You can use HTML/SVG inside labels
            attributes: { class:'gjs-block-section' },
            content: `<section>
              <h1>This is a simple title</h1>
              <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
            </section>`,
          },
        ]
      },
      fromElement: true,
      /* 
      storageManager:
         # (Dev mode) Don't store data on localStorage  -> false
         # (Production mode set storageManager to -> true to store localStorage)
      */
      storageManager: { 
                        type: null,
                        autoload: false,
                        autosave: false,
                      },
     // storageManager: {type: 'none'},
      style: `.panel {
        width: 90%;
        max-width: 700px;
        border-radius: 3px;
        padding: 30px 20px;
        margin: 150px auto 0px;
        background-color: #d983a6;
        box-shadow: 0px 3px 10px 0px rgba(0,0,0,0.25);
        color:rgba(255,255,255,0.75);
        font: caption;
        font-weight: 100;
      }
  
      .welcome {
        text-align: center;
        font-weight: 100;
        margin: 0px;
      }
  
      .logo {
        width: 70px;
        height: 70px;
        vertical-align: middle;
      }
  
      .logo path {
        pointer-events: none;
        fill: none;
        stroke-linecap: round;
        stroke-width: 7;
        stroke: #fff
      }
  
      .big-title {
        text-align: center;
        font-size: 3.5rem;
        margin: 15px 0;
      }
  
      .description {
        text-align: justify;
        font-size: 1rem;
        line-height: 1.5rem;
      }
      `,
      styleManager : {
        sectors: [{
            name: 'General',
            open: false,
            buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom']
          },{
            name: 'Dimension',
            open: false,
            buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
          },{
            name: 'Typography',
            open: false,
            buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-shadow'],
          },{
            name: 'Decorations',
            open: false,
            buildProps: ['border-radius-c', 'background-color', 'border-radius', 'border', 'box-shadow', 'background'],
          },{
            name: 'Extra',
            open: false,
            buildProps: ['transition', 'perspective', 'transform'],
          }
        ],
      },
    });

  // editor.addComponents(`<div style="margin:100px; padding:25px;">Content loaded from the plugin</div>`, { at: 0 });



    var pnls = editor.Panels.getPanels();
    console.log(pnls);


    editor.Panels.addButton('options',  {
      id: 'visibility',
      active: true, // active by default
      className: 'btn-toggle-borders',
      label: '<u>B</u>',
      command: 'sw-visibility', // Built-in command
    });

  }

  ngAfterViewInit() {
  }

}
