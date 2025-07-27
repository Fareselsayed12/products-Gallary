
import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { FlowbiteService } from '../../core/services/Flowbite/flowbite.service';
import { initFlowbite } from 'flowbite';
import { Iproduct } from '../../shared/interfaces/iproduct';
import { ProductsService } from '../../core/services/products/products.service';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CurrencyPipe,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit,AfterViewInit {

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
