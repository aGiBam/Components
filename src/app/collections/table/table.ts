import { JsonPipe, NgClass } from '@angular/common';
import { Component, Input} from '@angular/core';
@Component({
  imports: [JsonPipe, NgClass],
  selector: 'app-table',
  styleUrl: './table.css',
  templateUrl: './table.html',
})
export class Table {
  @Input('class') classNames = '';

  @Input() data: any[] = [];
  @Input() headers: any[] = [];
}
