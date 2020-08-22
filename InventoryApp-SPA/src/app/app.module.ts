import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemService } from './_service/item.service';
import { NavComponent } from './nav/nav.component';
import { NewItemComponent } from './new-item/new-item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { SharedService } from './_service/shared.service';
import { ItemCardComponent } from './item-card/item-card.component';
import { HomeComponent } from './home/home.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

@NgModule({
  declarations: [
      AppComponent,
      NavComponent,
      NewItemComponent,
      ItemListComponent,
      ItemCardComponent,
      HomeComponent,
      ItemDetailsComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ItemService,
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
