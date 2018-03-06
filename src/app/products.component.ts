import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  productName = '';
  isDisabled = true;
  products = ['Skis', 'Bindings']

  constructor() {
    setTimeout(() => {
      // this.productName = 'A Tree';
      this.isDisabled = false;
    }, 3000);
  }

  onAddProduct() {
    this.products.push(this.productName);
  }

}
