import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './layout/main/main.component';
import { RenderMode } from '@angular/ssr';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [

    {path:"" , redirectTo:"home" ,pathMatch:"full"} ,

    {path:'' , component:MainComponent , children:[
        

        {path:'home' ,loadComponent:()=> import('./pages/home/home.component').then((c)=>c.HomeComponent) , title:'Home'},
        {path:"products" , loadComponent:()=>import('./pages/products/products.component').then((c)=>c.ProductsComponent) ,title:"Products"},

        {path:'details/:id' , loadComponent:()=>import('./pages/product-details/product-details.component').then((c)=>c.ProductDetailsComponent) 
            , title:"Product Details", data:{RenderMode:'no-prerender'}} ,

            {path:"**" , component:NotFoundComponent , title:'Error'}
    ]}

];
