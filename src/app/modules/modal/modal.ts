import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-modal',
  styleUrl: './modal.css',
  templateUrl: './modal.html',
})
export class Modal implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {
   document.body.appendChild(this.el.nativeElement);
   }
}
