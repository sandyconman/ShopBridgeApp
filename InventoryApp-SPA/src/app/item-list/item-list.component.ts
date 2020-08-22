import { Component, OnInit } from '@angular/core';
import { Item } from '../_model/Item';
import { ItemService } from '../_service/item.service';
import { DomSanitizer} from '@angular/platform-browser';
import { ItemCard } from '../_model/ItemCard';
import { SharedService } from '../_service/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  cards: ItemCard[] = [];
  clickEventsubscription: Subscription;

  constructor(private itemService: ItemService, private sanitizer: DomSanitizer, private sharedService: SharedService) { 
    this.clickEventsubscription = this.sharedService.getClickEvent().subscribe(() => {
      this.loadItems();
    });
  }

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.cards = [];
    this.itemService.getAllItems().subscribe((items: Item[]) => {
      items.forEach((item: Item) => {
        const card: ItemCard = {
          id: item.id,
          name: item.name,
          description: item.description,
          price: item.price,
          photo: (item.photo == null) ? '' :
            this.getImageSrc(item.photo.photoAsByteArray)
        };
        this.cards.push(card);
      });
    }, error => {
      console.log('Couldn\'t load items');
    })
  }

  getImageSrc(data: Blob) {
    const objectURL = 'data:image/png;base64,' + data;
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

}
