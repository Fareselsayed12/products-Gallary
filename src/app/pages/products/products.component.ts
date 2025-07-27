import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Iproduct } from '../../shared/interfaces/iproduct';
import { ProductsService } from '../../core/services/products/products.service';
import { FlowbiteService } from '../../core/services/Flowbite/flowbite.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [RouterLink,CurrencyPipe],
  templateUrl:'./products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit,AfterViewInit {
  constructor(private flowbiteService: FlowbiteService) {}
       private readonly productsService=inject(ProductsService)


     ProductList:Iproduct[]=[]



  ngOnInit(): void {
     this.getProducts()
  }

  ngAfterViewInit(): void {
    this.flowbiteService.loadFlowbite((flowbite)=>{})
}



    getProducts():void{
      this.productsService.getAllProd().subscribe({
        next:(res)=>{
          console.log(res);
          this.ProductList=res
          
        },error:(err)=>{
          console.log(err);
          
        }
      })
    }



}
