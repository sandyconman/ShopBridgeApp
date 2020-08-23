import { Component, OnInit, Input } from '@angular/core';
import { ItemCard } from '../_model/ItemCard';
import { AlertifyService } from '../_service/alertify.service';
import { SharedService } from '../_service/shared.service';
import { ItemService } from '../_service/item.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() card: ItemCard;
  constructor(private alertifyService: AlertifyService, private sharedService: SharedService, private itemService: ItemService) { }

  ngOnInit() {
  }

  deleteItem(event) {
    event.stopPropagation();
    this.alertifyService.confirm('Do you want to delete ' + this.card.name, () => {
      this.itemService.deleteItem(this.card.id).subscribe(() => {
        this.alertifyService.message(this.card.name + 'deleted.');
        this.sharedService.sendClickEvent();
      });
    });
  }

}
