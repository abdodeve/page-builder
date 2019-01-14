import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from "jquery";
import * as grapesjs from "grapesjs" ;
import 'grapesjs-preset-webpage';
import './grapejs-plugins/headers/headers' ;
import './grapejs-plugins/content_1/content_1' ;
import './grapejs-plugins/services/services' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit {
  title = 'crasouk-builder-app';

  ngOnInit() {

    var editor = grapesjs.init({
      showOffsets: 1,
      noticeOnUnload: 0,
      container: '#gjs',
      height: '100%',
      plugins: ['headers', 'content_1', 'services', 'gjs-preset-webpage'],
      pluginsOpts: {
                    'gjs-preset-webpage': {
                      // options
                    },
                  },
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
      canvas: {
        styles: [
          'assets/css/minimalist-basic.css',
          'assets/css/bootstrap.min.css',
          'assets/css/fontawesome/css/all.css',
          'assets/css/style.css'
        ]
      },
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
      style: `
      .classNameTest { color: red; }
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

    /**
     * Add Buttons
     * 
     */
    editor.Panels.addButton('options',  [{
          id: 'visibility',
          active: true, // active by default
          className: 'btn-toggle-borders',
          label: '<u>B</u>',
          command: 'sw-visibility', // Built-in command
        },
    ]);

  }

  ngAfterViewInit() {
  }

}
