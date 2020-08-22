import { Component, OnInit } from '@angular/core';
import { Item } from '../_model/Item';
import { ItemService } from '../_service/item.service';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../_service/alertify.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  item: Item;
  constructor(private itemService: ItemService, private route: ActivatedRoute,
              private alertifyService: AlertifyService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.loadItem();
  }

  loadItem() {
    // tslint:disable-next-line: no-string-literal
    this.itemService.getItem(+this.route.snapshot.params['id']).subscribe((item: Item) => {
      this.item = item;
      console.log(item);
    }, error => {
      this.alertifyService.error('Item failed to load');
    });
  }

  getImageSrc(data: Blob) {
    const objectURL = 'data:image/png;base64,' + data;
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

}
