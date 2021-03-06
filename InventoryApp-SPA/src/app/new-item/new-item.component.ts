import { Component, OnInit } from '@angular/core';
import { ItemService } from '../_service/item.service';
import { Item } from '../_model/Item';
import { SharedService } from '../_service/shared.service';
import { AlertifyService } from '../_service/alertify.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  model: any = {};
  photo: File;
  constructor(private itemService: ItemService, private sharedService: SharedService, private alertifyService: AlertifyService) { }

  ngOnInit() {
  }

  onPhotoSelected(event) {
    this.photo = event.target.files[0] as File;
  }

  addItem() {
    const fd = new FormData();
    fd.append('name', this.model.name);
    fd.append('description', this.model.description),
    fd.append('price', this.model.price);
    fd.append('photo', this.photo);
    this.itemService.addItem(fd).subscribe(response => {
      //  load data in list component
      this.sharedService.sendClickEvent();
      this.model = {};
    }, error => {
      this.alertifyService.error('Add item failure');
    });
  }
}
