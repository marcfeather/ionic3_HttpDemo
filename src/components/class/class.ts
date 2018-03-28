import { Component } from '@angular/core';

/**
 * Generated class for the ClassComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'class',
  templateUrl: 'class.html'
})
export class ClassComponent {

  text: string;

  constructor() {
    console.log('Hello ClassComponent Component');
    this.text = 'Hello World';
  }

}
