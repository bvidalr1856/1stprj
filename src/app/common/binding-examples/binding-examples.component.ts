import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-examples',
  templateUrl: './binding-examples.component.html',
  styleUrls: ['./binding-examples.component.css']
})
export class BindingExamplesComponent implements OnInit {
title : string = 'Structural Directives';
fruits : string[] = [];
  constructor() { }

  ngOnInit(): void {
    this.fruits.push('Orange');
    this.fruits.push('Banana');
    this.fruits.push('Grapes');
    this.fruits.push('Cherry');
  }

}
