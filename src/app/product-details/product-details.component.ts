import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor( private route:ActivatedRoute,) {
      console.log("constructor");
   }
ngOnInit(): void {
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));


  this.product = products.find(product => product.id =productIdFromRoute);
  console.log("ngOnInit()");
//throw new Error('Method not implemented.');



}

 

}