import { Component, ElementRef, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-modal',
  styleUrl: './modal.css',
  templateUrl: './modal.html',
})
export class Modal implements OnInit {
  @Output() close = new EventEmitter();
  constructor(private el: ElementRef) {}

  closeModal(event?: Event) {
    event?.stopPropagation();
    this.close.emit();
  }

  ngOnInit() {
   document.body.appendChild(this.el.nativeElement);
   }

   ngOnDestroy() {
    this.el.nativeElement.remove();
    console.log('Modal component destroyed');
   }
}
