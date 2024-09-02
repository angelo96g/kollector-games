import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Ps5Component } from './components/ps5/ps5.component';
import { XboxComponent } from './components/xbox/xbox.component';
import { nintendoswitchComponent } from './components/nintendoswitch/nintendoswitch.component';
import { ProductsComponent } from './components/products/products.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {path : 'Ps5',component:Ps5Component},
    {path : 'xbox',component:XboxComponent},
    {path : 'nintendoswitch', component:nintendoswitchComponent},
    {path : 'products', component: ProductsComponent}
];
