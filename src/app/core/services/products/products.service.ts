import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Iproduct } from '../../../shared/interfaces/iproduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService  {


   constructor( private readonly httpClient:HttpClient) {}
  

  getAllProd():Observable<Iproduct[]>{
    return this.httpClient.get<Iproduct[]>('https://fakestoreapi.com/products')
  }

  getProdDetails(id:string| null):Observable<any>{
    return this.httpClient.get<Iproduct[]>(`https://fakestoreapi.com/products/${id}`)
  }
}
