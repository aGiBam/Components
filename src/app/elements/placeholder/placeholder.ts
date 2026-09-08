import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-placeholder',
  styleUrl: './placeholder.css',
  templateUrl: './placeholder.html',
})
export class Placeholder {
  @Input() header = true;
  @Input() lines = 3;
}
