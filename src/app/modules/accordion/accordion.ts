import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  imports: [NgClass],
  selector: 'app-accordion',
  styleUrl: './accordion.css',
  templateUrl: './accordion.html',
})
export class Accordion {
  @Input() items: { title: string; content: string }[] = [];
  openedItemIndex = 0 ;

  onClick(index: number) {
    if (this.openedItemIndex === index) {
      this.openedItemIndex = -1; // Close the currently opened item
    } else {
      this.openedItemIndex = index; // Open the clicked item
    }
  }
}
