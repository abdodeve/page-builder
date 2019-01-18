import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import * as $ from "jquery";
import * as grapesjs from "grapesjs" ;
import 'grapesjs-preset-webpage';
import '../../grapejs-plugins/headers/headers' ;
import '../../grapejs-plugins/content_1/content_1' ;
import '../../grapejs-plugins/services/services' ;
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../../services/data/data.service' ;
import { BuilderService } from '../services/builder.service' ;
import {SnotifyService} from 'ng-snotify';



@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})

export class BuilderComponent implements OnInit, AfterViewInit, OnDestroy {
 private page_name: any = "page_name_test" ;
 private editor ;
 private data ;
 private dataSubscription ;

  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private builderService: BuilderService,
    private snotifyService: SnotifyService
  ) { 
    this.dataSubscription = this.dataService.get_data().subscribe( res => this.data = res );
  }

  ngOnDestroy() {
    // Change <html> styling
    document.documentElement.classList.remove('full_page');
  }

  ngOnInit() {

    // Change <html> styling
    document.documentElement.classList.add('full_page');
    
    // Get page_name from Route
    this.activatedroute.params.subscribe(params => {
     this.page_name = params['page_name'] ;
      console.log(this.page_name) ;
    });

    this.editor = grapesjs.init({
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
    this.editor.Panels.addButton('options',  [{
          id: 'visibility',
          active: false, // active by default
          className: 'btn-toggle-borders',
          label: '<u>B</u>',
          command: 'sw-visibility', // Built-in command
        },
    ]);
    this.editor.Panels.addButton('options',  [{
          id: 'somebutton_2',
          active: false, // active by default
          className: 'btn-toggle-borders',
          label: 'Save',
          command: 'save_cmd', // Built-in command
          attributes: { title: 'Sauvgarder'},
      },
    ]);

    
    /**
     * Add Commands
     */
    this.onClickSave( this.page_name );

   /** 
    * Fetch data
    */
    this.fetch( this.page_name );
  }


  ngAfterViewInit() {
  }

  /**
   * Fetch data from server
   * 
   */
  onClickSave ( page_name: string ): void {
    // this.snotifyService.success('Example body content');


    this.editor.Commands.add('save_cmd', {
      run: (editor, sender) => {
        // turn off the button
        sender && sender.set('active', 0); 
        editor.store();
        // Retrieve data
        var htmldata = editor.getHtml();

        /**
         *  Send request
         * 
         */
        this.builderService.update( page_name, {content: htmldata} ).subscribe( res => {
              this.snotifyService.success('Modification est sauvgardé', { position: 'rightTop' });
        });
        this.router.navigate(['/dashboard']);

        return ;
      },
      stop:  function(editor, sender){
        return ;
      },
    });
  }

  /**
   * Fetch data from server
   * 
   */
  fetch( page_name: string ): void {
    this.builderService.fetch( page_name ).subscribe(res => {
      // Check results
      if( !res ){
        this.router.navigate(['/dashboard']);
        return false ;
      }

      // Bind data to editor
      this.editor.setComponents(res.content);
    });
  }
  

}
