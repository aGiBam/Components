import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-item-list',
  styleUrl: './item-list.css',
  templateUrl: './item-list.html',
})
export class ItemList {
  @Input() items: Array<{ image: string; title: string; description: string }> = [];
}
