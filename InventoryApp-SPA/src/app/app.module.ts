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

@NgModule({
  declarations: [	
      AppComponent,
      NavComponent,
      NewItemComponent,
      ItemListComponent,
      ItemCardComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ItemService,
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
