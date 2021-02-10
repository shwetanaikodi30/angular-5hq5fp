import { Component } from '@angular/core';

import { products } from '../products';
import { Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The list of products !');
  }
  onNotify() {
    window.alert('You will be notified when the products are available');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/