import { Component, OnInit, AfterViewInit } from '@angular/core';
 import * as $ from "jquery";
 import * as grapesjs from "grapesjs" ;

// declare grapesjs: any; // Important!
// declare var grapesjs;
// declare var $: any ;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'my-app';

  ngOnInit() {
    
    grapesjs.init({
      container : '#gjs',
      components: '<div class="txt-red">Hello world!</div>',
      style: '.txt-red{color: red}',
    });
  }

  ngAfterViewInit() {
   // var my_var = $('.title') ;
    console.log(grapesjs);
  }

}
