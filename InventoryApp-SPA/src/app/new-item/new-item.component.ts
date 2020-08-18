import { Component, OnInit } from '@angular/core';
import { ItemService } from '../_service/item.service';
import { Item } from '../_model/Item';
import { SharedService } from '../_service/shared.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  item: any = {};
  photo: File;
  constructor(private itemService: ItemService, private sharedService: SharedService) { }

  ngOnInit() {
  }

  onPhotoSelected(event) {
    this.photo = event.target.files[0] as File;
    console.log(this.photo);
  }

  addItem() {
    const fd = new FormData();
    fd.append('name', this.item.name);
    fd.append('description', this.item.description),
    fd.append('price', this.item.price);
    fd.append('photo', this.photo);

    this.itemService.addItem(fd).subscribe(response => {
      //  load data in list component
      this.sharedService.sendClickEvent();
    }, error => {
      console.log("Add item failure");
    });
  }

}
