import { Component, Input } from '@angular/core';
import { Times } from "../times";

@Component({
  imports: [Times],
  selector: 'app-placeholder',
  styleUrl: './placeholder.css',
  templateUrl: './placeholder.html',
})
export class Placeholder {
  @Input() header = true;
  @Input() lines = 3;
}
