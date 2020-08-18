import { Component, OnInit } from '@angular/core';
import { ItemService } from '../_service/item.service';
import { Item } from '../_model/Item';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  item: any = {};
  photo: File;
  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  onPhotoSelected(event) {
    this.photo = event.target.files[0] as File;
    console.log(event);
    console.log(this.photo);
  }

  addItem() {
    const newItem: Item = {
      id: 0,
      name: this.item.name,
      description: this.item.description,
      price: this.item.price,
      photo: this.photo
    };

    this.itemService.addItem(newItem).subscribe(response => {
      console.log(response);
    });
  }

}
