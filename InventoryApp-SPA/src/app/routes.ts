import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

export const appRoutes: Routes = [
    {path: 'inventory', component: HomeComponent},
    {path: 'inventory/:id', component: ItemDetailsComponent},
    {path: '**', redirectTo: 'inventory', pathMatch: 'full'}
];
