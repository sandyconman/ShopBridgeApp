import { Component, OnInit, Input } from '@angular/core';
import { ItemCard } from '../_model/ItemCard';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() card: ItemCard;
  constructor() { }

  ngOnInit() {
  }

}
