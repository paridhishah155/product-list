import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: any;
  showLoadinMask = true;
  constructor(private pService: ProductServiceService) { }

  ngOnInit(): void {
    this.pService.get('', null).then((response: any) => {
      console.log(response);
      this.productList = response;
      this.showLoadinMask = false;
    });
  }

}
