import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-table',
  styleUrl: './table.css',
  templateUrl: './table.html',
})
export class Table {
  @Input() data: any[] = [];
  @Input() header: any[] = [];
}
