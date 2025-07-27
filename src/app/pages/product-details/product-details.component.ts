import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products/products.service';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from '../../shared/interfaces/iproduct';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{


  private readonly productsService=inject(ProductsService)
  private readonly activatedRoute=inject(ActivatedRoute)


  prodId:string|null=null

  productInfo:Iproduct={ } as Iproduct

  ngOnInit(): void {
      this.getProdId();
      this.getItemtDetails();
  }
  

  getProdId():void{
    this.activatedRoute.paramMap.subscribe({
      next:(params)=>{
        console.log(params);
        
        this.prodId=params.get('id')

        
      }
    })
  }



  getItemtDetails():void{
    this.productsService.getProdDetails(this.prodId).subscribe({
      next:(res)=>{
        console.log(res);
        this.productInfo =res
   
        
      }
    })
  }

}
