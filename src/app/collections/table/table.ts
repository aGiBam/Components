import { JsonPipe } from '@angular/common';
import { Component, Input} from '@angular/core';
@Component({
  imports: [JsonPipe],
  selector: 'app-table',
  styleUrl: './table.css',
  templateUrl: './table.html',
})
export class Table {
  @Input() data: any[] = [];
  @Input() headers: any[] = [];
}
